<?php

namespace Jasmine\Jasmine\Bread;

use Illuminate\Database\Eloquent\Builder;

/**
 * What a breadable's browse page currently shows — handed to its widgets.
 */
final readonly class BrowseContext
{
    /** @param array<string, mixed> $filters */
    public function __construct(
        public BreadableContext $breadable,
        private Builder $query,
        public array $filters,
        public ?string $search,
        public ?string $locale,
    ) {}

    /** A fresh copy of the breadable's query, narrowed down to the active filters and search. */
    public function query(): Builder {
        return clone $this->query;
    }
}
