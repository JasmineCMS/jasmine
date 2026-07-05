<?php

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
