<?php

use App\Models\Author;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasmineUser;

class PerPageAuthor extends Author
{
    protected $table = 'authors';

    /** @var list<int>|null null keeps the trait's default */
    public static ?array $options = null;

    public static function browseableColumns(): array {
        return ['name'];
    }

    public static function browsePerPageOptions(): array {
        return static::$options ?? parent::browsePerPageOptions();
    }
}

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->withoutVite();
    config()->set('inertia.testing.ensure_pages_exist', false);

    Jasmine::registerBreadable(PerPageAuthor::class, false);

    // the first user is the superuser
    $this->actingAs(JasmineUser::factory()->create(), config('jasmine.auth.guard'));

    Author::factory()->count(30)->create();
});

afterEach(fn() => PerPageAuthor::$options = null);

function browsePage(array $query = []): array {
    $props = [];

    test()->get(route('jasmine.bread.index', ['breadable' => 'per-page-authors', ...$query]))
        ->assertOk()
        ->assertInertia(function (AssertableInertia $page) use (&$props) {
            $props = $page->toArray()['props'];
        });

    return [$props['breadable']['perPage'], $props['paginator']['per_page']];
}

it('offers the default page sizes', function () {
    expect(browsePage())->toBe([[10, 25, 50, 100], 10]);
});

it('offers the breadable page sizes, the first being the default', function () {
    PerPageAuthor::$options = [20, 5, 200];

    expect(browsePage())->toBe([[20, 5, 200], 20])
        ->and(browsePage(['perPage' => 200])[1])->toBe(200)
        ->and(browsePage(['perPage' => 5])[1])->toBe(5);
});

it('falls back to the default for a size the breadable does not offer', function () {
    PerPageAuthor::$options = [20, 40];

    expect(browsePage(['perPage' => 10])[1])->toBe(20);
});

it('rejects a size above the largest one offered', function () {
    PerPageAuthor::$options = [20, 40];

    $this->getJson(route('jasmine.bread.index', ['breadable' => 'per-page-authors', 'perPage' => 41]))
        ->assertUnprocessable()
        ->assertJsonValidationErrors('perPage');

    // the default sizes cap it at 100, as before
    PerPageAuthor::$options = null;

    $this->getJson(route('jasmine.bread.index', ['breadable' => 'per-page-authors', 'perPage' => 101]))
        ->assertUnprocessable();
});

it('drops invalid and duplicate sizes, and keeps the defaults when none is left', function () {
    PerPageAuthor::$options = [0, 15, -3, 15, 30];
    expect(browsePage()[0])->toBe([15, 30]);

    PerPageAuthor::$options = [];
    expect(browsePage()[0])->toBe([10, 25, 50, 100]);
});
