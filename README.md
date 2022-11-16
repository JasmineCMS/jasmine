# Jasmine CMS

A Laravel based CMS inspired by [Voyager](https://voyager.devdojo.com/).

## Screenshots
Login
![Login](https://github.com/JasmineCMS/jasmine/blob/master/screenshots/login.png?raw=true)

Bread index
![Login](https://github.com/JasmineCMS/jasmine/blob/master/screenshots/bread-index.png?raw=true)

Bread Edit
![Login](https://github.com/JasmineCMS/jasmine/blob/master/screenshots/bread-edit.png?raw=true)


#### Note

Jasmine uses [alexusmai/laravel-file-manager](https://github.com/alexusmai/laravel-file-manager)
If you are using it already or planing to, you might need to
tweak some configurations to prevent conflicts.


## Installation

Require JasmineCMS in your new or existing laravel app  
`composer require jasminecms/jasmine`

Link jasmine public assets to your public folder
`php artisan jasmine:link-public-assets`

Migrate the database (be sure to make any changes to the default laravel migration prior)
`php artisan migrate`

Create a user (1st user is super admin)  
`php artisan jasmine:create-user`

Add Jasmines routes to your `routes/web.php` routes file (you may change the prefix to anything you like)

```php
Route::prefix('jasmine')->group(fn() => Jasmine::routes());
```

You can now log in to jasmine
navigate to `/jasmine`
And login

You can add register Jasmine assets in your `AppServiceProvider`


##### Locales

Jasmine supports multilingual assets, define your content languages like so

```php
Jasmine::registerLocales(['en', 'he']);
```


##### Breadables

Breadables can be any model
Run `php artisan make:jasmine-model Post` to create a Jasmine Model

In your model implement
`Jasmine\Jasmine\Bread\BreadableInterface`
use trait `Jasmine\Jasmine\Bread\Breadable`
if the model has multilingual columns, also use trait
`Jasmine\Jasmine\Bread\Translatable;`
implement missing method

then register your model in `AppServiceProvider`

```php
Jasmine::registerBreadable(\App\Models\MyModel::class);
```


##### Pages

Pages are very similar to models, but function as a single entity instead of a table
Run `php artisan make:jasmine-model Post` to create a Jasmine Model

Register your pages in `AppServiceProvider`

```php
Jasmine::registerPage(\App\Pages\Home::class);
```


##### Interface locale

You can translate Jasmine interface to any language like so

```php
Jasmine::registerInterfaceLocale('he', 'path/to/locale.json');
```

the send parameter will accept either a path to your json file or an array of translations
you can copy `/resources/front-lang/he.json` to get started quickly.


##### Custom assets

If for some reason you wish to load custom javascript or css you can do it like so

```php
Jasmine::registerCustomStyle('/path/to/style.css');
Jasmine::registerCustomJs('/path/to/app.js');
```

##### Permissions
TODO


##### SideBarMenuItems
You can add items to the sidebar menu like so
```php
// internal
\Jasmine::registerSideBarMenuItem('settings', fn() => [
    'title'    => __('Settings'),
    'icon'   => 'bi-link-45deg text-danger',
    'href'     => route('jasmine.my.route', 'my-param-value'),
    'is-route' => ['r' => 'jasmine.my.route', 'p' => ['my-param' => 'my-param-value']],
], 70);

// external
\Jasmine::registerSideBarMenuItem('site-triple', fn() => [
    'href'   => 'https://triple.co.il',
    'title'  => 'Triple',
    'icon'   => 'bi-link-45deg text-danger',
    'target' => '_blank',
], 100);
```
TODO: `registerSideBarSubMenuItem`


##### Oauth2 SSO

You can register oauth2 providers to enable sso login to jasmine

Facebook example
```php
Jasmine::registerOauth2Sso(
    'Facebook', //name
    'https://www.facebook.com/images/fb_icon_325x325.png', //icon
    '{client_id}',
    '{client_secret}',
    'https://www.facebook.com/v3.3/dialog/oauth',
    'https://graph.facebook.com/v3.3/oauth/access_token',
    ['email'],
    false, // accepts boolean or callback
    function ($token) {
        $token = json_decode($token, true);
        
        $res = Http::asJson()->get('https://graph.facebook.com/v3.3/me', [
            'access_token' => $token['access_token'],
            'fields'       => 'name,email',
        ]);
        
        return [
            'name'  => $res->json('name'),
            'email' => $res->json('email'),
        ];
    },
);
```