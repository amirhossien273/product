<?php

namespace App\Models;

use App\Traits\TraitUuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory, TraitUuid;

    protected $fillable = ['comment', 'product_id', 'user_id'];


    /**
     * Get the product that owns the comment.
     */
    public function product()
    {
        return $this->belongsTo(Product::class);
    }
}
