<?php

use App\Models\Author;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Http\Request;
use Inertia\Testing\AssertableInertia;
use Jasmine\Jasmine\Bread\BrowseContext;
use Jasmine\Jasmine\Cards\Card;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasmineUser;

class WidgetAuthor extends Author
{
    protected $table = 'authors';

    /** @var array<string, Card> */
    public static array $widgets = [];

    public static function browseableColumns(): array {
        return ['name'];
    }

    public static function browseWidgets(): array {
        return static::$widgets;
    }
}

uses(RefreshDatabase::class);

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();

    // the pages live in the package, not in the test app's page paths
    config()->set('inertia.testing.ensure_pages_exist', false);

    Jasmine::registerBreadable(WidgetAuthor::class, false);

    WidgetAuthor::$widgets = [
        'count' => Card::vue('<template><div /></template>',
            fn(Request $request, BrowseContext $ctx) => ['count' => $ctx->query()->count(), 'q' => $ctx->search]
        )->width(6)->post('names', fn(Request $request, BrowseContext $ctx) => [
            'names'   => $ctx->query()->orderBy('name')->pluck('name'),
            'payload' => $request->input('hello'),
        ]),
    ];

    WidgetAuthor::query()->insert([['name' => 'Alice'], ['name' => 'Bob'], ['name' => 'Alfred']]);

    // the first user is the superuser
    $this->admin = JasmineUser::factory()->create();
    $this->actingAs($this->admin, config('jasmine.auth.guard'));
});

afterEach(fn() => WidgetAuthor::$widgets = []);

it('defers the widgets, resolving them against the filtered rows', function () {
    $this->get(route('jasmine.bread.index', ['breadable' => 'widget-authors', 'q' => 'al']))
        ->assertOk()
        ->assertInertia(fn(AssertableInertia $page) => $page
            ->component('BreadIndex')
            ->missing('widgets')
            ->loadDeferredProps(fn(AssertableInertia $reload) => $reload
                ->where('widgets.0.id', 'count')
                ->where('widgets.0.width', 6)
                ->where('widgets.0.props', ['count' => 2, 'q' => 'al'])
                ->where('widgets.0.actions.0.name', 'names')
                ->where('widgets.0.actions.0.url', route('jasmine.bread.widget.action', [
                    'breadable' => 'widget-authors', 'widget' => 'count', 'action' => 'names', 'q' => 'al',
                ]))
            )
        );
});

it('leaves the widgets prop out when the breadable has none', function () {
    WidgetAuthor::$widgets = [];

    $this->get(route('jasmine.bread.index', ['breadable' => 'widget-authors']))
        ->assertOk()
        ->assertInertia(fn(AssertableInertia $page) => $page
            ->missing('widgets')
            ->missing('deferredProps')
        );
});

it('runs a widget action against the browse state on its query string', function () {
    $url = route('jasmine.bread.widget.action', [
        'breadable' => 'widget-authors', 'widget' => 'count', 'action' => 'names', 'q' => 'al',
    ]);

    $this->postJson($url, ['hello' => 'world'])
        ->assertOk()
        ->assertExactJson(['names' => ['Alfred', 'Alice'], 'payload' => 'world']);
});

it('hides a widget the user lacks the permission for, and refuses its actions', function () {
    WidgetAuthor::$widgets['count']->permission('widgets.secret');

    $user = JasmineUser::factory()->create(['permissions' => ['models.widget-authors.browse']]);
    $this->actingAs($user, config('jasmine.auth.guard'));

    $this->get(route('jasmine.bread.index', ['breadable' => 'widget-authors']))
        ->assertOk()
        ->assertInertia(fn(AssertableInertia $page) => $page->missing('widgets'));

    $this->postJson(route('jasmine.bread.widget.action', ['widget-authors', 'count', 'names']))->assertForbidden();
});

it('refuses widget actions without the browse permission', function () {
    $user = JasmineUser::factory()->create(['permissions' => []]);
    $this->actingAs($user, config('jasmine.auth.guard'));

    $this->postJson(route('jasmine.bread.widget.action', ['widget-authors', 'count', 'names']))->assertForbidden();
});

it('404s an unknown widget or action, and 405s the wrong method', function () {
    $this->postJson(route('jasmine.bread.widget.action', ['widget-authors', 'nope', 'names']))->assertNotFound();
    $this->postJson(route('jasmine.bread.widget.action', ['widget-authors', 'count', 'nope']))->assertNotFound();
    $this->getJson(route('jasmine.bread.widget.action', ['widget-authors', 'count', 'names']))->assertStatus(405);
});

it('leaves out a widget that throws, keeping the others', function () {
    WidgetAuthor::$widgets['broken'] = Card::blade(fn() => throw new RuntimeException('boom'))->priority(1);

    $this->get(route('jasmine.bread.index', ['breadable' => 'widget-authors']))
        ->assertOk()
        ->assertInertia(fn(AssertableInertia $page) => $page
            ->loadDeferredProps(fn(AssertableInertia $reload) => $reload
                ->count('widgets', 1)
                ->where('widgets.0.id', 'count')
            )
        );
});
