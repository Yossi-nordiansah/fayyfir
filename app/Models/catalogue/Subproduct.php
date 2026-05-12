<?php

namespace App\Models\catalogue;

use Illuminate\Database\Eloquent\Model;

class Subproduct extends Model
{
    protected $connection = 'catalogue';

    protected $fillable = [
        'products_id',
        'name',
        'slug',
        'description',
    ];

    public function product()
    {
        return $this->belongsTo(Product::class, 'products_id');
    }

    public function features()
    {
        return $this->hasMany(ProductFeature::class, 'subproducts_id');
    }

    public function images()
    {
        return $this->hasMany(SubproductImage::class, 'subproducts_id');
    }
}
