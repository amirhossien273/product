<?php

namespace App\Service\Product;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ProductService {

    private $product;

    public function __construct(Product $product)
    {
        $this->product = $product;
    }

    public function handel(Request $request): Product
    {
        $product = $this->product->where('name', $request->name)->first();

        if(!$product) {
            $product = $this->product->create([
                'id'   => Str::uuid(),
                'name' => $request->name
            ]);
        }

        return $product;

    }
}