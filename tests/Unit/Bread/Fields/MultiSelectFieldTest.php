<?php

use Jasmine\Jasmine\Bread\Fields\MultiSelectField;

it('uses the multi-select-field component', function () {
    expect(MultiSelectField::for('m')->toArray()['component'])->toBe('multi-select-field');
});

it('coerces a null default to an array in multiple mode', function () {
    expect(MultiSelectField::for('m')->setOptions(['mode' => 'multiple'])->toArray()['default'])->toBe([]);
});

it('coerces a null default to an array in tags mode', function () {
    expect(MultiSelectField::for('m')->setOptions(['mode' => 'tags'])->toArray()['default'])->toBe([]);
});

it('leaves the default null in single mode', function () {
    expect(MultiSelectField::for('m')->setOptions(['mode' => 'single'])->toArray()['default'])->toBeNull();
});

it('leaves the default null when no mode is given', function () {
    expect(MultiSelectField::for('m')->toArray()['default'])->toBeNull();
});

it('keeps an array default untouched', function () {
    $f = MultiSelectField::for('m')->setOptions(['mode' => 'multiple'])->setDefault(['a']);

    expect($f->toArray()['default'])->toBe(['a']);
});
