<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use App\Models\catalogue\Product;
use App\Models\catalogue\Subproduct;
use App\Models\catalogue\ProductFeature;
use App\Models\catalogue\SubproductImage;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::with(['subproducts.features', 'subproducts.images'])->get();
        return Inertia::render('Admin/ManageProduct', [
            'products' => $products
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:50|unique:catalogue.products,name',
            'description' => 'nullable|string|max:1000',
            'image' => 'nullable|image',
            'status' => 'required|string|in:active,inactive',
            'subproducts' => 'nullable|array',
            'subproducts.*.name' => 'required|string|max:255',
            'subproducts.*.description' => 'required|string',
            'subproducts.*.images' => 'nullable|array',
            'subproducts.*.images.*' => 'image|max:2048',
            'subproducts.*.features' => 'nullable|array',
            'subproducts.*.features.*.name' => 'nullable|string|max:255',
        ]);

        DB::connection('catalogue')->transaction(function () use ($request) {
            $product = new Product($request->only(['name', 'description', 'status']));
            $product->slug = Str::slug($request->name);
            
            if ($request->hasFile('image')) {
                $product->handleUploadImage($request->file('image'));
            }

            $product->save();

            if ($request->has('subproducts')) {
                foreach ($request->subproducts as $index => $subData) {
                    $subproduct = $product->subproducts()->create([
                        'name' => $subData['name'],
                        'slug' => Str::slug($subData['name']),
                        'description' => $subData['description'],
                    ]);

                    // Handle Subproduct Images
                    if ($request->hasFile("subproducts.{$index}.images")) {
                        foreach ($request->file("subproducts.{$index}.images") as $imageFile) {
                            $path = $imageFile->store('images/subproducts', 'public');
                            $subproduct->images()->create(['image_path' => $path]);
                        }
                    }

                    if (isset($subData['features'])) {
                        foreach ($subData['features'] as $featData) {
                            if (!empty($featData['name'])) {
                                $subproduct->features()->create([
                                    'name' => $featData['name'],
                                ]);
                            }
                        }
                    }
                }
            }
        });

        return redirect()->back()->with('success', 'Product created successfully.');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $request->validate([
            'name' => 'required|string|max:50|unique:catalogue.products,name,' . $product->id,
            'description' => 'nullable|string|max:1000',
            'image' => 'nullable|image',
            'status' => 'required|string|in:active,inactive',
            'subproducts' => 'nullable|array',
            'subproducts.*.name' => 'required|string|max:255',
            'subproducts.*.description' => 'required|string',
            'subproducts.*.features.*.name' => 'nullable|string|max:255',
        ]);

        DB::connection('catalogue')->transaction(function () use ($request, $product) {
            $product->fill($request->only(['name', 'description', 'status']));
            $product->slug = Str::slug($request->name);

            if ($request->hasFile('image')) {
                $product->handleUploadImage($request->file('image'));
            }

            $product->save();

            // Handle Subproducts Sync
            $existingSubIds = $product->subproducts->pluck('id')->toArray();
            $newSubIds = [];

            if ($request->has('subproducts')) {
                foreach ($request->subproducts as $index => $subData) {
                    $subId = $subData['id'] ?? null;
                    
                    if ($subId && in_array($subId, $existingSubIds)) {
                        $subproduct = Subproduct::find($subId);
                        $subproduct->update([
                            'name' => $subData['name'],
                            'slug' => Str::slug($subData['name']),
                            'description' => $subData['description'],
                        ]);
                        $newSubIds[] = $subId;
                    } else {
                        $subproduct = $product->subproducts()->create([
                            'name' => $subData['name'],
                            'slug' => Str::slug($subData['name']),
                            'description' => $subData['description'],
                        ]);
                        $newSubIds[] = $subproduct->id;
                    }

                    // Handle Subproduct Images Sync
                    $requestedImages = $subData['images'] ?? [];
                    // Existing images are sent as strings (paths)
                    $existingImagePaths = array_filter($requestedImages, fn($img) => is_string($img));
                    
                    // Delete records for images no longer in the list
                    $imagesToDelete = $subproduct->images()->whereNotIn('image_path', $existingImagePaths)->get();
                    foreach ($imagesToDelete as $img) {
                        Storage::disk('public')->delete($img->image_path);
                        $img->delete();
                    }

                    // Handle Subproduct Images (Append new ones)
                    if ($request->hasFile("subproducts.{$index}.images")) {
                        foreach ($request->file("subproducts.{$index}.images") as $imageFile) {
                            $path = $imageFile->store('images/subproducts', 'public');
                            $subproduct->images()->create(['image_path' => $path]);
                        }
                    }

                    // Handle Features Sync
                    $existingFeatIds = $subproduct->features->pluck('id')->toArray();
                    $newFeatIds = [];

                    if (isset($subData['features'])) {
                        foreach ($subData['features'] as $featData) {
                            if (!empty($featData['name'])) {
                                $featId = $featData['id'] ?? null;
                                if ($featId && in_array($featId, $existingFeatIds)) {
                                    $feature = ProductFeature::find($featId);
                                    $feature->update(['name' => $featData['name']]);
                                    $newFeatIds[] = $featId;
                                } else {
                                    $feature = $subproduct->features()->create(['name' => $featData['name']]);
                                    $newFeatIds[] = $feature->id;
                                }
                            }
                        }
                    }
                    $subproduct->features()->whereNotIn('id', $newFeatIds)->delete();
                }
            }

            // Cleanup deleted subproducts and their images
            $subsToDelete = $product->subproducts()->whereNotIn('id', $newSubIds)->get();
            foreach ($subsToDelete as $sub) {
                foreach ($sub->images as $img) {
                    Storage::disk('public')->delete($img->image_path);
                }
                $sub->delete();
            }
        });

        return redirect()->back()->with('success', 'Product updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->deleteImage();
        // Cleanup subproduct images before delete (handled by cascade in DB, but files need manual cleanup)
        foreach ($product->subproducts as $sub) {
            foreach ($sub->images as $img) {
                Storage::disk('public')->delete($img->image_path);
            }
        }
        $product->delete();

        return redirect()->back()->with('success', 'Product deleted successfully.');
    }
}
