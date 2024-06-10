<?php

namespace App\Observers;

use App\Http\Resources\Product\IndexProductResource;
use App\Models\Product;

class StoreProductToFileObserver
{
    /**
     * Handle the Product "created" event.
     */
    public function created(Product $product): void
    {       
        $products = IndexProductResource::collection($product->with('comments')->get());


    }

    /**
     * Handle the Product "updated" event.
     */
    public function updated(Product $product): void
    {
        //
    }

    /**
     * Handle the Product "deleted" event.
     */
    public function deleted(Product $product): void
    {
        //
    }

    /**
     * Handle the Product "restored" event.
     */
    public function restored(Product $product): void
    {
        //
    }

    /**
     * Handle the Product "force deleted" event.
     */
    public function forceDeleted(Product $product): void
    {
        //
    }
}
