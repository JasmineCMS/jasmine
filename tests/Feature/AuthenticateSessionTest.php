<?php

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Session\Middleware\AuthenticateSession as BaseAuthenticateSession;
use Illuminate\Support\Facades\Hash;
use Jasmine\Jasmine\Http\Controllers\AuthController;
use Jasmine\Jasmine\Http\Middleware\AuthenticateSession;
use Jasmine\Jasmine\Models\JasmineUser;
use Symfony\Component\Routing\Exception\RouteNotFoundException;

uses(RefreshDatabase::class);

beforeEach(fn() => $this->withoutVite());

function asGuard(): string {
    return config('jasmine.auth.guard');
}

/**
 * Read the base middleware's protected static redirect callback.
 */
function currentRedirectCallback(): ?callable {
    return new ReflectionProperty(BaseAuthenticateSession::class, 'redirectToCallback')->getValue();
}

it('stores the password hash under a jasmine-scoped session key', function () {
    $this->actingAs(JasmineUser::factory()->create(), asGuard())
        ->get(route('jasmine.dashboard'))
        ->assertOk();

    // Namespaced by the swapped default guard, so it can never collide with a host
    // application's own `password_hash_web`.
    expect(session()->all())->toHaveKey('password_hash_jasmine_web');
});

it('evicts a session whose stored hash no longer matches', function () {
    $this->actingAs(JasmineUser::factory()->create(), asGuard())
        ->withSession(['password_hash_jasmine_web' => Hash::make('some-previous-password')])
        ->get(route('jasmine.dashboard'))
        ->assertRedirect(route('jasmine.login'));
});

it('sends an evicted session to the jasmine login rather than crashing', function () {
    // Laravel defaults this redirect to route('login'), resolved inside the base middleware's
    // logout() before its exception is built. A Jasmine-only install defines no such route, so
    // without the swap in AuthenticateSession this raises RouteNotFoundException and 500s —
    // precisely when the feature is supposed to work.
    $res = $this->actingAs(JasmineUser::factory()->create(), asGuard())
        ->withSession(['password_hash_jasmine_web' => 'stale'])
        ->get(route('jasmine.dashboard'));

    expect($res->status())->toBe(302)
        ->and($res->headers->get('Location'))->toBe(route('jasmine.login'));
});

it('leaves a matching session alone', function () {
    $this->actingAs(JasmineUser::factory()->create(), asGuard())
        ->get(route('jasmine.dashboard'))->assertOk();

    // second request reuses the hash stored by the first
    $this->get(route('jasmine.dashboard'))->assertOk();
});

// ---------------------------------------------------------------------------
// What this means for a password change: eviction keys off the password hash, so it happens
// whether or not the user asked for it. The `forget_remembered_devices` switch only governs the
// remember-me token.
// ---------------------------------------------------------------------------

it('evicts other devices on a password change even when the switch is off', function () {
    $user = JasmineUser::factory()->create();

    // Snapshot up front: actingAs() hands the guard this very instance, so the controller
    // mutating and saving it also mutates the copy this test is holding.
    $originalHash = $user->getAuthPassword();

    // what another device's session would be holding before the change
    $stale = AuthController::guard()->hashPasswordForCookie($originalHash);

    $this->actingAs($user, asGuard())
        ->post(route('jasmine.profile.show'), [
            '_sec'                      => 'password',
            'password'                  => 'password',
            'new_password'              => 'a-brand-new-password',
            'new_password_confirmation' => 'a-brand-new-password',
            'forget_remembered_devices' => false,
        ])->assertSessionHasNoErrors();

    expect($user->fresh()->getAuthPassword())->not->toBe($originalHash);

    $this->actingAs($user->fresh(), asGuard())
        ->withSession(['password_hash_jasmine_web' => $stale])
        ->get(route('jasmine.dashboard'))
        ->assertRedirect(route('jasmine.login'));
});

it('keeps the session that performed the change signed in', function () {
    $user = JasmineUser::factory()->create();

    $this->actingAs($user, asGuard())
        ->post(route('jasmine.profile.show'), [
            '_sec'                      => 'password',
            'password'                  => 'password',
            'new_password'              => 'a-brand-new-password',
            'new_password_confirmation' => 'a-brand-new-password',
        ])->assertSessionHasNoErrors();

    // the middleware re-stores the hash *after* the response, so the acting user is not
    // evicted by their own change
    expect(session('password_hash_jasmine_web'))
        ->toBe(AuthController::guard()->hashPasswordForCookie($user->fresh()->getAuthPassword()));
});

// ---------------------------------------------------------------------------
// The middleware borrows two pieces of global state — the default auth guard and the base
// middleware's static redirect callback. Both must be handed back even when the request blows up,
// because under Octane the process outlives the request.
// ---------------------------------------------------------------------------

it('restores the default guard when something downstream throws', function () {
    $this->actingAs(JasmineUser::factory()->create(), asGuard());
    config(['auth.defaults.guard' => 'web']); // actingAs() calls shouldUse(), so set it after

    try {
        new AuthenticateSession()->handle(request(), fn() => throw new RuntimeException('boom'));
    } catch (RuntimeException) {
        // expected
    }

    expect(config('auth.defaults.guard'))->toBe('web');
});

it('restores the redirect callback when something downstream throws', function () {
    $sentinel = fn() => 'http://host-app.test/sign-in';
    BaseAuthenticateSession::redirectUsing($sentinel);

    $this->actingAs(JasmineUser::factory()->create(), asGuard());

    try {
        new AuthenticateSession()->handle(request(), fn() => throw new RuntimeException('boom'));
    } catch (RuntimeException) {
        // expected
    }

    // a host application's own guest redirect must survive a trip through Jasmine
    expect(currentRedirectCallback())->toBe($sentinel);
});

it('does not leave its own redirect callback installed after a normal request', function () {
    $this->actingAs(JasmineUser::factory()->create(), asGuard())
        ->get(route('jasmine.dashboard'))->assertOk();

    // A sentinel cannot be used here: resolving the HTTP kernel fires the afterResolving hook
    // from withMiddleware(), which reinstalls Laravel's own `fn() => route('login')` before the
    // middleware ever runs. So the callback we expect back is Laravel's — and since this install
    // has no `login` route, invoking it raising RouteNotFoundException is exactly the proof that
    // Jasmine's jasmine-login callback is no longer in place.
    expect(fn() => currentRedirectCallback()(request()))
        ->toThrow(RouteNotFoundException::class);
});
