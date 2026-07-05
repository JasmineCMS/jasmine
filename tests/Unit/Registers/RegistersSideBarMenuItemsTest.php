<?php

use Jasmine\Jasmine\Registers\RegistersSideBarMenuItems;

function makeSidebarHost(): object {
    return new class {
        use RegistersSideBarMenuItems;
    };
}

// ---------------------------------------------------------------------------
// Initial state & fluent returns
// ---------------------------------------------------------------------------

it('starts with no menu items', function () {
    expect(makeSidebarHost()->getSideBarMenuItems())->toBe([]);
});

it('returns static from registerSideBarMenuItem', function () {
    $host = makeSidebarHost();

    expect($host->registerSideBarMenuItem('id', fn() => ['href' => '/x']))->toBe($host);
});

it('returns static from registerSideBarSubMenuItem', function () {
    $host = makeSidebarHost();

    // no parent required up front — registration is order-independent
    expect($host->registerSideBarSubMenuItem('parent', 'child', fn() => ['title' => 'Child']))->toBe($host);
});

// ---------------------------------------------------------------------------
// Leaf items
// ---------------------------------------------------------------------------

it('renders a leaf item with its defaults filled in', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('dash', fn() => ['title' => 'Dashboard', 'href' => '/dash']);

    expect($host->getSideBarMenuItems())->toHaveKey('dash')
        ->and($host->getSideBarMenuItems()['dash'])->toMatchArray([
            'title'    => 'Dashboard',
            'href'     => '/dash',
            'target'   => '_self',
            'icon'     => '',
            'class'    => '',
            'hidden'   => false,
            'is-route' => null,
        ]);
});

it('accepts a plain array instead of a closure', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('dash', ['title' => 'Dashboard', 'href' => '/dash']);

    expect($host->getSideBarMenuItems())->toHaveKey('dash');
});

it('drops a leaf with no href', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('ghost', fn() => ['title' => 'Ghost']);

    expect($host->getSideBarMenuItems())->not->toHaveKey('ghost');
});

it('drops a hidden leaf', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('secret', fn() => ['href' => '/secret', 'hidden' => true]);

    expect($host->getSideBarMenuItems())->not->toHaveKey('secret');
});

// ---------------------------------------------------------------------------
// is-route normalization
// ---------------------------------------------------------------------------

it('normalizes a closure is-route to null', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('x', fn() => ['href' => '/x', 'is-route' => fn() => true]);

    expect($host->getSideBarMenuItems()['x']['is-route'])->toBeNull();
});

it('preserves an array is-route', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('x', fn() => ['href' => '/x', 'is-route' => ['r' => 'jasmine.dashboard']]);

    expect($host->getSideBarMenuItems()['x']['is-route'])->toBe(['r' => 'jasmine.dashboard']);
});

// ---------------------------------------------------------------------------
// Ordering
// ---------------------------------------------------------------------------

it('sorts top-level items by ascending priority', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('a', fn() => ['href' => '/a'], 50);
    $host->registerSideBarMenuItem('b', fn() => ['href' => '/b'], 10);

    expect(array_keys($host->getSideBarMenuItems()))->toBe(['b', 'a']);
});

// ---------------------------------------------------------------------------
// Parents & submenus
// ---------------------------------------------------------------------------

it('does not throw when registering a submenu under an unknown parent', function () {
    $host = makeSidebarHost();

    expect(fn() => $host->registerSideBarSubMenuItem('missing', 'child', fn() => ['title' => 'Child']))
        ->not->toThrow(InvalidArgumentException::class);
});

it('drops orphaned submenu items whose parent is never registered', function () {
    $host = makeSidebarHost();
    $host->registerSideBarSubMenuItem('missing', 'child', fn() => ['title' => 'Child', 'href' => '/x']);

    expect($host->getSideBarMenuItems())->toBe([]);
});

it('builds a parent entry with its children', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('pages', fn() => ['title' => 'Pages']);
    $host->registerSideBarSubMenuItem('pages', 'home', fn() => ['title' => 'Home', 'href' => '/pages/home']);

    $items = $host->getSideBarMenuItems();

    expect($items)->toHaveKey('pages')
        ->and($items['pages'])->toMatchArray(['title' => 'Pages', 'opened' => false])
        ->and($items['pages']['children'])->toHaveKey('home')
        ->and($items['pages']['children']['home'])->toMatchArray(['title' => 'Home']);
});

it('attaches a submenu registered before its parent', function () {
    $host = makeSidebarHost();

    // child first, parent second — order must not matter
    $host->registerSideBarSubMenuItem('pages', 'home', fn() => ['title' => 'Home', 'href' => '/pages/home']);
    $host->registerSideBarMenuItem('pages', fn() => ['title' => 'Pages']);

    $items = $host->getSideBarMenuItems();

    expect($items)->toHaveKey('pages')
        ->and($items['pages']['children'])->toHaveKey('home');
});

it('sorts submenu children by ascending priority', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('pages', fn() => ['title' => 'Pages']);
    $host->registerSideBarSubMenuItem('pages', 'second', fn() => ['title' => 'Second'], 50);
    $host->registerSideBarSubMenuItem('pages', 'first', fn() => ['title' => 'First'], 10);

    expect(array_keys($host->getSideBarMenuItems()['pages']['children']))->toBe(['first', 'second']);
});

it('drops a parent whose children are all hidden', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('pages', fn() => ['title' => 'Pages']);
    $host->registerSideBarSubMenuItem('pages', 'hidden-child', fn() => ['title' => 'Nope', 'hidden' => true]);

    expect($host->getSideBarMenuItems())->not->toHaveKey('pages');
});

it('drops a hidden parent even when it has visible children', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('pages', fn() => ['title' => 'Pages', 'hidden' => true]);
    $host->registerSideBarSubMenuItem('pages', 'home', fn() => ['title' => 'Home', 'href' => '/pages/home']);

    expect($host->getSideBarMenuItems())->not->toHaveKey('pages');
});

it('preserves existing children when a parent is re-registered', function () {
    $host = makeSidebarHost();
    $host->registerSideBarMenuItem('pages', fn() => ['title' => 'Pages']);
    $host->registerSideBarSubMenuItem('pages', 'home', fn() => ['title' => 'Home', 'href' => '/pages/home']);
    $host->registerSideBarMenuItem('pages', fn() => ['title' => 'Pages Renamed']);

    $items = $host->getSideBarMenuItems();

    expect($items['pages'])->toMatchArray(['title' => 'Pages Renamed'])
        ->and($items['pages']['children'])->toHaveKey('home');
});
