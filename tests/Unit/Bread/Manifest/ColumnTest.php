<?php

use Jasmine\Jasmine\Bread\Manifest\Column;

it('for() builds a Column', function () {
    expect(Column::for('title'))->toBeInstanceOf(Column::class);
});

it('applies defaults', function () {
    $c = Column::for('title');

    expect($c->data)->toBe('title')
        ->and($c->label)->toBe('title')          // label defaults to data
        ->and($c->sortable)->toBeTrue()
        ->and($c->searchable)->toBeTrue()
        ->and($c->filtering)->toBeNull()
        ->and($c->html)->toBeFalse();
});

it('serializes, dropping null filtering and excluding closures', function () {
    expect(Column::for('title')->toArray())->toBe([
        'data'       => 'title',
        'label'      => 'title',
        'sortable'   => true,
        'searchable' => true,
        'html'       => false,
    ]);
});

it('keeps an empty-array filtering in the output', function () {
    expect(Column::for('title')->filterable([])->toArray())->toMatchArray(['filtering' => []]);
});

it('filters by a string mode', function () {
    expect(Column::for('created_at')->filterable('date')->toArray()['filtering'])->toBe('date');
});

// ---------------------------------------------------------------------------
// Fluent mutators
// ---------------------------------------------------------------------------

it('label(null) falls back to a columns translation key', function () {
    expect(Column::for('title')->label(null)->label)->toBe('columns.title');
});

it('label() sets a custom label', function () {
    expect(Column::for('title')->label('Custom')->label)->toBe('Custom');
});

it('toggles sortable, searchable and html fluently', function () {
    $c = Column::for('title');

    expect($c->sortable(false))->toBe($c)
        ->and($c->searchable(false))->toBe($c)
        ->and($c->html(true))->toBe($c);

    expect($c->sortable)->toBeFalse()
        ->and($c->searchable)->toBeFalse()
        ->and($c->html)->toBeTrue();
});

it('render() stores the closure and can flip html', function () {
    $fn = fn($row) => $row;
    $c = Column::for('title')->render($fn, true);

    expect($c->render)->toBe($fn)
        ->and($c->html)->toBeTrue();
});

it('render() leaves html untouched when the flag is omitted', function () {
    $c = Column::for('title')->html(true)->render(fn() => null);

    expect($c->html)->toBeTrue();
});

it('data() updates the data key', function () {
    expect(Column::for('old')->data('new')->data)->toBe('new');
});

// ---------------------------------------------------------------------------
// Relations & aggregates
// ---------------------------------------------------------------------------

it('detects a relation column by dot notation', function () {
    expect(Column::for('author.name')->isRelation())->toBeTrue()
        ->and(Column::for('title')->isRelation())->toBeFalse();
});

it('parses a _count aggregate', function () {
    expect(Column::for('articles_count')->getAggregate())->toBe([
        'fn'       => 'count',
        'relation' => 'articles',
        'path'     => '',
    ]);
});

it('parses a _count aggregate on a nested path', function () {
    expect(Column::for('category.articles_count')->getAggregate())->toBe([
        'fn'       => 'count',
        'relation' => 'articles',
        'path'     => 'category',
    ]);
});

it('camel-cases a multi-word relation', function () {
    expect(Column::for('order_items_count')->getAggregate())->toMatchArray([
        'fn'       => 'count',
        'relation' => 'orderItems',
    ]);
});

it('parses a sum aggregate with a column', function () {
    expect(Column::for('comments_sum_likes')->getAggregate())->toBe([
        'fn'       => 'sum',
        'relation' => 'comments',
        'column'   => 'likes',
        'path'     => '',
    ]);
});

it('returns null when there is no aggregate', function () {
    expect(Column::for('title')->getAggregate())->toBeNull();
});
