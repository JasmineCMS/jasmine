<?php

use Illuminate\Support\Facades\Route;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Http\Controllers\AppController as AppCtl;
use Jasmine\Jasmine\Http\Controllers\AuthController as AuthCtl;
use Jasmine\Jasmine\Http\Controllers\BreadController as BreadCtl;
use Jasmine\Jasmine\Http\Controllers\FileManagerController as FileManagerCtl;
use Jasmine\Jasmine\Http\Controllers\PageController as PageCtl;
use Jasmine\Jasmine\Http\Controllers\ProfileController as ProfileCtl;
use Jasmine\Jasmine\Http\Middleware\AppMiddleware;
use Jasmine\Jasmine\Http\Middleware\Authenticate;
use Jasmine\Jasmine\Http\Middleware\AuthenticateSession;
use Jasmine\Jasmine\Http\Middleware\HandleInertiaRequests;
use Jasmine\Jasmine\Http\Middleware\MfaConfirmed;

Route::name('jasmine.')->middleware([AppMiddleware::class, HandleInertiaRequests::class])->group(function () {
    Route::middleware(Authenticate::class . ':!')->group(function () {
        Route::controller(AuthCtl::class)->group(function () {
            Route::get('/login', 'showLogin')->name('login');
            Route::post('/login', 'login');

            Route::get('sso/oauth2/{provider}', 'oauth2Attempt')->name('sso.oauth2.attempt');
            Route::get('sso/oauth2/{provider}/auth', 'oauth2Auth')->name('sso.oauth2.auth');

            Route::get('login/forgot', 'showForgotPassword')->name('password.forgot');
            Route::post('login/forgot', 'forgotPassword');

            Route::get('login/reset/{token}', 'showPasswordReset')->name('password.reset');
            Route::post('login/reset/{token}', 'passwordReset');
        });

        foreach (Jasmine::getGuestRouteGroups() as $group) $group();
    });

    Route::middleware([Authenticate::class, AuthenticateSession::class])->group(function () {
        Route::post('/logout', [AuthCtl::class, 'logout'])->name('logout');

        Route::controller(AuthCtl::class)->group(function () {
            Route::get('/2fa', 'showTwoFactor')->name('2fa');
            Route::post('/2fa/otp', 'otp')->name('2fa.otp');
            Route::post('/2fa/webauthn/options', 'webauthnLoginOptions')->name('2fa.webauthn.options');
            Route::post('/2fa/webauthn', 'webauthnLogin')->name('2fa.webauthn');
        });

        Route::middleware(MfaConfirmed::class)->group(function () {
            Route::get('/', [AppCtl::class, 'dashboard'])->name('dashboard');
            Route::match(['GET', 'POST', 'PUT', 'DELETE'], '/dashboard/{card}/{action}',
                [AppCtl::class, 'dashboardCardAction']
            )->name('dashboard.card.action');

            Route::get('/search', [AppCtl::class, 'search'])->name('search');

            Route::prefix('/profile')->name('profile.')->controller(ProfileCtl::class)
                ->group(function () {
                    Route::get('/', 'show')->name('show');
                    Route::post('/', 'save');

                    Route::post('/webauthn/options', 'webauthnOptions')->name('webauthn.options');
                    Route::post('/webauthn', 'webauthnRegister')->name('webauthn.register');
                });

            Route::prefix('/file-manager')->name('file-manager.')->controller(FileManagerCtl::class)
                ->group(function () {
                    Route::get('/standalone', 'standalone')->name('standalone');
                    Route::get('/', 'show')->name('show');
                });

            Route::controller(BreadCtl::class)->name('bread.')
                ->prefix('/bread/{breadable}')->group(function () {
                    Route::get('/', 'index')->name('index');

                    Route::get('/create', 'edit')->name('create');
                    Route::post('/create', 'save');

                    Route::post('/fake', 'fake')->name('fake');

                    Route::post('/reorder', 'reorder')->name('reorder');

                    Route::get('/{breadableId}/edit', 'edit')->name('edit');
                    Route::put('/{breadableId}/edit', 'save');

                    Route::get('/{breadableId}/clone', 'clone')->name('clone');

                    Route::delete('/{breadableId}', 'delete')->name('delete');

                    // TODO: export (csv)
                });

            Route::controller(PageCtl::class)->name('page.')->prefix('/page/{jasminePage}')
                ->group(function () {
                    Route::get('', 'edit')->name('edit');
                    Route::put('', 'save');

                    Route::post('fake', 'fake')->name('fake');
                });

            foreach (Jasmine::getAuthenticatedRouteGroups() as $group) $group();
        });
    });
});
