<?php

namespace App\Providers;

use App\Models\Comment;
use App\Models\Product;
use App\Observers\StoreCommentToFileObserver;
use App\Observers\StoreProductToFileObserver;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Comment::observe(StoreCommentToFileObserver::class);
    }
}
