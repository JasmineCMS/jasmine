<?php

use App\Models\Article;
use App\Models\Author;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia;
use Jasmine\Jasmine\Bread\Manifest\Column;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Models\JasmineUser;

class ExportAuthor extends Author
{
    protected $table = 'authors';

    public function articles(): HasMany {
        return $this->hasMany(Article::class, 'author_id');
    }

    public static function browseableColumns(): array {
        return [
            'name',
            'articles_count',
            Column::for('bio', sortable: false, searchable: false, render: fn($v, $m) => "<b>{$m->name}</b> &amp; co", html: true),
        ];
    }

    public static function browseableTimestamps(): array {
        return [];
    }
}

uses(RefreshDatabase::class);

beforeEach(function () {
    $this->withoutVite();
    config()->set('inertia.testing.ensure_pages_exist', false);

    Jasmine::registerBreadable(ExportAuthor::class, false);

    // the first user is the superuser
    $this->admin = JasmineUser::factory()->create();
    $this->actingAs($this->admin, config('jasmine.auth.guard'));
});

/**
 * @return list<list<string>>
 */
function exportRows(array $query = []): array {
    $res = test()->get(route('jasmine.bread.export', ['breadable' => 'export-authors', ...$query]));
    $res->assertOk()->assertHeader('content-type', 'text/csv; charset=UTF-8');

    $csv = $res->streamedContent();
    expect(str_starts_with($csv, "\xEF\xBB\xBF"))->toBeTrue();

    $fh = fopen('php://memory', 'r+');
    fwrite($fh, substr($csv, 3));
    rewind($fh);
    $rows = [];
    while (($r = fgetcsv($fh, escape: '')) !== false) $rows[] = $r;

    return $rows;
}

it('registers an export permission per breadable', function () {
    expect(Jasmine::getPermissions())->toHaveKey('models.export-authors.export');
});

it('exports every row, not just a page of them, with labelled headers', function () {
    $authors = Author::factory()->count(12)->create();
    Article::factory()->count(2)->for($authors[0])->create();

    $rows = exportRows();

    expect($rows[0])->toBe(['Id', 'Name', 'Articles Count', 'Bio'])
        ->and($rows)->toHaveCount(13)
        ->and($rows[1])->toBe([(string)$authors[0]->id, $authors[0]->name, '2', "{$authors[0]->name} & co"]);
});

it('follows the browse search and sorting', function () {
    Author::factory()->create(['name' => 'Charlie']);
    Author::factory()->create(['name' => 'Alice']);
    Author::factory()->create(['name' => 'Bob']);

    expect(array_column(array_slice(exportRows(['sortBy' => 'name', 'sort' => 'desc']), 1), 1))
        ->toBe(['Charlie', 'Bob', 'Alice'])
        ->and(array_column(array_slice(exportRows(['q' => 'li']), 1), 1))
        ->toBe(['Charlie', 'Alice']);
});

it('defuses cells a spreadsheet would run as formulas', function () {
    Author::factory()->create(['name' => '=HYPERLINK("x")']);

    expect(exportRows()[1][1])->toBe("'=HYPERLINK(\"x\")");
});

it('needs the export permission', function () {
    $user = JasmineUser::factory()->create(['permissions' => ['models.export-authors.browse']]);
    $this->actingAs($user, config('jasmine.auth.guard'));

    $this->get(route('jasmine.bread.export', ['breadable' => 'export-authors']))->assertForbidden();

    $this->get(route('jasmine.bread.index', ['breadable' => 'export-authors']))
        ->assertOk()
        ->assertInertia(fn(AssertableInertia $page) => $page->where('can', ['b']));

    $user->update(['permissions' => ['models.export-authors.browse', 'models.export-authors.export']]);

    $this->get(route('jasmine.bread.export', ['breadable' => 'export-authors']))->assertOk();
});

it('resolves labels like the client does', function () {
    expect(Jasmine::label('articles_count', 'authors', 'columns'))->toBe('Articles Count')
        ->and(Jasmine::label('leadTarget'))->toBe('Lead Target')
        ->and(Jasmine::label('Written out. Text'))->toBe('Written out. Text');

    app()->setLocale('he');

    // laravel/lang/vendor/jasmine/manifest/he.json translates "title"
    expect(Jasmine::label('title', 'articles', 'columns'))->toBe('כותרת')
        ->and(Jasmine::label('author.title', 'articles', 'columns'))->toBe('כותרת');
});
