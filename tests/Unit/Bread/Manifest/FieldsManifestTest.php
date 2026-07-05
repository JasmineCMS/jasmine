<?php

use Jasmine\Jasmine\Bread\Fields\InputField;
use Jasmine\Jasmine\Bread\Manifest\FieldsManifest;
use Jasmine\Jasmine\Bread\Manifest\Section;

it('accepts a flat list of fields', function () {
    $a = InputField::for('a');
    $b = InputField::for('b');
    $manifest = new FieldsManifest([$a, $b]);

    expect($manifest->getItems())->toBe([$a, $b])
        ->and($manifest->getFields())->toBe([$a, $b]);
});

it('serializes each item', function () {
    $manifest = new FieldsManifest([InputField::for('a'), InputField::for('b')]);

    expect($manifest->toArray())->toHaveCount(2)
        ->and($manifest->toArray()[0])->toMatchArray(['name' => 'a']);
});

it('extracts fields out of sections', function () {
    $inner = InputField::for('inner');
    $manifest = new FieldsManifest([new Section(12, 'S', [$inner])]);

    expect($manifest->getItems())->toHaveCount(1)
        ->and($manifest->getItems()[0])->toBeInstanceOf(Section::class)
        ->and($manifest->getFields())->toBe([$inner]);
});

it('flattens fields from a mix of top-level fields and sections', function () {
    $top = InputField::for('top');
    $inner = InputField::for('inner');
    $manifest = new FieldsManifest([$top, new Section(12, 'S', [$inner])]);

    expect($manifest->getFields())->toBe([$top, $inner]);
});

// ---------------------------------------------------------------------------
// Legacy keyed format
// ---------------------------------------------------------------------------

it('expands the legacy keyed format into sections', function () {
    $field = InputField::for('a');
    $manifest = new FieldsManifest(['col-md-6 myclass' => ['My Title' => [$field]]]);

    $items = $manifest->getItems();

    expect($items)->toHaveCount(1)
        ->and($items[0])->toBeInstanceOf(Section::class)
        ->and($items[0]->getWidth())->toBe(6)
        ->and($items[0]->getTitle())->toBe('My Title')
        ->and($items[0]->getClasses())->toBe('myclass')
        ->and($manifest->getFields())->toBe([$field]);
});

it('defaults legacy width to 12 when no col token matches', function () {
    $manifest = new FieldsManifest(['weird-key' => ['Title' => [InputField::for('a')]]]);

    expect($manifest->getItems()[0]->getWidth())->toBe(12);
});

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

it('rejects a non-GridItem item', function () {
    expect(fn() => new FieldsManifest([new stdClass]))
        ->toThrow(InvalidArgumentException::class);
});

it('returns static and revalidates on setItems', function () {
    $manifest = new FieldsManifest([InputField::for('a')]);
    $b = InputField::for('b');

    expect($manifest->setItems([$b]))->toBe($manifest)
        ->and($manifest->getItems())->toBe([$b]);

    expect(fn() => $manifest->setItems([new stdClass]))
        ->toThrow(InvalidArgumentException::class);
});
