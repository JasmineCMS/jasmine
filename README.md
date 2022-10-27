# Jasmine CMS
A Laravel based CMS inspired by voyager

## Installation
create a new laravel 8|9 project  
`composer require jasminecms/jasmine`  
then run  
`php artisan jasmine:link-public-assets`  
`php artisan migrate`  

To create an admin user run  
`php artisan jasmine:create-user`

In your `routes/web.php` add
```php
Route::prefix('jasmine')->group(fn() => Jasmine::routes());
``` 

you may change the prefix to anything you like
then navigate to /jasmine  

To enable redirections add this to the end of your `routes/web.php` file 
```php
Route::fallback([\Jasmine\Jasmine\Http\Controllers\RedirectionController::class, 'redirect']);
```

Register available locales in AppServiceProvider
```php
Jasmine::registerLocales(['en', 'he']);
```

Register pages in AppServiceProvider
```php
Jasmine::registerPage(\App\Pages\Home::class);
```

Register breadable models in AppServiceProvider
```php
Jasmine::registerBreadable(\App\Models\Article::class);
```

### Generators
Run `php artisan make:jasmine-page Home` to create a Jasmine Page 
Run `php artisan make:jasmine-model Post` to create a Jasmine Model 