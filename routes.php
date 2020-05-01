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
        });

    });
