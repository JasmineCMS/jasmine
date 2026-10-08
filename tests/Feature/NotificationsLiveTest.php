<?php

use Illuminate\Broadcasting\Broadcasters\Broadcaster;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;
use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Str;
use Inertia\Testing\AssertableInertia;
use Jasmine\Jasmine\Events\JasmineNotificationsUpdated;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Http\Middleware\EnforceIdleTimeout;
use Jasmine\Jasmine\Http\Middleware\MfaConfirmed;
use Jasmine\Jasmine\Models\JasmineUser;

uses(RefreshDatabase::class);

class NotificationsLiveTestAlert extends Notification
{
    public function __construct(private readonly array $channels = ['database']) {}

    public function via(object $notifiable): array {
        return $this->channels;
    }

    public function toArray(object $notifiable): array {
        return ['title' => 'Alert'];
    }

    public function toMail(object $notifiable): MailMessage {
        return (new MailMessage)->line('Alert');
    }
}

/**
 * Authorizes private channels through the registered callbacks, without a real server.
 */
class NotificationsLiveTestBroadcaster extends Broadcaster
{
    public function auth($request) {
        return $this->verifyUserCanAccessChannel($request, Str::after($request->channel_name, 'private-'));
    }

    public function validAuthenticationResponse($request, $result) {
        return ['authorized' => true];
    }

    public function broadcast(array $channels, $event, array $payload = []) {}
}

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();
});

function liveUser(): JasmineUser {
    $user = JasmineUser::factory()->create();
    test()->actingAs($user, config('jasmine.auth.guard'));

    return $user;
}

function useTestBroadcaster(): void {
    Broadcast::extend('jasmine-test', fn() => new NotificationsLiveTestBroadcaster);
    config([
        'broadcasting.connections.jasmine-test' => ['driver' => 'jasmine-test'],
        'broadcasting.default'                  => 'jasmine-test',
    ]);
    Jasmine::registerNotificationChannel();
}

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

it('broadcasts only with a real broadcaster unless forced', function (?string $driver, mixed $setting, bool $expected) {
    config(['broadcasting.default' => $driver, 'jasmine.notifications.broadcast' => $setting]);

    expect(Jasmine::broadcastsNotifications())->toBe($expected);
})->with([
    'null driver'           => ['null', null, false],
    'log driver'            => ['log', null, false],
    'reverb'                => ['reverb', null, true],
    'ably'                  => ['ably', null, true],
    'forced off'            => ['reverb', false, false],
    'forced off from env'   => ['reverb', 'false', false],
    'forced on'             => ['null', true, true],
]);

it('defaults to polling every 300 seconds', function () {
    expect(config('jasmine.notifications.poll'))->toBe(300);
});

it('shares the poll interval without broadcast details when broadcasting is off', function () {
    config(['broadcasting.default' => 'null', 'jasmine.notifications.poll' => 120]);
    liveUser();

    $this->get(route('jasmine.dashboard'))
        ->assertInertia(fn(AssertableInertia $page) => $page
            ->where('_notifications', ['poll' => 120, 'channel' => null, 'echo' => null])
        );
});

it('shares the echo options for the active broadcaster', function () {
    config([
        'broadcasting.default'                     => 'reverb',
        'jasmine.notifications.echo.reverb.key'    => 'public-key',
        'jasmine.notifications.echo.reverb.wsHost' => 'ws.example.test',
    ]);
    $user = liveUser();

    $config = Jasmine::notificationsClientConfig($user);

    expect($config['channel'])->toBe("jasmine.user.{$user->id}")
        ->and($config['echo'])->toMatchArray([
            'broadcaster'  => 'reverb',
            'key'          => 'public-key',
            'wsHost'       => 'ws.example.test',
            'authEndpoint' => route('jasmine.broadcasting.auth'),
        ]);
});

it('leaves echo to the host for a broadcaster jasmine has no options for', function () {
    config(['broadcasting.default' => 'ably']);

    $config = Jasmine::notificationsClientConfig(JasmineUser::factory()->create());

    // the channel is still shared, for a host-provided window.Echo to subscribe to
    expect($config['channel'])->not->toBeNull()
        ->and($config['echo'])->toBeNull();
});

it('never sends server secrets to the browser', function () {
    config([
        'broadcasting.default'                   => 'reverb',
        'broadcasting.connections.reverb.secret' => 'server-secret',
        'jasmine.notifications.echo.reverb.key'  => 'public-key',
    ]);

    expect(json_encode(Jasmine::notificationsClientConfig(JasmineUser::factory()->create())))
        ->not->toContain('server-secret');
});

// ---------------------------------------------------------------------------
// Polling endpoint
// ---------------------------------------------------------------------------

it('returns the unread count', function () {
    $user = liveUser();
    $user->notify(new NotificationsLiveTestAlert);
    $user->notify(new NotificationsLiveTestAlert);

    $this->getJson(route('jasmine.notifications.unread'))->assertExactJson(['unread' => 2]);
});

// ---------------------------------------------------------------------------
// Idle timeout
// ---------------------------------------------------------------------------

it('does not count a poll as activity', function () {
    liveUser();
    $before = now()->subMinutes(10)->getTimestamp();

    $this->withSession([EnforceIdleTimeout::KEY => $before])
        ->getJson(route('jasmine.notifications.unread'))
        ->assertOk()
        ->assertSessionHas(EnforceIdleTimeout::KEY, $before);
});

it('counts a page visit as activity', function () {
    liveUser();
    $before = now()->subMinutes(10)->getTimestamp();

    $this->withSession([EnforceIdleTimeout::KEY => $before])
        ->get(route('jasmine.dashboard'))
        ->assertOk()
        ->assertSessionHas(EnforceIdleTimeout::KEY, now()->getTimestamp());
});

it('signs out a session idle past the session lifetime', function () {
    config(['session.lifetime' => 120]);
    liveUser();

    $this->withSession([EnforceIdleTimeout::KEY => now()->subMinutes(121)->getTimestamp()])
        ->get(route('jasmine.dashboard'))
        ->assertRedirect(route('jasmine.login'));

    $this->assertGuest(config('jasmine.auth.guard'));
});

it('answers an idle poll with 401 so the client stops polling', function () {
    config(['session.lifetime' => 120]);
    liveUser();

    $this->withSession([EnforceIdleTimeout::KEY => now()->subMinutes(121)->getTimestamp()])
        ->getJson(route('jasmine.notifications.unread'))
        ->assertUnauthorized();

    $this->assertGuest(config('jasmine.auth.guard'));
});

it('keeps polls from extending the idle window', function () {
    config(['session.lifetime' => 120]);
    liveUser();
    $this->withSession([EnforceIdleTimeout::KEY => now()->getTimestamp()]);

    // two hours of polling every five minutes, nothing else
    for ($i = 0; $i < 24; $i++) {
        $this->travel(5)->minutes();
        $this->getJson(route('jasmine.notifications.unread'));
    }

    $this->travel(5)->minutes();
    $this->get(route('jasmine.dashboard'))->assertRedirect(route('jasmine.login'));
});

// ---------------------------------------------------------------------------
// Broadcast events
// ---------------------------------------------------------------------------

it('announces a database notification to a jasmine user', function () {
    config(['broadcasting.default' => 'reverb']);
    Event::fake([JasmineNotificationsUpdated::class]);

    $user = JasmineUser::factory()->create();
    $user->notify(new NotificationsLiveTestAlert);

    Event::assertDispatched(JasmineNotificationsUpdated::class, fn($e) => $e->user->is($user));
});

it('stays quiet when broadcasting is off', function () {
    config(['broadcasting.default' => 'null']);
    Event::fake([JasmineNotificationsUpdated::class]);

    JasmineUser::factory()->create()->notify(new NotificationsLiveTestAlert);

    Event::assertNotDispatched(JasmineNotificationsUpdated::class);
});

it('ignores channels other than database', function () {
    config(['broadcasting.default' => 'reverb']);
    Event::fake([JasmineNotificationsUpdated::class]);

    JasmineUser::factory()->create()->notify(new NotificationsLiveTestAlert(['mail']));

    Event::assertNotDispatched(JasmineNotificationsUpdated::class);
});

it('announces read changes so other tabs update', function () {
    config(['broadcasting.default' => 'reverb']);
    $user = liveUser();
    $user->notify(new NotificationsLiveTestAlert);
    $user->notify(new NotificationsLiveTestAlert);
    $id = $user->notifications()->value('id');

    Event::fake([JasmineNotificationsUpdated::class]);

    $this->post(route('jasmine.notifications.read', $id));
    $this->post(route('jasmine.notifications.read-all'));

    Event::assertDispatchedTimes(JasmineNotificationsUpdated::class, 2);
});

it('carries the current unread count on the user channel', function () {
    $user = JasmineUser::factory()->create();
    $user->notify(new NotificationsLiveTestAlert);

    $event = new JasmineNotificationsUpdated($user);

    expect($event->broadcastOn()->name)->toBe("private-jasmine.user.{$user->id}")
        ->and($event->broadcastAs())->toBe('notifications.updated')
        ->and($event->broadcastWith())->toBe(['unread' => 1]);
});

it('does not let a broadcaster failure break sending the notification', function () {
    Broadcast::extend('broken', fn() => throw new RuntimeException('socket server down'));
    config([
        'broadcasting.connections.broken' => ['driver' => 'broken'],
        'broadcasting.default'            => 'broken',
    ]);

    $user = JasmineUser::factory()->create();
    $user->notify(new NotificationsLiveTestAlert);

    expect($user->notifications()->count())->toBe(1);
});

// ---------------------------------------------------------------------------
// Channel auth
// ---------------------------------------------------------------------------

it('authorizes a user for their own channel', function () {
    useTestBroadcaster();
    $user = liveUser();

    $this->post(route('jasmine.broadcasting.auth'), ['channel_name' => "private-jasmine.user.{$user->id}"])
        ->assertOk();
});

it('refuses another user\'s channel', function () {
    useTestBroadcaster();
    $other = JasmineUser::factory()->create();
    liveUser();

    $this->post(route('jasmine.broadcasting.auth'), ['channel_name' => "private-jasmine.user.{$other->id}"])
        ->assertForbidden();
});

it('refuses a session that has not passed mfa, even through the host route', function () {
    $user = JasmineUser::factory()->create(['otp_secret' => 'JBSWY3DPEHPK3PXP']);
    $this->actingAs($user, config('jasmine.auth.guard'));

    expect(MfaConfirmed::satisfiedBy($user))->toBeFalse();

    session(['jasmine.2fa_confirmed' => $user->getKey()]);
    expect(MfaConfirmed::satisfiedBy($user))->toBeTrue();
});
