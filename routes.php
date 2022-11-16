<?php
/**
 * @var callable|null $group
 * @var callable|null $authedGroup
 */

use Illuminate\Support\Facades\Route;
use Jasmine\Jasmine\Http\Controllers\BreadController as Bread;
use Jasmine\Jasmine\Http\Controllers\BreadRelationshipsController as BreadRelationships;
use Jasmine\Jasmine\Http\Controllers\FileManagerController as FileManager;
use Jasmine\Jasmine\Http\Controllers\PageController as Page;
use Jasmine\Jasmine\Http\Controllers\RedirectionController as Redirection;
use Jasmine\Jasmine\Http\Middleware\HandleInertiaRequests;
use Jasmine\Jasmine\Http\Middleware\HandleOtp;
use Jasmine\Jasmine\Http\Middleware\Jasmine as JasmineMiddleware;
use Jasmine\Jasmine\Http\Controllers\Auth\ForgotPasswordController as ForgotPassword;
use Jasmine\Jasmine\Http\Controllers\Auth\LoginController as Login;
use Jasmine\Jasmine\Http\Controllers\Auth\ResetPasswordController as ResetPassword;
use Jasmine\Jasmine\Http\Controllers\AppController;

Route::middleware([JasmineMiddleware::class])->name('jasmine.')->group(function () use ($group, $authedGroup) {
    // Authentication Routes...
    Route::get('login', [Login::class, 'showLoginForm'])->name('login');
    Route::post('login', [Login::class, 'login']);
    Route::post('logout', [Login::class, 'logout'])->name('logout');
    Route::get('password/reset', [ForgotPassword::class, 'showLinkRequestForm'])->name('password.request');
    Route::post('password/reset', [ForgotPassword::class, 'sendResetLinkEmail']);
    Route::get('password/reset/{token}', [ResetPassword::class, 'showResetForm'])->name('password.reset');
    Route::post('password/reset/{token}', [ResetPassword::class, 'reset']);
    
    Route::get('sso/oauth2/{provider}', [Login::class, 'ouath2Attempt'])->name('sso.oauth2.attempt');
    Route::get('sso/oauth2/{provider}/auth', [Login::class, 'ouath2Auth'])->name('sso.oauth2.auth');
    
    
    Route::middleware('jasmineAuth:' . config('jasmine.auth.guard'))->group(function () {
        Route::get('otp', [Login::class, 'showOtpForm'])->name('otp');
        Route::post('otp', [Login::class, 'otp'])->name('otp-post');
    });
    
    Route::middleware([
        'jasmineAuth:' . config('jasmine.auth.guard'),
        HandleOtp::class,
    ])->group(function () {
        Route::get('/file-manager-standalone', [FileManager::class, 'standalone'])->name('fm.standalone');
    });
    
    Route::middleware([
        'jasmineAuth:' . config('jasmine.auth.guard'),
        HandleOtp::class,
        HandleInertiaRequests::class,
    ])
         ->group(function () use ($authedGroup) {
             Route::get('/routes.json', [AppController::class, 'ziggy'])->name('ziggy');
             Route::get('/globals.json', [AppController::class, 'globals'])->name('globals');
             Route::get('/locale.json', [AppController::class, 'localeStrings'])->name('locale');
             Route::get('/', [AppController::class, 'dashboard'])->name('dashboard');
        
             Route::get('/profile', [AppController::class, 'profile'])->name('profile');
             Route::post('/profile', [AppController::class, 'saveProfile']);
        
             // File manager
             Route::get('/file-manager', [FileManager::class, 'show'])->name('fm.show');
        
             // Bread
             Route::prefix('/bread/{breadableName}')->name('bread.')->group(function () {
                 Route::get('', [Bread::class, 'index'])->name('index');
            
                 //Route::get('/export', [Bread::class, 'export'])->name('export');
            
                 //Route::put('/reorder', [Bread::class, 'reorder'])->name('reorder');
            
                 Route::get('/create', [Bread::class, 'edit'])->name('create');
                 Route::post('/create', [Bread::class, 'save']);
            
                 Route::get('/{breadableId}/edit', [Bread::class, 'edit'])->name('edit');
                 Route::post('/{breadableId}/edit', [Bread::class, 'save']);
            
                 Route::delete('/{breadableId}', [Bread::class, 'delete'])->name('delete');
    
                 Route::get('/relations', [BreadRelationships::class, 'getRelationData']);
                 Route::get('{breadableId}/relations', [BreadRelationships::class, 'getRelationData']);
             });
        
             // Pages
             Route::get('/page/{jasminePage}', [Page::class, 'edit'])->name('page.edit');
             Route::post('/page/{jasminePage}', [Page::class, 'save']);
        
             if ($authedGroup) $authedGroup();
         });
    
    if ($group) $group();
});
