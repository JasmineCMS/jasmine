<?php

use Illuminate\Support\Facades\Route;
use Jasmine\Jasmine\Http\Controllers\ApiController as ApiCtl;
use Jasmine\Jasmine\Http\Middleware\JasmineApi;

Route::name('jasmine.api.')->prefix('api')
    ->middleware([JasmineApi::class])
    ->controller(ApiCtl::class)->group(function () {
        Route::get('info', 'info')->name('info');
    });