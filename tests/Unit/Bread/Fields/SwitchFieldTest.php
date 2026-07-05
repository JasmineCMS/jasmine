<?php

use Jasmine\Jasmine\Bread\Fields\SwitchField;

it('uses the switch-field component', function () {
    expect(SwitchField::for('active')->toArray()['component'])->toBe('switch-field');
});

it('serializes an unset default to false', function () {
    expect(SwitchField::for('active')->getDefault())->toBeNull()
        ->and(SwitchField::for('active')->toArray()['default'])->toBeFalse();
});

it('serializes an explicit true default', function () {
    expect(SwitchField::for('active')->setDefault(true)->toArray()['default'])->toBeTrue();
});

it('serializes an explicit false default', function () {
    expect(SwitchField::for('active')->setDefault(false)->toArray()['default'])->toBeFalse();
});
