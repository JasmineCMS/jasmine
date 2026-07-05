<?php

use Jasmine\Jasmine\Bread\Fields\CodeField;
use Jasmine\Jasmine\Bread\Fields\InputField;
use Jasmine\Jasmine\Bread\Fields\JsonField;
use Jasmine\Jasmine\Bread\Fields\SelectField;
use Jasmine\Jasmine\Bread\Fields\TextareaField;
use Jasmine\Jasmine\Bread\Fields\WysiwygField;

dataset('simple fields', [
    'input'    => [InputField::class, 'input-field'],
    'textarea' => [TextareaField::class, 'textarea-field'],
    'code'     => [CodeField::class, 'code-field'],
    'wysiwyg'  => [WysiwygField::class, 'wysiwyg-field'],
    'select'   => [SelectField::class, 'select-field'],
    'json'     => [JsonField::class, 'json-field'],
]);

it('reports its component', function (string $class, string $component) {
    expect($class::for('x')->toArray()['component'])->toBe($component);
})->with('simple fields');

it('reports its type as the class basename', function (string $class) {
    expect($class::for('x')->toArray()['type'])->toBe(class_basename($class));
})->with('simple fields');

it('passes options straight through to the client', function (string $class) {
    $f = $class::for('x')->setOptions(['placeholder' => 'hi']);

    expect((array)$f->toArray()['options'])->toBe(['placeholder' => 'hi']);
})->with('simple fields');
