<?php

namespace App\Http\Controllers;

use App\Http\Resources\Product\IndexProductResource;
use App\Http\Resources\Product\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::with('comments')->get();
        
        return IndexProductResource::collection($products);
    }
}
