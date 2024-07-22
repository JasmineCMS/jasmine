<?php

use Illuminate\Support\Facades\Route;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Http\Controllers\ApiController as ApiCtl;
use Jasmine\Jasmine\Http\Middleware\JasmineApi;

Route::name('jasmine.api.')->prefix('api')
    ->middleware([JasmineApi::class])
    ->controller(ApiCtl::class)->group(function () {
        Route::get('/info', 'info')->name('info');

        Route::get('/globals', 'globals')->name('globals');
        Route::get('/locales/{locale}.json', 'localeStrings')->name('locale');

        Route::get('/profile', 'profile')->name('profile');
        Route::post('/profile', 'saveProfile');

        Route::get('/bread', 'breadList')->name('bread.list');
        Route::prefix('/bread/{breadableName}')->name('bread.')->group(function () {
            Route::get('', 'breadIndex')->name('index');

            Route::put('/reorder', 'breadReorder')->name('reorder');

            Route::get('/create', 'breadEdit')->name('create');
            Route::post('/create', 'breadSave');

            Route::get('/{breadableId}/edit', 'breadEdit')->name('edit');
            Route::post('/{breadableId}/edit', 'breadSave');

            Route::delete('/{breadableId}', 'breadDelete')->name('delete');
        });

        Route::get('/page', 'pageList')->name('page.list');
        Route::get('/page/{jasminePage}', 'pageEdit')->name('page.edit');
        Route::post('/page/{jasminePage}', 'pageSave');

        Route::group([], Jasmine::getApiRouteGroups());
    });