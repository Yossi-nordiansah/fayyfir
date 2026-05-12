<?php

namespace App\Models\catalogue;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'name',
        'description',
        'image',
        'slug',
        'status',
    ];
    protected $connection = 'catalogue';

    public function subproducts()
    {
        return $this->hasMany(Subproduct::class, 'products_id');
    }

    /**
     * Handle the image upload process.
     * Deletes the old image if it exists and stores the new one.
     *
     * @param \Illuminate\Http\UploadedFile $image
     * @param string $directory
     * @return string
     */
    public function handleUploadImage($image, $directory = 'images/products')
    {
        // Hapus gambar lama jika ada
        $this->deleteImage();

        // Simpan gambar baru ke storage (default: storage/app/public/images/products)
        $path = $image->store($directory, 'public');
        
        // Update attribute image
        $this->image = $path;

        return $path;
    }

    /**
     * Delete the current image from storage.
     *
     * @return void
     */
    public function deleteImage()
    {
        if ($this->image && \Illuminate\Support\Facades\Storage::disk('public')->exists($this->image)) {
            \Illuminate\Support\Facades\Storage::disk('public')->delete($this->image);
        }
    }
    
}
