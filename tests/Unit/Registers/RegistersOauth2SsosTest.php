<?php

use Jasmine\Jasmine\Registers\RegistersOauth2Ssos;

function makeSsoHost(): object {
    return new class {
        use RegistersOauth2Ssos;
    };
}

it('starts with no SSOs', function () {
    expect(makeSsoHost()->getOauth2Ssos())->toBe([]);
});

it('stores all SSO fields under the provider name', function () {
    $host = makeSsoHost();
    $userData = fn() => ['id' => 1];

    $host->registerOauth2Sso(
        'google',
        'google-icon',
        'client-id',
        'client-secret',
        'https://provider.test/authorize',
        'https://provider.test/token',
        ['email', 'profile'],
        true,
        $userData,
    );

    $sso = $host->getOauth2Sso('google');

    expect($sso)->toMatchArray([
        'name'          => 'google',
        'icon'          => 'google-icon',
        'client_id'     => 'client-id',
        'client_secret' => 'client-secret',
        'authorize_url' => 'https://provider.test/authorize',
        'token_url'     => 'https://provider.test/token',
        'scopes'        => ['email', 'profile'],
        'allowCreate'   => true,
        'mfaTrusted'    => true, // the default — providers are trusted unless said otherwise
    ])->and($sso['userDataCallback'])->toBe($userData);
});

it('returns null for an unknown provider', function () {
    expect(makeSsoHost()->getOauth2Sso('nope'))->toBeNull();
});

it('overwrites an SSO registered under the same name', function () {
    $host = makeSsoHost();
    $cb = fn() => [];

    $host->registerOauth2Sso('google', 'first', 'c', 's', 'https://a', 'https://t', [], true, $cb);
    $host->registerOauth2Sso('google', 'second', 'c', 's', 'https://a', 'https://t', [], true, $cb);

    expect($host->getOauth2Sso('google')['icon'])->toBe('second')
        ->and($host->getOauth2Ssos())->toHaveCount(1);
});

it('keeps multiple providers keyed by name', function () {
    $host = makeSsoHost();
    $cb = fn() => [];

    $host->registerOauth2Sso('google', 'i', 'c', 's', 'https://a', 'https://t', [], true, $cb);
    $host->registerOauth2Sso('github', 'i', 'c', 's', 'https://a', 'https://t', [], true, $cb);

    expect(array_keys($host->getOauth2Ssos()))->toBe(['google', 'github']);
});

it('accepts a closure for allowCreate', function () {
    $host = makeSsoHost();
    $allow = fn() => true;

    $host->registerOauth2Sso('google', 'i', 'c', 's', 'https://a', 'https://t', [], $allow, fn() => []);

    expect($host->getOauth2Sso('google')['allowCreate'])->toBe($allow);
});

it('accepts a closure for mfaTrusted', function () {
    $host = makeSsoHost();
    $trusted = fn() => false;

    $host->registerOauth2Sso('google', 'i', 'c', 's', 'https://a', 'https://t', [], true, fn() => [], $trusted);

    expect($host->getOauth2Sso('google')['mfaTrusted'])->toBe($trusted);
});
