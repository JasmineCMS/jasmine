<?php

Route::group([
    'namespace'  => '\\Jasmine\\Jasmine\\Http\Controllers',
    'middleware' => [\Jasmine\Jasmine\Http\Middleware\JasmineLocale::class],
    'as'         => 'jasmine.',
    'name'       => 'jasmine.',
],
    function () {
        // Change locale
        Route::get('/locale/{locale}', 'LocaleController@change')->name('change-locale');

        // Authentication Routes...
        Route::get('login', 'Auth\LoginController@showLoginForm')->name('login');
        Route::post('login', 'Auth\LoginController@login');
        Route::post('logout', 'Auth\LoginController@logout')->name('logout');

        Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
        Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
        Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
        Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');

        // Authenticated routes
        Route::group([
            'middleware' => ['jasmineAuth:jasmine_web'],
        ], function () {
            Route::get('/', 'DashboardController@show')->name('dashboard');

            // Bread routes
            Route::group([
                'prefix' => '/bread/{breadableName}',
                'as'     => 'bread.',
                'name'   => 'bread.',
            ], function () {
                Route::get('', 'BreadController@index')->name('index');
                Route::get('/create', 'BreadController@create')->name('create');
                Route::post('', 'BreadController@store')->name('store');
                Route::get('/{breadableId}/edit', 'BreadController@edit')->name('edit');
                Route::patch('/{breadableId}', 'BreadController@update')->name('update');
                Route::put('/{breadableId}', 'BreadController@update')->name('update');
                Route::delete('/{breadableId}', 'BreadController@destroy')->name('destroy');
            });

            // Pages routes
            Route::bind('jasminePage', function ($slug) {
                if (!$page = Jasmine::getPage($slug)) {
                    abort(404);
                }

                $page = call_user_func_array("$page::firstOrCreate", [
                    ['name' => $slug],
                    [
                        'url'     => $slug,
                        'content' => [],
                    ],
                ]);

                return $page;
            });

            Route::group([
                'prefix' => '/page/{jasminePage}',
                'as'     => 'page.',
                'name'   => 'page.',
            ], function () {
                Route::patch('', 'PageController@update')->name('update');
                Route::put('', 'PageController@update')->name('update');
                Route::get('/edit', 'PageController@edit')->name('edit');
            });

        });

    });
