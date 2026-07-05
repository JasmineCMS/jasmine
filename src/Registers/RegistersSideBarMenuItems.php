<?php

namespace Jasmine\Jasmine\Registers;

use Closure;
use Illuminate\Support\Arr;

/**
 * @phpstan-type SideBarItemRoute string|array{r: string, p?: array<string, mixed>}
 * @phpstan-type SideBarLeafItem array{
 *     title?: string,
 *     href?: string,
 *     target?: string,
 *     icon?: string,
 *     class?: string,
 *     hidden?: bool,
 *     'is-route'?: SideBarItemRoute,
 * }
 * @phpstan-type SideBarParentItem array{
 *     title?: string,
 *     icon?: string,
 *     class?: string,
 *     opened?: bool,
 *     hidden?: bool,
 * }
 */
trait RegistersSideBarMenuItems
{
    /** @var array<string, array{priority: int, factory: Closure}> */
    protected array $sideBarMenuItems = [];

    /**
     * Submenu items buffered by parent id. Merged into their parents lazily in
     * getSideBarMenuItems(), so registration order between a parent and its
     * children (and between providers) does not matter.
     *
     * @var array<string, array<string, array{priority: int, factory: Closure}>>
     */
    protected array $pendingSubMenuItems = [];

    /** @param Closure(): SideBarLeafItem|SideBarParentItem $item */
    public function registerSideBarMenuItem(string $id, Closure|array $item, int $priority = 50): static {
        $this->sideBarMenuItems[$id] = [
            'priority' => $priority,
            'factory'  => $item instanceof Closure ? $item : static fn() => $item,
        ];

        return $this;
    }

    /** @param Closure(): SideBarLeafItem|SideBarLeafItem $item */
    public function registerSideBarSubMenuItem(string $parent, string $id, Closure|array $item, int $priority = 50): static {
        $this->pendingSubMenuItems[$parent][$id] = [
            'priority' => $priority,
            'factory'  => $item instanceof Closure ? $item : static fn() => $item,
        ];

        return $this;
    }

    public function getSideBarMenuItems(): array {
        $menuItems = $this->sideBarMenuItems;

        foreach ($this->pendingSubMenuItems as $parent => $children) {
            if (!isset($menuItems[$parent])) {
                // Parent genuinely never registered by anyone — orphaned children.
                // Log::warning("Sidebar submenu under unknown parent [{$parent}]: " . implode(', ', array_keys($children)));
                continue;
            }

            $menuItems[$parent]['children'] = array_merge(
                $menuItems[$parent]['children'] ?? [],
                $children,
            );
        }

        $sorted = Arr::sort($menuItems, fn(array $i): int => $i['priority']);

        $items = [];
        foreach ($sorted as $id => $item) {
            $rendered = ($item['factory'])();
            $entry = !empty($item['children'])
                ? $this->buildParentEntry($id, $rendered, $item['children'])
                : $this->buildLeafEntry($id, $rendered);

            if ($entry !== null) $items[$id] = $entry;
        }

        return $items;
    }

    /** @param array<string, array{priority: int, factory: Closure}> $children */
    private function buildParentEntry(string $id, array $rendered, array $children): ?array {
        $entry = $rendered + [
            'title'  => $id,
            'icon'   => '',
            'class'  => '',
            'opened' => false,
            'hidden' => false,
        ];

        if ($entry['hidden']) return null;

        $sorted = Arr::sort($children, fn(array $c): int => $c['priority']);

        $entry['children'] = [];
        foreach ($sorted as $cid => $child) {
            $sub = $this->buildSubMenuEntry($cid, ($child['factory'])());
            if ($sub !== null) $entry['children'][$cid] = $sub;
        }

        return empty($entry['children']) ? null : $entry;
    }

    private function buildLeafEntry(string $id, array $rendered): ?array {
        $entry = $rendered + [
            'title'  => $id,
            'href'   => '#',
            'target' => '_self',
            'icon'   => '',
            'class'  => '',
            'hidden' => false,
        ];

        if ($entry['hidden']) return null;

        $entry['is-route'] = $this->normalizeIsRoute($entry['is-route'] ?? null);

        return $entry['href'] === '#' ? null : $entry;
    }

    private function buildSubMenuEntry(string $id, array $rendered): ?array {
        $entry = $rendered + [
            'title'  => $id,
            'class'  => '',
            'active' => false,
            'icon'   => '',
            'hidden' => false,
        ];

        if ($entry['hidden']) return null;

        $entry['is-route'] = $this->normalizeIsRoute($entry['is-route'] ?? null);

        return $entry;
    }

    private function normalizeIsRoute(mixed $value): mixed {
        return $value instanceof Closure ? null : $value;
    }
}
