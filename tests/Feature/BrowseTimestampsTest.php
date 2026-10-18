<?php

use App\Models\Author;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasmineUser;

class TimestampsAuthor extends Author
{
    protected $table = 'authors';

    /** @var list<string>|null null keeps the trait's default */
    public static ?array $browseTimestamps = null;

    /** @var list<string> */
    public static array $columns = ['name'];

    public static function browseableColumns(): array {
        return static::$columns;
    }

    public static function browseableTimestamps(): array {
        return static::$browseTimestamps ?? parent::browseableTimestamps();
    }
}

class UntimedAuthor extends Author
{
    protected $table = 'authors';

    public $timestamps = false;

    public static function browseableColumns(): array {
        return ['name'];
    }
}

uses(RefreshDatabase::class);

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();

    // the pages live in the package, not in the test app's page paths
    config()->set('inertia.testing.ensure_pages_exist', false);

    Jasmine::registerBreadable(TimestampsAuthor::class, false);

    // the first user is the superuser
    $this->admin = JasmineUser::factory()->create();
    $this->actingAs($this->admin, config('jasmine.auth.guard'));
});

afterEach(function () {
    TimestampsAuthor::$browseTimestamps = null;
    TimestampsAuthor::$columns = ['name'];
});

function browseColumnNames(string $breadable): array {
    $columns = [];

    test()->get(route('jasmine.bread.index', ['breadable' => $breadable]))
        ->assertOk()
        ->assertInertia(function (AssertableInertia $page) use (&$columns) {
            $columns = array_column($page->toArray()['props']['breadable']['columns'], 'data');
        });

    return $columns;
}

it('defaults to the model timestamp columns', function () {
    expect(TimestampsAuthor::browseableTimestamps())->toBe(['updated_at', 'created_at'])
        ->and(UntimedAuthor::browseableTimestamps())->toBe([]);
});

it('appends the default timestamps to the browse columns', function () {
    expect(browseColumnNames('timestamps-authors'))->toBe(['id', 'name', 'updated_at', 'created_at']);
});

it('leaves the timestamps out when overridden to none', function () {
    TimestampsAuthor::$browseTimestamps = [];

    expect(browseColumnNames('timestamps-authors'))->toBe(['id', 'name']);
});

it('appends only the timestamps the override returns', function () {
    TimestampsAuthor::$browseTimestamps = ['created_at'];

    expect(browseColumnNames('timestamps-authors'))->toBe(['id', 'name', 'created_at']);
});

it('does not duplicate a timestamp the app columns already list', function () {
    TimestampsAuthor::$columns = ['name', 'created_at'];

    expect(browseColumnNames('timestamps-authors'))->toBe(['id', 'name', 'created_at', 'updated_at']);
});
