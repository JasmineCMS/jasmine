<?php
/** @var callable|null $group */

/** @var callable|null $authedGroup */

use Jasmine\Jasmine\Http\Controllers\Auth\ForgotPasswordController;
use Jasmine\Jasmine\Http\Controllers\Auth\LoginController;
use Jasmine\Jasmine\Http\Controllers\Auth\ResetPasswordController;
use Jasmine\Jasmine\Http\Controllers\BreadController;
use Jasmine\Jasmine\Http\Controllers\DashboardController;
use Jasmine\Jasmine\Http\Controllers\FileManagerController;
use Jasmine\Jasmine\Http\Controllers\LocaleController;
use Jasmine\Jasmine\Http\Controllers\PageController;
use Jasmine\Jasmine\Http\Controllers\RedirectionController;
use Jasmine\Jasmine\Http\Middleware\JasmineLocale;
use Jasmine\Jasmine\Http\Middleware\Robots;

Route::group(
    [
        'middleware' => [
            Robots::class,
            JasmineLocale::class,
        ],
        'as'         => 'jasmine.',
        'name'       => 'jasmine.',
    ],
    function () use ($group, $authedGroup) {
        // Change locale
        Route::get('/locale/{jasmineLocale}', [LocaleController::class, 'change'])->name('change-locale');

        // Authentication Routes...
        Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
        Route::post('login', [LoginController::class, 'login']);
        Route::post('logout', [LoginController::class, 'logout'])->name('logout');

        Route::get('password/reset', [ForgotPasswordController::class, 'showLinkRequestForm'])
             ->name('password.request')
        ;
        Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail'])->name('password.email');
        Route::get('password/reset/{token}', [ResetPasswordController::class, 'showResetForm'])->name('password.reset');
        Route::post('password/reset', [ResetPasswordController::class, 'reset'])->name('password.update');

        // Authenticated routes
        Route::group(
            [
                'middleware' => ['jasmineAuth:' . config('jasmine.auth.guard')],
            ],
            function () use ($authedGroup) {
                Route::get('/', [DashboardController::class, 'show'])->name('dashboard');

                Route::get('/file-manager', [FileManagerController::class, 'show'])->name('fm.show');
                Route::get('/file-manager-tinymce5', [FileManagerController::class, 'tinymce5'])
                     ->name('fm.show.tinymce5')
                ;

                // Bread routes
                Route::group(
                    [
                        'prefix' => '/bread/{breadableName}',
                        'as'     => 'bread.',
                        'name'   => 'bread.',
                    ],
                    function () {
                        Route::get('', [BreadController::class, 'index'])->name('index');
                        Route::get('/export', [BreadController::class, 'export'])->name('export');
                        Route::put('/reorder', [BreadController::class, 'reorder'])->name('reorder');
                        Route::get('/create', [BreadController::class, 'create'])->name('create');
                        Route::post('', [BreadController::class, 'store'])->name('store');
                        Route::get('/{breadableId}/edit', [BreadController::class, 'edit'])->name('edit');
                        Route::patch('/{breadableId}', [BreadController::class, 'update'])->name('update');
                        Route::put('/{breadableId}', [BreadController::class, 'update'])->name('update');
                        Route::delete('/{breadableId}', [BreadController::class, 'destroy'])->name('destroy');
                    }
                );

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

                Route::group(
                    [
                        'prefix' => '/page/{jasminePage}',
                        'as'     => 'page.',
                        'name'   => 'page.',
                    ],
                    function () {
                        Route::patch('', [PageController::class, 'index'])->name('update');
                        Route::put('', [PageController::class, 'update'])->name('update');
                        Route::get('/edit', [PageController::class, 'edit'])->name('edit');
                    }
                );

                // Redirection routes
                Route::get('/redirection', [RedirectionController::class, 'manage'])->name('redirection.index');
                Route::post('/redirection', [RedirectionController::class, 'save'])->name('redirection.save');
                Route::delete('/redirection', [RedirectionController::class, 'delete'])->name('redirection.delete');
                Route::get('/redirection/export', [RedirectionController::class, 'export'])->name('redirection.export');
                Route::post('/redirection/import', [RedirectionController::class, 'import'])
                     ->name('redirection.import')
                ;

                if ($authedGroup) {
                    $authedGroup();
                }
            }
        );

        if ($group) {
            $group();
        }

    }
);
