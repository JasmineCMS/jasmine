<?php

namespace App\Providers;

use App\Models\Article;
use App\Models\Author;
use App\Models\Tag;
use App\Pages\Home;
use Illuminate\Foundation\AliasLoader;
use Illuminate\Support\ServiceProvider;
use Jasmine\Jasmine\Facades\Jasmine;

class AppServiceProvider extends ServiceProvider
{
    /** Register any application services. */
    public function register(): void {
        AliasLoader::getInstance()->alias('Jasmine', Jasmine::class);
    }

    /** Bootstrap any application services. */
    public function boot(): void {
        Jasmine::registerLocales(['en', 'he']);

        Jasmine::registerPage(Home::class);

        Jasmine::registerBreadable(Author::class);
        Jasmine::registerBreadable(Tag::class);
        Jasmine::registerBreadable(Article::class);
    }
}
