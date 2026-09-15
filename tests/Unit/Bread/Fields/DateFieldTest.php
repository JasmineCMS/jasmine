<?php

use Illuminate\Database\Eloquent\Model;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\DateField;

it('uses the input-field component', function () {
    expect(DateField::for('d')->toArray()['component'])->toBe('input-field');
});

it('injects a date type into its options', function () {
    expect((array)DateField::for('d')->toArray()['options'])->toMatchArray(['type' => 'date']);
});

// ---------------------------------------------------------------------------
// Value for edit formatting
// ---------------------------------------------------------------------------

beforeEach(function () {
    $this->model = Mockery::mock(Model::class . ', ' . BreadableInterface::class);
    $this->tz = date_default_timezone_get();
});

afterEach(function () {
    date_default_timezone_set($this->tz);
});

it('formats a serialized datetime to Y-m-d by default', function () {
    expect(DateField::for('d')->formatValueForEdit('2024-05-01T13:45:10.000000Z', $this->model))->toBe('2024-05-01');
});

it('formats datetime-local to minute precision', function () {
    $f = DateField::for('d')->setOptions(['type' => 'datetime-local']);

    expect($f->formatValueForEdit('2024-05-01 13:45:10', $this->model))->toBe('2024-05-01T13:45');
});

it('converts to the app timezone', function () {
    date_default_timezone_set('Asia/Jerusalem');
    $f = DateField::for('d')->setOptions(['type' => 'datetime-local']);

    expect($f->formatValueForEdit('2024-05-01T21:30:00.000000Z', $this->model))->toBe('2024-05-02T00:30');
});

it('leaves unparsable values alone', function () {
    expect(DateField::for('d')->formatValueForEdit('not a date', $this->model))->toBe('not a date');
});

it('leaves null and empty values alone instead of parsing them as now', function () {
    $f = DateField::for('d');

    expect($f->formatValueForEdit(null, $this->model))->toBeNull()
        ->and($f->formatValueForEdit('', $this->model))->toBe('');
});

it('formats each item of a repeating date', function () {
    $f = DateField::for('d')->setRepeats(true);

    expect($f->formatValueForEdit(['2024-05-01T10:00:00Z', null, '2024-06-01 08:00:00'], $this->model))
        ->toBe(['2024-05-01', null, '2024-06-01']);
});

it('lets a custom formatter replace the default', function () {
    $f = DateField::for('d')->setValueForEditFormatter(fn($v) => "custom:$v");

    expect($f->formatValueForEdit('01/05/2024', $this->model))->toBe('custom:01/05/2024');
});
