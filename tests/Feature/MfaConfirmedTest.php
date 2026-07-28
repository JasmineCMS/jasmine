<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Jasmine\Jasmine\Models\JasmineUser;
use PragmaRX\Google2FA\Google2FA;

uses(RefreshDatabase::class);

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();
});

function mfaGuard(): string {
    return config('jasmine.auth.guard');
}

function mfaSecret(): string {
    return new Google2FA()->generateSecretKey();
}

function mfaUser(?string $secret = null): JasmineUser {
    return JasmineUser::factory()->create(['otp_secret' => $secret ?? mfaSecret()]);
}

// ---------------------------------------------------------------------------
// The gate itself
// ---------------------------------------------------------------------------

it('sends a user with two-factor enabled to the challenge', function () {
    $this->actingAs(mfaUser(), mfaGuard())
        ->get(route('jasmine.dashboard'))
        ->assertRedirect(route('jasmine.2fa'));
});

it('lets a user without two-factor straight through', function () {
    $this->actingAs(JasmineUser::factory()->create(), mfaGuard())
        ->get(route('jasmine.dashboard'))
        ->assertOk();
});

it('admits a user whose confirmation carries their own key', function () {
    $user = mfaUser();

    $this->actingAs($user, mfaGuard())
        ->withSession(['jasmine.2fa_confirmed' => $user->getKey()])
        ->get(route('jasmine.dashboard'))
        ->assertOk();
});

// ---------------------------------------------------------------------------
// Why the flag holds a key rather than a boolean.
//
// `jasmine.2fa_confirmed` used to be `true`. Nothing on the login path clears
// session data — Store::regenerate() migrates attributes and only rotates the
// ID, and SessionGuard::logout() removes just the auth key — so a confirmation
// earned by one user could survive into another user's session. Binding the
// flag to the confirming user's key makes the gate fail closed on its own
// instead of depending on invalidate() being called elsewhere.
// ---------------------------------------------------------------------------

it('rejects a confirmation earned by a different user', function () {
    $secret = mfaSecret();
    $confirmed = mfaUser($secret);
    $victim = mfaUser();

    expect($confirmed->getKey())->not->toBe($victim->getKey());

    // Earn a confirmation through the real challenge, then replay whatever the
    // writer actually produced. Reading the value back rather than hardcoding it
    // is what makes this test discriminating: seeding a key by hand would fail
    // closed on the old boolean code for the wrong reason and prove nothing.
    $this->actingAs($confirmed, mfaGuard())
        ->post(route('jasmine.2fa.otp'), ['code' => new Google2FA()->getCurrentOtp($secret)]);

    $carried = session('jasmine.2fa_confirmed');
    expect($carried)->not->toBeNull();

    $this->actingAs($victim, mfaGuard())
        ->withSession(['jasmine.2fa_confirmed' => $carried])
        ->get(route('jasmine.dashboard'))
        ->assertRedirect(route('jasmine.2fa'));
});

it('rejects the legacy boolean confirmation flag', function () {
    $this->actingAs(mfaUser(), mfaGuard())
        ->withSession(['jasmine.2fa_confirmed' => true])
        ->get(route('jasmine.dashboard'))
        ->assertRedirect(route('jasmine.2fa'));
});

it('keeps the challenge page reachable when the confirmation belongs to someone else', function () {
    $secret = mfaSecret();
    $confirmed = mfaUser($secret);
    $victim = mfaUser();

    $this->actingAs($confirmed, mfaGuard())
        ->post(route('jasmine.2fa.otp'), ['code' => new Google2FA()->getCurrentOtp($secret)]);

    // showTwoFactor() applies the same comparison as the middleware; reading a
    // bare truthy value here would bounce the victim to the dashboard without
    // ever challenging them.
    $this->actingAs($victim, mfaGuard())
        ->withSession(['jasmine.2fa_confirmed' => session('jasmine.2fa_confirmed')])
        ->get(route('jasmine.2fa'))
        ->assertOk();
});

// ---------------------------------------------------------------------------
// Every writer must agree with the reader — a writer left on `true` would put
// the user in a loop they can satisfy but never clear.
// ---------------------------------------------------------------------------

it('records the confirming user key when the otp challenge is passed', function () {
    $secret = mfaSecret();
    $user = mfaUser($secret);

    $this->actingAs($user, mfaGuard())
        ->post(route('jasmine.2fa.otp'), ['code' => new Google2FA()->getCurrentOtp($secret)]);

    // strict on purpose: assertSessionHas() compares loosely, and `true == 1`
    // would hide a writer still setting a bare boolean whenever the subject
    // happens to be the first user created in the test
    expect(session('jasmine.2fa_confirmed'))->toBe($user->getKey());
});

it('records the confirming user key when otp is enabled from the profile', function () {
    $user = JasmineUser::factory()->create(); // no second factor yet
    $secret = mfaSecret();

    $this->actingAs($user, mfaGuard())
        ->withSession(['jasmine.2fa_secret' => $secret])
        ->post(route('jasmine.profile.show'), [
            '_sec'     => 'otp',
            'password' => 'password',
            'enabled'  => true,
            'secret'   => $secret,
            'code'     => new Google2FA()->getCurrentOtp($secret),
        ]);

    expect(session('jasmine.2fa_confirmed'))->toBe($user->getKey());
});

it('clears the confirmation when otp is disabled from the profile', function () {
    $user = mfaUser();

    $this->actingAs($user, mfaGuard())
        ->withSession(['jasmine.2fa_confirmed' => $user->getKey()])
        ->post(route('jasmine.profile.show'), [
            '_sec'     => 'otp',
            'password' => 'password',
            'enabled'  => false,
        ])
        ->assertSessionMissing('jasmine.2fa_confirmed');
});

it('leaves no writer setting a bare boolean', function () {
    // a cheap guard against the next call site being added with `=> true`
    $sources = glob(__DIR__ . '/../../src/Http/{Controllers,Middleware}/*.php', GLOB_BRACE);

    foreach ($sources as $file) {
        expect(file_get_contents($file))
            ->not->toMatch('/2fa_confirmed.{0,8}=>\s*(true|false)\b/')
            ->and(true)->toBeTrue();
    }
})->skip(fn() => PHP_OS_FAMILY === 'Windows', 'GLOB_BRACE is unavailable on some Windows builds');
