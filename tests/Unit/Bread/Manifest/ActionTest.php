<?php

use Jasmine\Jasmine\Bread\Manifest\Action;

it('for() builds an Action', function () {
    expect(Action::for('delete'))->toBeInstanceOf(Action::class);
});

it('defaults the label to the name', function () {
    expect(Action::for('delete')->label)->toBe('delete');
});

it('serializes a minimal action, dropping null fields', function () {
    expect(Action::for('delete')->toArray())->toBe([
        'name'   => 'delete',
        'target' => '_self',
        'label'  => 'delete',
        'method' => 'GET',
        'bulk'   => false,
    ]);
});

it('includes optional fields when set', function () {
    $array = Action::for('edit', icon: 'pencil', url: '/edit', classes: 'btn', method: 'POST')->toArray();

    expect($array)->toMatchArray([
        'name'    => 'edit',
        'icon'    => 'pencil',
        'url'     => '/edit',
        'classes' => 'btn',
        'method'  => 'POST',
    ]);
});

it('stores a permission but never serializes it', function () {
    $action = Action::for('delete', permission: 'models.article.delete');

    expect($action->permission)->toBe('models.article.delete')
        ->and($action->toArray())->not->toHaveKey('permission');
});

it('serializes a confirm payload when present', function () {
    $confirm = ['title' => ['en' => 'Are you sure?']];

    expect(Action::for('delete', confirm: $confirm)->toArray()['confirm'])->toBe($confirm);
});

it('returns static and mutates through setters', function () {
    $action = Action::for('x');

    expect($action->setName('y'))->toBe($action)
        ->and($action->setIcon('i'))->toBe($action)
        ->and($action->setUrl('/u'))->toBe($action)
        ->and($action->setTarget('_blank'))->toBe($action)
        ->and($action->setPermission('p'))->toBe($action)
        ->and($action->setConfirm(['a' => ['b']]))->toBe($action)
        ->and($action->setClasses('c'))->toBe($action)
        ->and($action->setMethod('PUT'))->toBe($action)
        ->and($action->setBulk(true))->toBe($action);

    expect($action->name)->toBe('y')
        ->and($action->icon)->toBe('i')
        ->and($action->url)->toBe('/u')
        ->and($action->target)->toBe('_blank')
        ->and($action->permission)->toBe('p')
        ->and($action->confirm)->toBe(['a' => ['b']])
        ->and($action->classes)->toBe('c')
        ->and($action->method)->toBe('PUT')
        ->and($action->bulk)->toBeTrue();
});

it('jsonSerialize matches toArray', function () {
    $action = Action::for('edit', icon: 'pencil');

    expect($action->jsonSerialize())->toBe($action->toArray());
});
