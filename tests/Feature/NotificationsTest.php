<?php

use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Notifications\Notification;
use Inertia\Testing\AssertableInertia;
use Jasmine\Jasmine\JasmineServiceProvider;
use Jasmine\Jasmine\Models\JasmineUser;
use Jasmine\Jasmine\Notifications\JasmineNotificationData;

uses(RefreshDatabase::class);

class NotificationsTestAlert extends Notification
{
    public function __construct(private readonly array $data) {}

    public function via(object $notifiable): array {
        return ['database'];
    }

    public function toArray(object $notifiable): array {
        return $this->data;
    }
}

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();
});

function notifyUser(JasmineUser $user, array|JasmineNotificationData $data): string {
    $user->notify(new NotificationsTestAlert($data instanceof JasmineNotificationData ? $data->toArray() : $data));

    return $user->notifications()->latest()->value('id');
}

function signedInNotifiable(): JasmineUser {
    $user = JasmineUser::factory()->create();
    test()->actingAs($user, config('jasmine.auth.guard'));

    return $user;
}

// ---------------------------------------------------------------------------
// Builder
// ---------------------------------------------------------------------------

it('builds the payload and leaves out unset keys', function () {
    expect(JasmineNotificationData::make('Hi')->toArray())->toBe(['title' => 'Hi', 'level' => 'info']);

    expect(JasmineNotificationData::make('Alert')->message('Disk full')->url('/x')->icon('bi-hdd')->danger()->toArray())
        ->toBe(['title' => 'Alert', 'message' => 'Disk full', 'url' => '/x', 'icon' => 'bi-hdd', 'level' => 'danger']);
});

it('rejects an unknown level', function () {
    JasmineNotificationData::make('Hi')->level('critical');
})->throws(InvalidArgumentException::class);

it('presents a payload that was not built with the builder', function () {
    $user = JasmineUser::factory()->create();
    notifyUser($user, ['message' => 'no title', 'level' => 'bogus', 'url' => '']);

    expect(JasmineNotificationData::present($user->notifications()->first()))->toMatchArray([
        'title'   => 'Notifications Test Alert',
        'message' => 'no title',
        'url'     => null,
        'icon'    => JasmineNotificationData::DEFAULT_ICON,
        'level'   => 'info',
        'read'    => false,
    ]);
});

// ---------------------------------------------------------------------------
// Listing
// ---------------------------------------------------------------------------

it('lists the signed-in user\'s notifications newest first', function () {
    $user = signedInNotifiable();
    $this->travel(-2)->minutes();
    notifyUser($user, ['title' => 'older']);
    $this->travelBack();
    notifyUser($user, ['title' => 'newer']);

    $this->get(route('jasmine.notifications.index'))
        ->assertOk()
        ->assertInertia(fn(AssertableInertia $page) => $page
            ->component('Notifications', false)
            ->where('notifications.data.0.title', 'newer')
            ->where('notifications.data.1.title', 'older')
            ->where('_notifications_unread', 2)
        );

    $this->getJson(route('jasmine.notifications.recent'))
        ->assertOk()
        ->assertJsonPath('items.0.title', 'newer')
        ->assertJsonPath('unread', 2);
});

it('never shows another user\'s notifications', function () {
    notifyUser(JasmineUser::factory()->create(), ['title' => 'not yours']);
    signedInNotifiable();

    $this->getJson(route('jasmine.notifications.recent'))
        ->assertJsonCount(0, 'items')
        ->assertJsonPath('unread', 0);
});

// ---------------------------------------------------------------------------
// Read state
// ---------------------------------------------------------------------------

it('marks one notification read', function () {
    $user = signedInNotifiable();
    $id = notifyUser($user, ['title' => 'a']);
    notifyUser($user, ['title' => 'b']);

    $this->post(route('jasmine.notifications.read', $id))->assertRedirect();

    expect($user->notifications()->find($id)->read_at)->not->toBeNull()
        ->and($user->unreadNotifications()->count())->toBe(1);
});

it('marks all notifications read without touching other users', function () {
    $other = JasmineUser::factory()->create();
    notifyUser($other, ['title' => 'x']);

    $user = signedInNotifiable();
    notifyUser($user, ['title' => 'a']);
    notifyUser($user, ['title' => 'b']);

    $this->post(route('jasmine.notifications.read-all'))->assertRedirect();

    expect($user->unreadNotifications()->count())->toBe(0)
        ->and($other->unreadNotifications()->count())->toBe(1);
});

it('404s when touching another user\'s notification', function () {
    $id = notifyUser(JasmineUser::factory()->create(), ['title' => 'x']);
    signedInNotifiable();

    $this->post(route('jasmine.notifications.read', $id))->assertNotFound();
    $this->post(route('jasmine.notifications.open', $id))->assertNotFound();
});

// ---------------------------------------------------------------------------
// Opening
// ---------------------------------------------------------------------------

it('opens a jasmine url as an inertia redirect and marks it read', function () {
    $user = signedInNotifiable();
    $url = route('jasmine.profile.show');
    $id = notifyUser($user, ['title' => 'a', 'url' => $url]);

    $this->withHeader('X-Inertia', 'true')
        ->post(route('jasmine.notifications.open', $id))
        ->assertRedirect($url);

    expect($user->notifications()->find($id)->read_at)->not->toBeNull();
});

it('opens a relative jasmine url as an inertia redirect', function () {
    $user = signedInNotifiable();
    $id = notifyUser($user, ['title' => 'a', 'url' => '/jasmine/profile']);

    $this->withHeader('X-Inertia', 'true')
        ->post(route('jasmine.notifications.open', $id))
        ->assertRedirect(url('/jasmine/profile'));
});

it('opens a url outside jasmine with a full page load', function () {
    $user = signedInNotifiable();
    $id = notifyUser($user, ['title' => 'a', 'url' => '/jasmine-lookalike/alerts/7']);

    $this->withHeader('X-Inertia', 'true')
        ->post(route('jasmine.notifications.open', $id))
        ->assertStatus(409)
        ->assertHeader('X-Inertia-Location', url('/jasmine-lookalike/alerts/7'));
});

it('goes back when the notification has no url', function () {
    $user = signedInNotifiable();
    $id = notifyUser($user, ['title' => 'a']);

    $this->from(route('jasmine.dashboard'))
        ->post(route('jasmine.notifications.open', $id))
        ->assertRedirect(route('jasmine.dashboard'));

    expect($user->notifications()->find($id)->read_at)->not->toBeNull();
});

// ---------------------------------------------------------------------------
// Morph map
// ---------------------------------------------------------------------------

it('stores the jasmine_user alias when the host enforces a morph map', function () {
    $previous = [Relation::morphMap(), Relation::requiresMorphMap()];

    try {
        Relation::requireMorphMap();
        (fn() => $this->registerMorphAlias())->call(app()->getProvider(JasmineServiceProvider::class));

        $user = JasmineUser::factory()->create();
        notifyUser($user, ['title' => 'a']);

        expect($user->notifications()->first()->notifiable_type)->toBe('jasmine_user');
    } finally {
        Relation::$morphMap = $previous[0];
        Relation::requireMorphMap($previous[1]);
    }
});

it('leaves the class name when the host does not enforce a morph map', function () {
    $user = JasmineUser::factory()->create();
    notifyUser($user, ['title' => 'a']);

    expect($user->notifications()->first()->notifiable_type)->toBe(JasmineUser::class);
});
