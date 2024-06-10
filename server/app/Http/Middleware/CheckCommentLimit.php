<?php

namespace App\Http\Middleware;

use App\Models\Comment;
use App\Models\Product;
use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckCommentLimit
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $product = Product::where('name', $request->name)->first();

        if(!$product) {
            return $next($request);
        }

        $user = Auth::user();

        if ($user) {
            $commentCount = Comment::where('product_id', $product->id)
                                    ->where('user_id', $user->id)
                                    ->count();
            if ($commentCount >= 2) {
                return response()->json([
                    'error' => 'You have already commented twice on this product.'
                ], 403);
            }
        }

        return $next($request);
    }
}
