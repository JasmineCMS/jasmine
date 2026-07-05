<?php

use Jasmine\Jasmine\Registers\RegistersRoutes;

function makeHost(): object {
    return new class {
        use RegistersRoutes;
    };
}

// ---------------------------------------------------------------------------
// Initial state
// ---------------------------------------------------------------------------

it('starts with empty route groups', function () {
    $host = makeHost();

    expect($host->getAuthenticatedRouteGroups())->toBe([])
        ->and($host->getApiRouteGroups())->toBe([])
        ->and($host->getGuestRouteGroups())->toBe([]);
});

// ---------------------------------------------------------------------------
// Anonymous (un-keyed) registration
// ---------------------------------------------------------------------------

dataset('anonymous registration', [
    'authed' => ['registerAuthenticatedRouteGroup', 'getAuthenticatedRouteGroups'],
    'api'    => ['registerApiRouteGroup', 'getApiRouteGroups'],
    'guest'  => ['registerGuestRouteGroup', 'getGuestRouteGroups'],
]);

it('registers anonymous closures and stacks them', function (string $register, string $getter) {
    $host = makeHost();
    $cb1 = fn() => 'a';
    $cb2 = fn() => 'b';

    $host->$register($cb1)->$register($cb2);

    expect($host->$getter())->toBe([0 => $cb1, 1 => $cb2]);
})->with('anonymous registration');

it('returns static for anonymous registration (fluent)', function (string $register, string $getter) {
    $host = makeHost();

    expect($host->$register(fn() => null))->toBe($host);
})->with('anonymous registration');

// ---------------------------------------------------------------------------
// Named (keyed) registration
// ---------------------------------------------------------------------------

dataset('named registration', [
    'authed' => ['registerAuthenticatedRouteGroup', 'getAuthenticatedRouteGroups'],
    'api'    => ['registerApiRouteGroup', 'getApiRouteGroups'],
    'guest'  => ['registerGuestRouteGroup', 'getGuestRouteGroups'],
]);

it('registers a named closure under the given key', function (string $register, string $getter) {
    $host = makeHost();
    $cb = fn() => 'x';

    $host->$register($cb, 'my-group');

    expect($host->$getter())->toBe(['my-group' => $cb]);
})->with('named registration');

it('returns static for named registration (fluent)', function (string $register, string $getter) {
    $host = makeHost();

    expect($host->$register(fn() => null, 'id'))->toBe($host);
})->with('named registration');

it('allows "0" as a valid named key', function (string $register, string $getter) {
    $host = makeHost();
    $cb = fn() => 'zero';

    $host->$register($cb, '0');

    expect($host->$getter())->toHaveKey('0')
        ->and($host->$getter()['0'])->toBe($cb);
})->with('named registration');

it('throws LogicException when a duplicate named key is registered', function (string $register, string $getter) {
    $host = makeHost();

    $host->$register(fn() => 'first', 'dup');

    expect(fn() => $host->$register(fn() => 'second', 'dup'))
        ->toThrow(LogicException::class, '"dup"');
})->with('named registration');

it('exception message contains the duplicate id', function () {
    $host = makeHost();
    $host->registerAuthenticatedRouteGroup(fn() => null, 'my-id');

    expect(fn() => $host->registerAuthenticatedRouteGroup(fn() => null, 'my-id'))
        ->toThrow(LogicException::class, 'my-id');
});

it('does not throw when different named keys are registered', function (string $register, string $getter) {
    $host = makeHost();
    $cb1 = fn() => 'a';
    $cb2 = fn() => 'b';

    $host->$register($cb1, 'key-1')->$register($cb2, 'key-2');

    expect($host->$getter())->toBe(['key-1' => $cb1, 'key-2' => $cb2]);
})->with('named registration');

// ---------------------------------------------------------------------------
// Groups are independent of each other
// ---------------------------------------------------------------------------

it('keeps route group types isolated from each other', function () {
    $host = makeHost();
    $authed = fn() => 'authed';
    $api = fn() => 'api';
    $guest = fn() => 'guest';

    $host->registerAuthenticatedRouteGroup($authed, 'shared-key')
        ->registerApiRouteGroup($api, 'shared-key')
        ->registerGuestRouteGroup($guest, 'shared-key');

    expect($host->getAuthenticatedRouteGroups())->toBe(['shared-key' => $authed])
        ->and($host->getApiRouteGroups())->toBe(['shared-key' => $api])
        ->and($host->getGuestRouteGroups())->toBe(['shared-key' => $guest]);
});

// ---------------------------------------------------------------------------
// Unregistration
// ---------------------------------------------------------------------------

dataset('unregistration', [
    'authed' => ['registerAuthenticatedRouteGroup', 'unregisterAuthenticatedRouteGroup', 'getAuthenticatedRouteGroups'],
    'api'    => ['registerApiRouteGroup', 'unregisterApiRouteGroup', 'getApiRouteGroups'],
    'guest'  => ['registerGuestRouteGroup', 'unregisterGuestRouteGroup', 'getGuestRouteGroups'],
]);

it('removes a named route group', function (string $register, string $unregister, string $getter) {
    $host = makeHost();
    $host->$register(fn() => null, 'to-remove');

    $host->$unregister('to-remove');

    expect($host->$getter())->not->toHaveKey('to-remove');
})->with('unregistration');

it('returns static for unregistration (fluent)', function (string $register, string $unregister, string $getter) {
    $host = makeHost();
    $host->$register(fn() => null, 'x');

    expect($host->$unregister('x'))->toBe($host);
})->with('unregistration');

it('does not throw when unregistering a non-existent key', function (string $register, string $unregister, string $getter) {
    $host = makeHost();

    expect(fn() => $host->$unregister('ghost'))->not->toThrow(Throwable::class);
})->with('unregistration');

it('allows re-registration after unregistering a key', function (string $register, string $unregister, string $getter) {
    $host = makeHost();
    $cb = fn() => 'new';

    $host->$register(fn() => 'old', 'reuse');
    $host->$unregister('reuse');
    $host->$register($cb, 'reuse');

    expect($host->$getter())->toBe(['reuse' => $cb]);
})->with('unregistration');

// ---------------------------------------------------------------------------
// Reset
// ---------------------------------------------------------------------------

it('clears all route groups on reset', function () {
    $host = makeHost();
    $host->registerAuthenticatedRouteGroup(fn() => null, 'a')
        ->registerApiRouteGroup(fn() => null, 'b')
        ->registerGuestRouteGroup(fn() => null, 'c');

    $host->resetRouteGroups();

    expect($host->getAuthenticatedRouteGroups())->toBe([])
        ->and($host->getApiRouteGroups())->toBe([])
        ->and($host->getGuestRouteGroups())->toBe([]);
});

it('returns static for resetRouteGroups (fluent)', function () {
    $host = makeHost();

    expect($host->resetRouteGroups())->toBe($host);
});

it('allows fresh registrations after reset', function () {
    $host = makeHost();
    $cb = fn() => 'fresh';

    $host->registerAuthenticatedRouteGroup(fn() => 'old', 'key')
        ->resetRouteGroups()
        ->registerAuthenticatedRouteGroup($cb, 'key');

    expect($host->getAuthenticatedRouteGroups())->toBe(['key' => $cb]);
});
