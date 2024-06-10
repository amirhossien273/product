<?php

namespace App\Http\Controllers;

use App\Http\Requests\Comment\StoreCommentRequest;
use App\Models\Comment;
use App\Service\Product\ProductService;
use Illuminate\Support\Str;

class CommentController extends Controller
{
    public function store(StoreCommentRequest $request, ProductService $productService, Comment $comment)
    {
       $product = $productService->handel($request);

       $comment->create([
        'id' => Str::uuid(),
        'comment'    => $request->comment,
        'user_id'    => auth()->user()->id,
        'product_id' => $product->id,
       ]);

       return response()->json(['message' => 'Created Successfuly']);
    }
}
