<?php

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Notification;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\URL;
use Jasmine\Jasmine\Models\JasmineUser;
use Jasmine\Jasmine\Notifications\OnboardingInvite;
use PragmaRX\Google2FA\Google2FA;

uses(RefreshDatabase::class);

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();
});

function obGuard(): string {
    return config('jasmine.auth.guard');
}

/**
 * Mirrors JasmineUser::sendOnboardingLink() — kept in sync by the notification round-trip test.
 */
function obLink(JasmineUser $user): string {
    return URL::temporarySignedRoute(
        'jasmine.onboarding',
        now()->addMinutes((int)config('jasmine.auth.onboarding.expire', 20)),
        ['user' => $user->getKey(), 'k' => hash('sha256', $user->password)],
    );
}

function obResendUrl(JasmineUser $target): string {
    return route('jasmine.bread.action', [
        'breadable'   => 'jasmine-users',
        'breadableId' => $target->getKey(),
        'action'      => 'send-onboarding-link',
    ]);
}

// ---------------------------------------------------------------------------
// Issuing links
// ---------------------------------------------------------------------------

it('emails an onboarding link when an admin creates a user', function () {
    Notification::fake();
    $admin = JasmineUser::factory()->create(['admin' => true]);

    $this->actingAs($admin, obGuard())->post(
        route('jasmine.bread.create', 'jasmine-users'),
        ['v' => ['name' => 'New User', 'email' => 'new@user.test']],
    );

    Notification::assertSentTo(
        JasmineUser::whereEmail('new@user.test')->firstOrFail(),
        OnboardingInvite::class,
    );
});

it('sends a link that round-trips to the activation page', function () {
    Notification::fake();
    $user = JasmineUser::factory()->create();

    $user->sendOnboardingLink();

    $url = null;
    Notification::assertSentTo($user, OnboardingInvite::class,
        function (OnboardingInvite $n) use (&$url) {
            $url = $n->url;

            return true;
        });

    $this->get($url)->assertOk();
});

// ---------------------------------------------------------------------------
// Consuming links
// ---------------------------------------------------------------------------

it('lets an invited user set a password and signs them in', function () {
    $user = JasmineUser::factory()->create();
    $url = obLink($user);

    $this->get($url)->assertOk();

    $this->post($url, [
        'password'              => 'brand-N3w-secret!',
        'password_confirmation' => 'brand-N3w-secret!',
    ]);

    $this->assertAuthenticatedAs($user, obGuard());
    expect(Hash::check('brand-N3w-secret!', $user->fresh()->password))->toBeTrue();
});

it('kills the link once a password has been set', function () {
    $user = JasmineUser::factory()->create();
    $url = obLink($user);

    $this->post($url, [
        'password'              => 'brand-N3w-secret!',
        'password_confirmation' => 'brand-N3w-secret!',
    ]);

    $this->post(route('jasmine.logout'));

    // same URL again: the signature still verifies, but the password-hash
    // fingerprint no longer matches — the link is spent
    $this->get($url)
        ->assertRedirect(route('jasmine.login'));

    $this->assertGuest(obGuard());
});

it('rejects an expired link', function () {
    $user = JasmineUser::factory()->create();
    $url = obLink($user);

    $this->travel((int)config('jasmine.auth.onboarding.expire', 20) + 1)->minutes();

    $this->get($url)->assertRedirect(route('jasmine.login'));
    $this->post($url, [
        'password'              => 'brand-N3w-secret!',
        'password_confirmation' => 'brand-N3w-secret!',
    ])->assertRedirect(route('jasmine.login'));

    $this->assertGuest(obGuard());
});

it('rejects a link whose user id was swapped', function () {
    $user = JasmineUser::factory()->create();
    $other = JasmineUser::factory()->create();

    $tampered = str_replace(
        "/onboarding/{$user->getKey()}",
        "/onboarding/{$other->getKey()}",
        obLink($user),
    );

    $this->get($tampered)->assertRedirect(route('jasmine.login'));
    $this->assertGuest(obGuard());
});

it('funnels a freshly onboarded user into mfa enrollment when required', function () {
    config()->set('jasmine.auth.mfa.required', true);
    $user = JasmineUser::factory()->create();

    $this->post(obLink($user), [
        'password'              => 'brand-N3w-secret!',
        'password_confirmation' => 'brand-N3w-secret!',
    ]);

    $this->assertAuthenticatedAs($user, obGuard());
    $this->get(route('jasmine.dashboard'))->assertRedirect(route('jasmine.profile.show'));
});

// ---------------------------------------------------------------------------
// The reset-block: while MFA is required, an un-enrolled account's only
// credential path is an admin-issued onboarding link. The refusal must be
// indistinguishable from a successful send.
// ---------------------------------------------------------------------------

it('silently refuses password reset for un-enrolled users while mfa is required', function () {
    config()->set('jasmine.auth.mfa.required', true);
    Notification::fake();
    $user = JasmineUser::factory()->create();

    $this->post(route('jasmine.password.forgot'), ['email' => $user->email])
        ->assertRedirect()
        ->assertSessionHas('swal.icon', 'success')
        ->assertSessionHas('swal.text', trans(Password::RESET_LINK_SENT));

    Notification::assertNothingSent();
});

it('still resets passwords for enrolled users while mfa is required', function () {
    config()->set('jasmine.auth.mfa.required', true);
    Notification::fake();
    $user = JasmineUser::factory()->create(['otp_secret' => new Google2FA()->generateSecretKey()]);

    $this->post(route('jasmine.password.forgot'), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class);
});

it('allows self-service reset for un-enrolled users when mfa is not required', function () {
    Notification::fake();
    $user = JasmineUser::factory()->create();

    $this->post(route('jasmine.password.forgot'), ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class);
});

// ---------------------------------------------------------------------------
// Admin resend, through the generic BREAD action dispatcher
// ---------------------------------------------------------------------------

it('lets an authorized admin resend an onboarding link', function () {
    Notification::fake();
    $admin = JasmineUser::factory()->create(['admin' => true]);
    $target = JasmineUser::factory()->create();

    $this->actingAs($admin, obGuard())
        ->post(obResendUrl($target))
        ->assertRedirect()
        ->assertSessionHas('swal.icon', 'success');

    Notification::assertSentTo($target, OnboardingInvite::class);
});

it('denies the resend action without the breadable read permission', function () {
    Notification::fake();
    JasmineUser::factory()->create(); // burn id 1 — it is always a superuser
    $actor = JasmineUser::factory()->create();
    $target = JasmineUser::factory()->create();

    $this->actingAs($actor, obGuard())
        ->post(obResendUrl($target))
        ->assertForbidden();

    Notification::assertNothingSent();
});

it('denies the resend action to a user with read but not edit', function () {
    // hiding the button in the index is not enforcement — the dispatcher must
    // check the action's own declared permission
    Notification::fake();
    JasmineUser::factory()->create(); // burn id 1 — it is always a superuser
    $actor = JasmineUser::factory()->create(['permissions' => ['models.jasmine-users.read']]);
    $target = JasmineUser::factory()->create();

    $this->actingAs($actor, obGuard())
        ->post(obResendUrl($target))
        ->assertForbidden();

    Notification::assertNothingSent();
});

it('hides the resend action for users who already have a second factor', function () {
    // conditional browseActions() doubles as enforcement: the dispatcher reads
    // the same array, so an enrolled target has no such action to invoke
    Notification::fake();
    $admin = JasmineUser::factory()->create(['admin' => true]);
    $target = JasmineUser::factory()->create(['otp_secret' => new Google2FA()->generateSecretKey()]);

    $this->actingAs($admin, obGuard())
        ->post(obResendUrl($target))
        ->assertNotFound();

    Notification::assertNothingSent();
});

it('hides the resend action on your own row', function () {
    Notification::fake();
    $admin = JasmineUser::factory()->create(['admin' => true]); // no second factor

    $this->actingAs($admin, obGuard())
        ->post(obResendUrl($admin))
        ->assertNotFound();

    Notification::assertNothingSent();
});

it('returns 404 for an unknown or handler-less action', function () {
    $admin = JasmineUser::factory()->create(['admin' => true]);
    $target = JasmineUser::factory()->create();

    $this->actingAs($admin, obGuard())
        ->post(route('jasmine.bread.action', [
            'breadable'   => 'jasmine-users',
            'breadableId' => $target->getKey(),
            'action'      => 'nope',
        ]))->assertNotFound();

    // 'edit' exists as an action but has no handler — not dispatchable
    $this->actingAs($admin, obGuard())
        ->post(route('jasmine.bread.action', [
            'breadable'   => 'jasmine-users',
            'breadableId' => $target->getKey(),
            'action'      => 'edit',
        ]))->assertNotFound();
});
