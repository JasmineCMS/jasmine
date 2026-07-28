<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Models\JasmineUser;
use PragmaRX\Google2FA\Google2FA;

uses(RefreshDatabase::class);

const API_PROFILE = '/jasmine/api/profile';

/**
 * Mint a usable bearer token and hand back the plaintext.
 */
function bearerFor(JasmineUser $user): string {
    $plain = 'jsm_' . Str::random(33);

    $user->apiTokens()->create([
        'name'  => 'test',
        'hash'  => hash('sha256', $plain),
        'token' => Str::substr($plain, 0, 8),
    ]);

    return $plain;
}

function userWithKey(): JasmineUser {
    $user = JasmineUser::factory()->create();
    $user->webauthnCredentials()->create([
        'name'          => 'yubikey',
        'credential_id' => Str::random(40),
        'source'        => ['stub' => true],
    ]);

    return $user;
}

// ---------------------------------------------------------------------------
// A bearer token is the possession factor and cannot be challenged — that part is by design.
// What it must not be able to do is change the account's own security posture.
// ---------------------------------------------------------------------------

it('refuses to delete security keys over the api', function () {
    $user = userWithKey();
    $key = $user->webauthnCredentials()->sole();

    $this->withToken(bearerFor($user))
        ->postJson(API_PROFILE, ['_sec' => 'deleteWebauthn', 'id' => $key->id])
        ->assertStatus(422)
        ->assertJsonPath('errors._sec.0', 'Operation not permitted via API');

    // the second factor survives — otherwise a leaked token could strip 2FA outright
    expect($user->webauthnCredentials()->count())->toBe(1);
});

it('refuses to mint further tokens over the api', function () {
    $user = JasmineUser::factory()->create();

    $this->withToken(bearerFor($user))
        ->postJson(API_PROFILE, ['_sec' => 'createToken', 'name' => 'sibling'])
        ->assertStatus(422)
        ->assertJsonPath('errors._sec.0', 'Operation not permitted via API');

    // Token creation must not be self-propagating: revocation is the only control that ends a
    // token's life, and it is useless if a compromised token can mint replacements.
    expect($user->apiTokens()->count())->toBe(1);
});

it('still allows the harmless profile sections', function () {
    $user = JasmineUser::factory()->create();

    $this->withToken(bearerFor($user))
        ->postJson(API_PROFILE, ['_sec' => 'details', 'name' => 'Renamed'])
        ->assertSuccessful();

    expect($user->fresh()->name)->toBe('Renamed');
});

it('still allows a token to revoke itself', function () {
    $user = JasmineUser::factory()->create();
    $token = bearerFor($user);

    $this->withToken($token)
        ->postJson(API_PROFILE, ['_sec' => 'deleteToken', 'id' => $user->apiTokens()->sole()->id])
        ->assertSuccessful();

    expect($user->apiTokens()->count())->toBe(0);
});

it('refuses to change the password over the api even with the current one', function () {
    $user = JasmineUser::factory()->create();
    $originalHash = $user->getAuthPassword();

    $this->withToken(bearerFor($user))
        ->postJson(API_PROFILE, [
            '_sec'                      => 'password',
            'password'                  => 'password',   // the correct current password
            'new_password'              => 'a-brand-new-password',
            'new_password_confirmation' => 'a-brand-new-password',
        ])
        ->assertStatus(422)
        ->assertJsonPath('errors._sec.0', 'Operation not permitted via API');

    expect($user->fresh()->getAuthPassword())->toBe($originalHash);
});

it('refuses to disable otp over the api even with the current password', function () {
    $user = JasmineUser::factory()->create(['otp_secret' => new Google2FA()->generateSecretKey()]);

    // On the web this sits behind MfaConfirmed. Over the API there is no second factor to
    // demand, so a leaked token plus a reused password would otherwise strip 2FA outright.
    $this->withToken(bearerFor($user))
        ->postJson(API_PROFILE, ['_sec' => 'otp', 'password' => 'password', 'enabled' => false])
        ->assertStatus(422)
        ->assertJsonPath('errors._sec.0', 'Operation not permitted via API');

    expect($user->fresh()->otp_secret)->not->toBeNull()
        ->and($user->fresh()->hasTwoFactor())->toBeTrue();
});
