<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Str;
use Illuminate\Testing\TestResponse;
use Jasmine\Jasmine\Models\JasmineUser;

uses(RefreshDatabase::class);

const API_INFO = '/jasmine/api/info';

function badTokenRequest(): TestResponse {
    return test()->withToken('not-a-real-token')->getJson(API_INFO);
}

it('locks out an ip after the configured number of failures', function () {
    config(['jasmine.auth.rate_limits.api.attempts' => 3]);

    for ($i = 0; $i < 3; $i++) badTokenRequest()->assertStatus(401);

    badTokenRequest()->assertStatus(429);
});

it('honours a raised limit', function () {
    config(['jasmine.auth.rate_limits.api.attempts' => 10]);

    for ($i = 0; $i < 10; $i++) badTokenRequest()->assertStatus(401);

    badTokenRequest()->assertStatus(429);
});

it('treats zero attempts as disabled', function () {
    // same convention as the auth limiters — handy in test environments
    config(['jasmine.auth.rate_limits.api.attempts' => 0]);

    for ($i = 0; $i < 15; $i++) badTokenRequest()->assertStatus(401);

    expect(RateLimiter::attempts('jasmine.api.auth.127.0.0.1'))->toBe(0);
});

it('uses the configured decay when recording a failure', function () {
    config([
        'jasmine.auth.rate_limits.api.attempts' => 1,
        'jasmine.auth.rate_limits.api.decay'    => 600,
    ]);

    badTokenRequest()->assertStatus(401);

    // availableIn() reflects the decay the limiter was hit with
    expect(RateLimiter::availableIn('jasmine.api.auth.127.0.0.1'))->toBeGreaterThan(300);
});

it('does not throttle a valid token', function () {
    config(['jasmine.auth.rate_limits.api.attempts' => 1]);

    $user = JasmineUser::factory()->create(['admin' => true]);
    $user->apiTokens()->create(['name' => 'ci', 'token' => $plain = Str::random(33)]);

    for ($i = 0; $i < 5; $i++) {
        $this->withToken($plain)->getJson(API_INFO)->assertSuccessful();
    }
});

it('still rejects a request with no bearer token at all', function () {
    $this->getJson(API_INFO)->assertStatus(401);
});
