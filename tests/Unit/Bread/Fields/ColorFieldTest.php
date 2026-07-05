<?php

use Jasmine\Jasmine\Bread\Fields\ColorField;

it('uses the input-field component', function () {
    expect(ColorField::for('c')->toArray()['component'])->toBe('input-field');
});

it('injects a color type into its options', function () {
    expect((array)ColorField::for('c')->toArray()['options'])->toMatchArray(['type' => 'color']);
});

it('merges user options alongside the color type', function () {
    $options = (array)ColorField::for('c')->setOptions(['presetColors' => ['#fff']])->toArray()['options'];

    expect($options)->toMatchArray(['type' => 'color', 'presetColors' => ['#fff']]);
});
