<?php

use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Http\Controllers\ApiController as ApiCtl;
use Jasmine\Jasmine\Http\Middleware\ApiMiddleware;
use Jasmine\Jasmine\Http\Middleware\HandleInertiaRequests;

Route::name('jasmine.api.')
    ->middleware([ApiMiddleware::class, HandleInertiaRequests::class])
    ->controller(ApiCtl::class)
    ->group(function () {
        Route::get('/info', 'info')->name('info');

        Route::get('/dashboard', 'dashboard')->name('dashboard');

        Route::get('/search', 'search')->name('search');

        Route::prefix('/profile')->name('profile.')->group(function () {
            Route::get('/', 'profileShow')->name('profile.show');
            Route::post('/', 'profileSave');

            Route::post('/webauthn/options', 'profileWebauthnOptions')->name('webauthn.options');
            Route::post('/webauthn', 'profileWebauthnRegister')->name('webauthn.register');
        });

        // TODO: file manager (no need for UI, pass through to alexi...)

        Route::get('/bread', 'listBreadables')->name('bread.list');

        Route::name('bread.')->prefix('/bread/{breadable}')->group(function () {
            Route::get('/', 'breadIndex')->name('index');

            Route::get('/create', 'breadEdit')->name('create');
            Route::post('/create', 'breadSave');

            Route::post('/fake', 'breadFake')->name('fake');

            Route::post('/reorder', 'breadReorder')->name('reorder');

            Route::get('/{breadableId}/edit', 'breadEdit')->name('edit');
            Route::put('/{breadableId}/edit', 'breadSave');

            Route::delete('/{breadableId}', 'breadDelete')->name('delete');

            // TODO: export (csv)
        });

        Route::get('/pages', 'listPages')->name('page.list');

        Route::name('page.')->prefix('/page/{jasminePage}')->group(function () {
            Route::get('', 'pageEdit')->name('edit');
            Route::put('', 'pageSave');

            Route::post('fake', 'pageFake')->name('fake');
        });

        foreach (Jasmine::getApiRouteGroups() as $group) $group();
    });
