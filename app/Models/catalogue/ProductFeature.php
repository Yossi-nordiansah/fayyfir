<?php

namespace App\Models\catalogue;

use Illuminate\Database\Eloquent\Model;

class ProductFeature extends Model
{
    protected $connection = 'catalogue';

    protected $fillable = [
        'subproducts_id',
        'name',
    ];

    public function subproduct()
    {
        return $this->belongsTo(Subproduct::class, 'subproducts_id');
    }
}
