<?php

namespace App\Observers;

use App\Models\Comment;
use App\Models\Product;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class StoreCommentToFileObserver
{
    /**
     * Handle the Comment "created" event.
     */
    public function created(Comment $comment): void
    {
        $products = Product::with('comments')->get()->toArray();
       
        $data = [];
        foreach($products as $product) {

            $data[] ='product_name: '. $product['name'] . '- count_comment: ' . count($product['comments']);
        }

        $file = Storage::put( 'myfile.txt', implode(PHP_EOL, $data));

    }

    /**
     * Handle the Comment "updated" event.
     */
    public function updated(Comment $comment): void
    {
        //
    }

    /**
     * Handle the Comment "deleted" event.
     */
    public function deleted(Comment $comment): void
    {
        //
    }

    /**
     * Handle the Comment "restored" event.
     */
    public function restored(Comment $comment): void
    {
        //
    }

    /**
     * Handle the Comment "force deleted" event.
     */
    public function forceDeleted(Comment $comment): void
    {
        //
    }
}
