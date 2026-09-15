<?php

use Illuminate\Database\Eloquent\Model;
use Jasmine\Jasmine\Bread\BreadableInterface;
use Jasmine\Jasmine\Bread\Fields\InputField;

// ---------------------------------------------------------------------------
// Construction & defaults
// ---------------------------------------------------------------------------

it('applies sensible defaults on construction', function () {
    $f = InputField::for('title');

    expect($f->getName())->toBe('title')
        ->and($f->getWidth())->toBe(12)
        ->and($f->getLabel())->toBe('title')
        ->and($f->getOptions())->toBe([])
        ->and($f->getValidation())->toBe([])
        ->and($f->getDescription())->toBeNull()
        ->and($f->getRepeats())->toBeFalse()
        ->and($f->getRepeaterWidth())->toBe(12)
        ->and($f->getDefault())->toBeNull()
        ->and($f->getClasses())->toBe('');
});

it('generates an auto id prefixed with jf', function () {
    $f = InputField::for('title');

    expect($f->getId())->toStartWith('jf')
        ->and(strlen($f->getId()))->toBe(6);
});

it('for() builds an instance of the called class', function () {
    expect(InputField::for('x'))->toBeInstanceOf(InputField::class);
});

// ---------------------------------------------------------------------------
// Fluent setters & getters
// ---------------------------------------------------------------------------

it('returns static from every setter', function () {
    $f = InputField::for('x');

    expect($f->setName('y'))->toBe($f)
        ->and($f->setWidth(6))->toBe($f)
        ->and($f->setOptions([]))->toBe($f)
        ->and($f->setValidation([]))->toBe($f)
        ->and($f->setLabel('L'))->toBe($f)
        ->and($f->setId('id'))->toBe($f)
        ->and($f->setDescription('d'))->toBe($f)
        ->and($f->setRepeats(true))->toBe($f)
        ->and($f->setRepeaterWidth(6))->toBe($f)
        ->and($f->setDefault('v'))->toBe($f)
        ->and($f->setClasses('c'))->toBe($f);
});

it('stores values through setters', function () {
    $f = InputField::for('x')
        ->setName('renamed')
        ->setWidth(8)
        ->setOptions(['a' => 1])
        ->setValidation(['required'])
        ->setLabel('Label')
        ->setDescription('Desc')
        ->setRepeats(3)
        ->setRepeaterWidth(4)
        ->setDefault('dv')
        ->setClasses('c1 c2');

    expect($f->getName())->toBe('renamed')
        ->and($f->getWidth())->toBe(8)
        ->and($f->getOptions())->toBe(['a' => 1])
        ->and($f->getValidation())->toBe(['required'])
        ->and($f->getLabel())->toBe('Label')
        ->and($f->getDescription())->toBe('Desc')
        ->and($f->getRepeats())->toBe(3)
        ->and($f->getRepeaterWidth())->toBe(4)
        ->and($f->getDefault())->toBe('dv')
        ->and($f->getClasses())->toBe('c1 c2');
});

it('accepts a null label and description', function () {
    $f = InputField::for('x')->setLabel(null)->setDescription(null);

    expect($f->getLabel())->toBeNull()
        ->and($f->getDescription())->toBeNull();
});

it('regenerates an auto id when set to empty or null', function () {
    $f = InputField::for('x')->setId('custom');
    expect($f->getId())->toBe('custom');

    $f->setId('');
    expect($f->getId())->toStartWith('jf');

    $f->setId(null);
    expect($f->getId())->toStartWith('jf');
});

it('is repeating when repeats is true or above 1', function () {
    expect(InputField::for('x')->isRepeating())->toBeFalse()
        ->and(InputField::for('x')->setRepeats(1)->isRepeating())->toBeFalse()
        ->and(InputField::for('x')->setRepeats(2)->isRepeating())->toBeTrue()
        ->and(InputField::for('x')->setRepeats(true)->isRepeating())->toBeTrue();
});

it('sets repeats width together with repeats', function () {
    $f = InputField::for('x')->setRepeats(2, 6);

    expect($f->getRepeats())->toBe(2)
        ->and($f->getRepeaterWidth())->toBe(6);
});

// ---------------------------------------------------------------------------
// Legacy width parsing
// ---------------------------------------------------------------------------

it('parses a bootstrap width token', function () {
    expect(InputField::parseLegacyWidth('col-md-6'))->toBe(['width' => 6, 'classes' => '']);
});

it('separates width from extra classes', function () {
    expect(InputField::parseLegacyWidth('col-lg-4 foo bar'))->toBe(['width' => 4, 'classes' => 'foo bar']);
});

it('returns a null width when there is no col token', function () {
    expect(InputField::parseLegacyWidth('foo bar'))->toBe(['width' => null, 'classes' => 'foo bar']);
});

it('handles an empty width string', function () {
    expect(InputField::parseLegacyWidth('   '))->toBe(['width' => null, 'classes' => '']);
});

it('finds a col token anywhere in the string', function () {
    expect(InputField::parseLegacyWidth('a col-xxl-3 b'))->toBe(['width' => 3, 'classes' => 'a b']);
});

it('parses a legacy width string passed to setWidth (deprecation suppressed)', function () {
    $f = InputField::for('x');

    set_error_handler(fn() => true, E_USER_DEPRECATED);
    $f->setWidth('col-md-8 highlight');
    restore_error_handler();

    expect($f->getWidth())->toBe(8)
        ->and($f->getClasses())->toBe('highlight');
});

// ---------------------------------------------------------------------------
// Serialization
// ---------------------------------------------------------------------------

it('serializes to the client array shape', function () {
    $array = InputField::for('title')->toArray();

    expect($array)->toMatchArray([
        'type'          => 'InputField',
        'component'     => 'input-field',
        'name'          => 'title',
        'width'         => 12,
        'validation'    => ['nullable'],
        'label'         => 'title',
        'description'   => null,
        'repeats'       => false,
        'repeaterWidth' => 12,
        'default'       => null,
        'classes'       => '',
    ])
        ->and($array['id'])->toStartWith('jf')
        ->and($array['options'])->toBeObject()
        ->and((array)$array['options'])->toBe([]);
});

it('defaults validation to nullable when none is set', function () {
    expect(InputField::for('x')->toArray()['validation'])->toBe(['nullable']);
});

it('keeps only string validation rules in the client payload', function () {
    $f = InputField::for('x')->setValidation(['required', new stdClass, 'max:255']);

    expect($f->toArray()['validation'])->toBe(['required', 'max:255']);
});

it('jsonSerialize matches toArray', function () {
    $f = InputField::for('x')->setOptions(['a' => 1]);

    expect($f->jsonSerialize())->toEqual($f->toArray());
});

// ---------------------------------------------------------------------------
// Value for edit formatting
// ---------------------------------------------------------------------------

function makeBreadableModel(): Model&BreadableInterface {
    return Mockery::mock(Model::class . ', ' . BreadableInterface::class);
}

it('returns the value untouched without a formatter', function () {
    expect(InputField::for('x')->formatValueForEdit('raw', makeBreadableModel()))->toBe('raw');
});

it('applies the formatter with the value and model', function () {
    $model = makeBreadableModel();
    $f = InputField::for('x')->setValueForEditFormatter(fn($v, $m) => [$v, $m]);

    expect($f->formatValueForEdit('raw', $model))->toBe(['raw', $model]);
});

it('accepts the formatter through for()', function () {
    $f = InputField::for('x', valueForEditFormatter: fn($v) => strtoupper($v));

    expect($f->getValueForEditFormatter())->toBeInstanceOf(Closure::class)
        ->and($f->formatValueForEdit('abc', makeBreadableModel()))->toBe('ABC');
});

it('does not leak the formatter into the client payload', function () {
    expect(InputField::for('x')->setValueForEditFormatter(fn($v) => $v)->toArray())
        ->not->toHaveKey('valueForEditFormatter');
});
