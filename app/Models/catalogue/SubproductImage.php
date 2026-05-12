<?php

namespace App\Models\catalogue;

use Illuminate\Database\Eloquent\Model;

class SubproductImage extends Model
{
    protected $connection = 'catalogue';

    protected $fillable = [
        'subproducts_id',
        'image_path',
    ];

    public function subproduct()
    {
        return $this->belongsTo(Subproduct::class, 'subproducts_id');
    }
}
