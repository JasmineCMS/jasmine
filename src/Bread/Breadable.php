<?php

namespace Jasmine\Jasmine\Bread;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Str;
use Jasmine\Jasmine\Bread\Manifest\Action;
use Jasmine\Jasmine\Bread\Manifest\ManifestFaker;
use Spatie\EloquentSortable\SortableTrait;

trait Breadable
{
    use SortableTrait;

    public function buildSortQuery() {
        $q = static::query();

        if ($this->sortable['group_by'] ?? null) {
            $q->where($this->sortable['group_by'], $this->{$this->sortable['group_by']});
        }

        return $q;
    }

    public static function getBreadableKey(): string {
        return once(fn(): string => Str::of(class_basename(static::class))->plural()->kebab()->lower()->toString());
    }

    public static function getPluralName(): string {
        return once(fn(): string => Str::plural(Str::headline(class_basename(static::class))));
    }

    public static function getSingularName(): string {
        return once(fn(): string => Str::singular(Str::headline(class_basename(static::class))));
    }

    public static function getMenuIcon(): string {
        return 'bi-files';
    }

    public function getTitle(): string {
        return (string)$this->getKey();
    }

    public function getPublicUrl(): ?string {
        return null;
    }

    /** @return Builder<static> */
    public static function jasmineQuery(): Builder {
        return static::query();
    }

    public function browseActions(): array {
        $context = new BreadableContext($this::getBreadableKey(), $this::class);

        return [
            'view'   => $this->getPublicUrl() ? Action::for(name: 'view', icon: 'bi-link',
                url: $this->getPublicUrl(),
                target: '_blank',
                permission: $context->permission('view'),
            ) : null,
            'edit'   => Action::for(name: 'edit', icon: 'bi-pencil',
                url: route('jasmine.bread.edit', [
                    'breadable'   => $this::getBreadableKey(),
                    'breadableId' => $this->getKey(),
                ]),
                permission: $context->permission('edit'),
            ),
            'clone'  => Action::for(name: 'clone', icon: 'bi-copy',
                url: route('jasmine.bread.clone', [
                    'breadable'   => $this::getBreadableKey(),
                    'breadableId' => $this->getKey(),
                ]),
                permission: $context->permission('read'),
            ),
            'delete' => Action::for(name: 'delete', icon: 'bi-trash3',
                url: route('jasmine.bread.delete', [
                    'breadable'   => $this::getBreadableKey(),
                    'breadableId' => $this->getKey(),
                ]),
                permission: $context->permission('delete'),
                confirm: ['are you sure want to delete delete :title' => ['title' => $this->getTitle()]],
                method: 'DELETE',
            ),
        ];
    }

    public static function fake(bool $all = false, array $override = []): array {
        return ManifestFaker::fake(static::class, $all, $override);
    }
}
