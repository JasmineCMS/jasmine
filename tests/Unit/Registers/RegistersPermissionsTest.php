<?php

use Jasmine\Jasmine\Registers\RegistersPermissions;

function makePermissionsHost(): object {
    return new class {
        use RegistersPermissions;
    };
}

it('starts with no permissions', function () {
    expect(makePermissionsHost()->getPermissions())->toBe([]);
});

it('stores a permission keyed by itself', function () {
    $host = makePermissionsHost();

    $host->registerPermission('models.article.browse');

    expect($host->getPermissions())->toBe(['models.article.browse' => 'models.article.browse']);
});

it('deduplicates a permission registered twice', function () {
    $host = makePermissionsHost();

    $host->registerPermission('models.article.browse');
    $host->registerPermission('models.article.browse');

    expect($host->getPermissions())->toBe(['models.article.browse' => 'models.article.browse']);
});

it('keeps multiple distinct permissions', function () {
    $host = makePermissionsHost();

    $host->registerPermission('models.article.browse');
    $host->registerPermission('models.article.edit');

    expect($host->getPermissions())->toBe([
        'models.article.browse' => 'models.article.browse',
        'models.article.edit'   => 'models.article.edit',
    ]);
});
