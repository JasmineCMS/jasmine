<?php

use Jasmine\Jasmine\Bread\Fields\InputField;
use Jasmine\Jasmine\Bread\Manifest\Section;

it('constructs with valid GridItem children', function () {
    $field = InputField::for('a');
    $section = new Section(6, 'Details', [$field]);

    expect($section->getWidth())->toBe(6)
        ->and($section->getTitle())->toBe('Details')
        ->and($section->getItems())->toBe([$field])
        ->and($section->getClasses())->toBe('')
        ->and($section->getId())->toStartWith('js')
        ->and(strlen($section->getId()))->toBe(6);
});

it('rejects a non-GridItem child', function () {
    expect(fn() => new Section(12, 'X', [new stdClass]))
        ->toThrow(InvalidArgumentException::class);
});

it('reports the offending index in the error', function () {
    expect(fn() => new Section(12, 'X', [InputField::for('ok'), new stdClass]))
        ->toThrow(InvalidArgumentException::class, 'index 1');
});

it('returns static and mutates through setters', function () {
    $section = new Section(12, 'X', []);
    $field = InputField::for('a');

    expect($section->setWidth(4))->toBe($section)
        ->and($section->setTitle('New'))->toBe($section)
        ->and($section->setItems([$field]))->toBe($section)
        ->and($section->setClasses('p-4'))->toBe($section);

    expect($section->getWidth())->toBe(4)
        ->and($section->getTitle())->toBe('New')
        ->and($section->getItems())->toBe([$field])
        ->and($section->getClasses())->toBe('p-4');
});

it('revalidates items on setItems', function () {
    $section = new Section(12, 'X', []);

    expect(fn() => $section->setItems([new stdClass]))
        ->toThrow(InvalidArgumentException::class);
});

it('regenerates an auto id when set to empty', function () {
    $section = new Section(12, 'X', [], id: 'custom');
    expect($section->getId())->toBe('custom');

    $section->setId('');
    expect($section->getId())->toStartWith('js');
});

it('serializes its items recursively', function () {
    $section = new Section(8, 'Details', [InputField::for('a')], 'p-2');
    $array = $section->toArray();

    expect($array)->toMatchArray([
        'width'   => 8,
        'title'   => 'Details',
        'classes' => 'p-2',
    ])
        ->and($array['id'])->toStartWith('js')
        ->and($array['items'])->toHaveCount(1)
        ->and($array['items'][0])->toMatchArray(['name' => 'a', 'component' => 'input-field']);
});
