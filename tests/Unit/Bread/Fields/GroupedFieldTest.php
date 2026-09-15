<?php

use Illuminate\Database\Eloquent\Model;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\DateField;
use Jasmine\Jasmine\Bread\Fields\GroupedField;
use Jasmine\Jasmine\Bread\Fields\InputField;

it('uses the grouped-field component', function () {
    expect(GroupedField::for('g')->toArray()['component'])->toBe('grouped-field');
});

it('stores and returns its child fields', function () {
    $children = [InputField::for('a'), InputField::for('b')];

    expect(GroupedField::for('g')->setFields($children)->getFields())->toBe($children);
});

it('computes its default from child field defaults', function () {
    $g = GroupedField::for('g')->setFields([
        InputField::for('a')->setDefault('x'),
        InputField::for('b'),
    ]);

    expect($g->getDefault())->toBe(['a' => 'x', 'b' => null]);
});

it('uses an empty array for repeating child fields', function () {
    $g = GroupedField::for('g')->setFields([
        InputField::for('rep')->setRepeats(true),
        InputField::for('plain')->setDefault('v'),
    ]);

    expect($g->getDefault())->toBe(['rep' => [], 'plain' => 'v']);
});

it('refuses setDefault', function () {
    expect(fn() => GroupedField::for('g')->setDefault('nope'))
        ->toThrow(LogicException::class);
});

it('serializes child fields into its options', function () {
    $options = (array)GroupedField::for('g')->setFields([InputField::for('a')])->toArray()['options'];

    expect($options)->toHaveKey('fields')
        ->and($options['fields'])->toHaveCount(1)
        ->and($options['fields'][0])->toMatchArray(['name' => 'a', 'component' => 'input-field']);
});

// ---------------------------------------------------------------------------
// Value for edit formatting
// ---------------------------------------------------------------------------

it('lets each child format its own value, leaving nulls and unknown keys alone', function () {
    $model = Mockery::mock(Model::class . ', ' . BreadableInterface::class);
    $g = GroupedField::for('g')->setFields([
        DateField::for('d'),
        DateField::for('empty'),
        DateField::for('dates')->setRepeats(true),
        InputField::for('title')->setValueForEditFormatter(fn($v) => strtoupper($v)),
    ]);

    $value = ['d' => '2024-05-01T10:00:00Z', 'empty' => null, 'dates' => ['2024-06-01T10:00:00Z'], 'title' => 'hi', 'x' => 1];

    expect($g->formatValueForEdit($value, $model))
        ->toBe(['d' => '2024-05-01', 'empty' => null, 'dates' => ['2024-06-01'], 'title' => 'HI', 'x' => 1]);
});

it('formats every item of a repeating group', function () {
    $model = Mockery::mock(Model::class . ', ' . BreadableInterface::class);
    $g = GroupedField::for('g')->setRepeats(true)->setFields([DateField::for('d')]);

    expect($g->formatValueForEdit([['d' => '2024-05-01T10:00:00Z'], ['d' => null], null], $model))
        ->toBe([['d' => '2024-05-01'], ['d' => null], null]);
});

it('formats nested groups', function () {
    $model = Mockery::mock(Model::class . ', ' . BreadableInterface::class);
    $g = GroupedField::for('outer')->setFields([
        GroupedField::for('inner')->setFields([DateField::for('d')]),
    ]);

    expect($g->formatValueForEdit(['inner' => ['d' => '2024-05-01T10:00:00Z']], $model))
        ->toBe(['inner' => ['d' => '2024-05-01']]);
});

it('lets a custom formatter replace the children formatting', function () {
    $model = Mockery::mock(Model::class . ', ' . BreadableInterface::class);
    $g = GroupedField::for('g')
        ->setFields([DateField::for('d')])
        ->setValueForEditFormatter(fn($v) => ['custom' => $v['d']]);

    expect($g->formatValueForEdit(['d' => '2024-05-01T10:00:00Z'], $model))->toBe(['custom' => '2024-05-01T10:00:00Z']);
});
