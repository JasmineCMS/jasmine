<?php

use Jasmine\Jasmine\Bread\Fields\DateField;

it('uses the input-field component', function () {
    expect(DateField::for('d')->toArray()['component'])->toBe('input-field');
});

it('injects a date type into its options', function () {
    expect((array)DateField::for('d')->toArray()['options'])->toMatchArray(['type' => 'date']);
});
