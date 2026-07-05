<?php

use Jasmine\Jasmine\Bread\Fields\ImageField;

it('uses the image-field component', function () {
    expect(ImageField::for('i')->setDisk('public')->toArray()['component'])->toBe('image-field');
});

it('is not flexible by default', function () {
    expect(ImageField::for('i')->isFlexible())->toBeFalse();
});

it('can be made flexible and back again', function () {
    expect(ImageField::for('i')->flexible()->isFlexible())->toBeTrue()
        ->and(ImageField::for('i')->flexible(false)->isFlexible())->toBeFalse();
});

it('exposes disk and flexible through its options', function () {
    $options = (array)ImageField::for('i')->setDisk('public')->flexible()->toArray()['options'];

    expect($options)->toMatchArray(['disk' => 'public', 'flexible' => true]);
});

it('derives a description from width and height when none is given', function () {
    $array = ImageField::for('i')->setDisk('public')->setOptions(['w' => 120, 'h' => 80])->toArray();

    expect($array['description'])->toBe('120x80');
});

it('keeps an explicit description over the derived one', function () {
    $array = ImageField::for('i')->setDisk('public')
        ->setOptions(['w' => 120, 'h' => 80])
        ->setDescription('My image')
        ->toArray();

    expect($array['description'])->toBe('My image');
});

it('fills an empty default with an image placeholder', function () {
    expect(ImageField::for('i')->setDisk('public')->toArray()['default'])->toBe([
        'src' => null,
        'alt' => null,
        'w'   => null,
        'h'   => null,
    ]);
});
