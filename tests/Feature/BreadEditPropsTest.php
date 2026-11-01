<?php

use App\Models\Author;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Testing\TestResponse;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\InputField;
use Jasmine\Jasmine\Bread\Manifest\FieldsManifest;
use Jasmine\Jasmine\Bread\Manifest\Section;
use Jasmine\Jasmine\Facades\Jasmine;
use Jasmine\Jasmine\Http\Middleware\HandleInertiaRequests;
use Jasmine\Jasmine\Models\JasmineUser;

class EditPropsAuthor extends Author
{
    protected $table = 'authors';

    public static function fieldsManifest(Model&BreadableInterface $ent): FieldsManifest {
        $sections = [new Section(6, 'service', [InputField::for('name')])];

        // depends on the record, the way a saved record reveals more of its form
        if ($ent->exists) $sections[] = new Section(6, 'connection', [InputField::for('bio')]);

        // depends on the query string, so it can change on the same record
        if (request()->has('renewing')) $sections[] = new Section(6, 'term', [InputField::for('term')]);

        return new FieldsManifest($sections);
    }
}

/**
 * An Inertia visit from a page that already holds these once props, as the redirect after a save is.
 */
function visitWithOnceProps(string $url, array $keys): TestResponse {
    return test()->withHeaders([
        'X-Inertia'                   => 'true',
        'X-Inertia-Version'           => (string)app(HandleInertiaRequests::class)->version(request()),
        'X-Inertia-Except-Once-Props' => implode(',', $keys),
    ])->get($url)->assertOk();
}

function sectionTitles(TestResponse $response): array {
    return collect($response->json('props.breadable.manifest'))->pluck('title')->all();
}

uses(RefreshDatabase::class);

beforeEach(function () {
    // the root view runs Jasmine::vite(), which needs a real manifest we don't build here
    $this->withoutVite();

    // the pages live in the package, not in the test app's page paths
    config()->set('inertia.testing.ensure_pages_exist', false);

    Jasmine::registerBreadable(EditPropsAuthor::class, false);

    // the first user is the superuser
    $this->actingAs(JasmineUser::factory()->create(), config('jasmine.auth.guard'));

    $this->author = EditPropsAuthor::query()->create(['name' => 'Alice']);
    $this->onceKeys = [
        'breadable.edit.edit-props-authors.',
        'breadable.locales.edit-props-authors',
        'breadable.can.edit-props-authors',
    ];
});

it('sends the edit form to a page that already holds the create form', function () {
    $response = visitWithOnceProps(route('jasmine.bread.edit', [
        'breadable' => 'edit-props-authors', 'breadableId' => $this->author->getKey(),
    ]), $this->onceKeys);

    expect(sectionTitles($response))->toBe(['service', 'connection']);
});

it('sends the create form to a page that already holds an edit form', function () {
    $response = visitWithOnceProps(route('jasmine.bread.create', [
        'breadable' => 'edit-props-authors',
    ]), $this->onceKeys);

    expect(sectionTitles($response))->toBe(['service']);
});

it('follows the query string on the same record', function () {
    $response = visitWithOnceProps(route('jasmine.bread.edit', [
        'breadable' => 'edit-props-authors', 'breadableId' => $this->author->getKey(), 'renewing' => 1,
    ]), $this->onceKeys);

    expect(sectionTitles($response))->toBe(['service', 'connection', 'term']);
});

it('still leaves the locales and permissions to the page that holds them', function () {
    $response = visitWithOnceProps(route('jasmine.bread.edit', [
        'breadable' => 'edit-props-authors', 'breadableId' => $this->author->getKey(),
    ]), $this->onceKeys);

    expect($response->json('props'))->not->toHaveKeys(['locales', 'can']);
});
