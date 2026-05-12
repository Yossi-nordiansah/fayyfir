<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/product/{category}', function ($category) {
    return Inertia::render('DetailProduct', [
        'categoryName' => urldecode($category)
    ]);
})->name('product.detail');

Route::get('/gallery', function () {
    return Inertia::render('Gallery');
})->name('gallery');

Route::get('/about', function () {
    return Inertia::render('AboutUs');
})->name('about');


Route::get('/dashboard', function () {
    return redirect()->route('manage-product.index');
})->middleware(['auth:catalogue', 'verified'])->name('dashboard');

Route::middleware('auth:catalogue')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/admin/contact-location', function(){
        return Inertia::render('Admin/ManageContactLocation');
    })->name('contact-location');
    Route::get('/admin/manage-admin', function(){
        return Inertia::render('Admin/ManageAdmin');
    })->name('manage-admin');
    Route::get('/admin/manage-gallery', function(){
        return Inertia::render('Admin/ManageGallery');
    })->name('manage-gallery');
    
    Route::resource('/admin/manage-product', ProductController::class)->names('manage-product')->parameters([
        'manage-product' => 'product'
    ]);

    Route::get('/admin/manage-stats', function(){
        return Inertia::render('Admin/ManageStats');
    })->name('manage-stats');
});

require __DIR__.'/auth.php';
