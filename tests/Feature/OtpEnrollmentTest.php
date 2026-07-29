<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\TestResponse;
use Jasmine\Jasmine\Models\JasmineUser;
use PragmaRX\Google2FA\Google2FA;

uses(RefreshDatabase::class);

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();
});

function otpSecret(): string {
    return new Google2FA()->generateSecretKey();
}

function enrollOtp(JasmineUser $user, array $overrides = []): TestResponse {
    return test()->actingAs($user, config('jasmine.auth.guard'))
        ->post(route('jasmine.profile.show'), $overrides + [
            '_sec'     => 'otp',
            'password' => 'password',
            'enabled'  => true,
        ]);
}

// ---------------------------------------------------------------------------
// The verify branch used to check the code against session('jasmine.2fa_secret')
// but persist request('secret') — an unvalidated field the client controls. A
// tampered request could pass verification with the session secret while
// storing a different one, desynchronising the authenticator app from the
// database with no recovery path (no backup codes; password reset keeps 2FA).
// ---------------------------------------------------------------------------

it('persists the session secret, not the one the request submits', function () {
    $user = JasmineUser::factory()->create();
    $sessionSecret = otpSecret();
    $attackerSecret = otpSecret();

    $this->withSession(['jasmine.2fa_secret' => $sessionSecret]);
    enrollOtp($user, [
        'secret' => $attackerSecret,
        'code'   => new Google2FA()->getCurrentOtp($sessionSecret),
    ]);

    expect($user->refresh()->otp_secret)->toBe($sessionSecret)
        ->not->toBe($attackerSecret);
});

it('clears the pending session secret once enrollment succeeds', function () {
    $user = JasmineUser::factory()->create();
    $secret = otpSecret();

    $this->withSession(['jasmine.2fa_secret' => $secret]);
    enrollOtp($user, [
        'secret' => $secret,
        'code'   => new Google2FA()->getCurrentOtp($secret),
    ])->assertSessionMissing('jasmine.2fa_secret');

    expect($user->refresh()->otp_secret)->toBe($secret);
});

it('does not enroll when the code is wrong', function () {
    $user = JasmineUser::factory()->create();
    $secret = otpSecret();

    $this->withSession(['jasmine.2fa_secret' => $secret]);
    enrollOtp($user, [
        'secret' => $secret,
        'code'   => '000000',
    ])->assertSessionHasErrors('code');

    expect($user->refresh()->otp_secret)->toBeNull();
});

it('regenerates instead of enrolling when the session secret is gone', function () {
    $user = JasmineUser::factory()->create();
    $submitted = otpSecret();

    // no jasmine.2fa_secret in the session: a stale tab or expired session
    // replaying the setup form must fall back to the generate branch rather
    // than reach the verify branch with nothing to verify against
    enrollOtp($user, [
        'secret' => $submitted,
        'code'   => new Google2FA()->getCurrentOtp($submitted),
    ]);

    expect($user->refresh()->otp_secret)->toBeNull()
        ->and(session('otp_profile.secret'))->not->toBeNull()
        ->not->toBe($submitted);
});
