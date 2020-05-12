# Jasmine CMS
A Laravel based CMS inspired by voyager

## Installation
create a new laravel ^6.2 project  
`composer require jasminecms/jasmine`  
then run 
`php artisan jasmine:migrate`  
`php artisan jasmine:link-public-assets`  

To create an admin user run
`php artisan jasmine:create-user`

In your `routes/web.php` add
```php
Route::group(['prefix' => 'jasmine'], function () {
    Jasmine::routes();
});
``` 

you may change the prefix to anything you like
then navigate to /jasmine

### Progress
This package is a work in progress, don't use in production.  

known issues
* Image update does not work properly
 
