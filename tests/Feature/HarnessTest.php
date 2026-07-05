<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Schema;

uses(RefreshDatabase::class);

it('boots the application from the ./laravel base path', function () {
    // APP_BASE_PATH=./laravel in phpunit.xml is what lets the bare TestCase
    // boot the real host app instead of looking at the package root.
    expect(app()->basePath())->toEndWith('laravel');
});

it('migrates the host application schema', function () {
    // proves the in-memory sqlite DB is wired and RefreshDatabase ran.
    expect(Schema::hasTable('users'))->toBeTrue();
});

it('migrates the jasmine package schema', function () {
    // proves JasmineServiceProvider auto-loads its database/migrations.
    // if this is the ONLY red line, the provider isn't calling
    // loadMigrationsFrom() and the package tables never get created.
    expect(Schema::hasTable('jasmine_users'))->toBeTrue();
});
