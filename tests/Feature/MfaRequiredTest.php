<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Illuminate\Testing\TestResponse;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasmineUser;
use PragmaRX\Google2FA\Google2FA;

uses(RefreshDatabase::class);

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();

    config()->set('jasmine.auth.mfa.required', true);
});

function reqGuard(): string {
    return config('jasmine.auth.guard');
}

function reqOtpUser(): JasmineUser {
    return JasmineUser::factory()->create(['otp_secret' => new Google2FA()->generateSecretKey()]);
}

function reqAddKey(JasmineUser $user): int {
    return $user->webauthnCredentials()->create([
        'name'          => 'yubikey',
        'credential_id' => Str::random(40),
        'source'        => ['stub' => true],
    ])->id;
}

// ---------------------------------------------------------------------------
// The enrollment gate
// ---------------------------------------------------------------------------

it('locks an un-enrolled user out of everything but the profile', function () {
    $this->actingAs(JasmineUser::factory()->create(), reqGuard())
        ->get(route('jasmine.dashboard'))
        ->assertRedirect(route('jasmine.profile.show'));
});

it('keeps the profile reachable for an un-enrolled user', function () {
    $this->actingAs(JasmineUser::factory()->create(), reqGuard())
        ->get(route('jasmine.profile.show'))
        ->assertOk();
});

it('lets an un-enrolled user straight through when the requirement is off', function () {
    config()->set('jasmine.auth.mfa.required', false);

    $this->actingAs(JasmineUser::factory()->create(), reqGuard())
        ->get(route('jasmine.dashboard'))
        ->assertOk();
});

it('still sends an enrolled but unconfirmed user to the challenge, not the profile', function () {
    $this->actingAs(reqOtpUser(), reqGuard())
        ->get(route('jasmine.dashboard'))
        ->assertRedirect(route('jasmine.2fa'));
});

it('admits an enrolled and confirmed user', function () {
    $user = reqOtpUser();

    $this->actingAs($user, reqGuard())
        ->withSession(['jasmine.2fa_confirmed' => $user->getKey()])
        ->get(route('jasmine.dashboard'))
        ->assertOk();
});

// ---------------------------------------------------------------------------
// The SSO exemption — the IdP is trusted to enforce its own MFA. The session
// flag is keyed to the user for the same reason `jasmine.2fa_confirmed` is:
// session data survives login()/regenerate(), so a bare flag could leak
// across users.
// ---------------------------------------------------------------------------

it('exempts a session established via sso', function () {
    $user = JasmineUser::factory()->create();

    $this->actingAs($user, reqGuard())
        ->withSession(['jasmine.sso_login' => $user->getKey()])
        ->get(route('jasmine.dashboard'))
        ->assertOk();
});

it('rejects an sso exemption earned by a different user', function () {
    $other = JasmineUser::factory()->create();
    $user = JasmineUser::factory()->create();

    $this->actingAs($user, reqGuard())
        ->withSession(['jasmine.sso_login' => $other->getKey()])
        ->get(route('jasmine.dashboard'))
        ->assertRedirect(route('jasmine.profile.show'));
});

// ---------------------------------------------------------------------------
// The flag reflects the most recent login event: only a trusted SSO login
// stamps it, and any other login clears it — an exemption earned through a
// trusted provider must not outlive it.
// ---------------------------------------------------------------------------

function reqSsoLogin(JasmineUser $user, bool $mfaTrusted, array $session = []): TestResponse {
    Jasmine::registerOauth2Sso(
        'idp', 'icon', 'client-id', 'client-secret',
        'https://idp.test/authorize', 'https://idp.test/token',
        [], false,
        fn(string $body) => ['name' => $user->name, 'email' => $user->email],
        $mfaTrusted,
    );

    Http::fake(['https://idp.test/token' => Http::response(['access_token' => 'tok'])]);

    return test()
        ->withSession([
            ...$session,
            'jasmine_sso_state:idp'    => 'state-value',
            'jasmine_sso_verifier:idp' => Str::random(64),
        ])
        ->get(route('jasmine.sso.oauth2.auth', ['provider' => 'idp', 'state' => 'state-value', 'code' => 'x']));
}

it('stamps the exemption when logging in through a trusted sso', function () {
    $user = JasmineUser::factory()->create();

    reqSsoLogin($user, mfaTrusted: true);

    expect(session('jasmine.sso_login'))->toBe($user->getKey());
});

it('does not stamp the exemption when the sso is not mfa-trusted', function () {
    reqSsoLogin(JasmineUser::factory()->create(), mfaTrusted: false)
        ->assertSessionMissing('jasmine.sso_login');
});

it('clears a stale exemption when logging in through an untrusted sso', function () {
    $user = JasmineUser::factory()->create();

    reqSsoLogin($user, mfaTrusted: false, session: ['jasmine.sso_login' => $user->getKey()])
        ->assertSessionMissing('jasmine.sso_login');
});

it('clears a stale exemption on password login', function () {
    $user = JasmineUser::factory()->create();

    $this->withSession(['jasmine.sso_login' => $user->getKey()])
        ->post(route('jasmine.login'), ['email' => $user->email, 'password' => 'password'])
        ->assertSessionMissing('jasmine.sso_login');
});

// ---------------------------------------------------------------------------
// Removing the last factor
// ---------------------------------------------------------------------------

it('refuses to disable otp when it is the last factor', function () {
    $user = reqOtpUser();

    $this->actingAs($user, reqGuard())
        ->withSession(['jasmine.2fa_confirmed' => $user->getKey()])
        ->post(route('jasmine.profile.show'), [
            '_sec'     => 'otp',
            'password' => 'password',
            'enabled'  => false,
        ])
        ->assertSessionHasErrors('enabled');

    expect($user->fresh()->otp_secret)->not->toBeNull();
});

it('allows disabling otp while a security key remains', function () {
    $user = reqOtpUser();
    reqAddKey($user);

    $this->actingAs($user, reqGuard())
        ->withSession(['jasmine.2fa_confirmed' => $user->getKey()])
        ->post(route('jasmine.profile.show'), [
            '_sec'     => 'otp',
            'password' => 'password',
            'enabled'  => false,
        ])
        ->assertSessionDoesntHaveErrors();

    expect($user->fresh()->otp_secret)->toBeNull();
});

it('refuses to delete the last security key when it is the last factor', function () {
    $user = JasmineUser::factory()->create();
    $keyId = reqAddKey($user);

    $this->actingAs($user, reqGuard())
        ->withSession(['jasmine.2fa_confirmed' => $user->getKey()])
        ->post(route('jasmine.profile.show'), [
            '_sec'     => 'deleteWebauthn',
            'password' => 'password',
            'id'       => $keyId,
        ])
        ->assertSessionHasErrors('id');

    expect($user->webauthnCredentials()->whereKey($keyId)->exists())->toBeTrue();
});

it('allows deleting a security key while otp remains', function () {
    $user = reqOtpUser();
    $keyId = reqAddKey($user);

    $this->actingAs($user, reqGuard())
        ->withSession(['jasmine.2fa_confirmed' => $user->getKey()])
        ->post(route('jasmine.profile.show'), [
            '_sec'     => 'deleteWebauthn',
            'password' => 'password',
            'id'       => $keyId,
        ])
        ->assertSessionDoesntHaveErrors();

    expect($user->webauthnCredentials()->whereKey($keyId)->exists())->toBeFalse();
});

it('allows removing factors freely when the requirement is off', function () {
    config()->set('jasmine.auth.mfa.required', false);

    $user = reqOtpUser();

    $this->actingAs($user, reqGuard())
        ->withSession(['jasmine.2fa_confirmed' => $user->getKey()])
        ->post(route('jasmine.profile.show'), [
            '_sec'     => 'otp',
            'password' => 'password',
            'enabled'  => false,
        ])
        ->assertSessionDoesntHaveErrors();

    expect($user->fresh()->otp_secret)->toBeNull();
});
