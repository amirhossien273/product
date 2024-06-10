<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);
Route::get('logout', [AuthController::class, 'logout']);

Route::middleware(['auth:api', 'check-comment-limit'])->post('comments/store', [CommentController::class, 'store'])->name('comments.store');

Route::middleware(['auth:api'])->get('products', [ProductController::class, 'index'])->name('products.index');

// Route::get('comments/store', [AuthController::class, 'logout']);

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');
