<?php

namespace Jasmine\Jasmine\Bread\Manifest;

use Closure;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Str;
use JsonSerializable;

class Column implements Arrayable, JsonSerializable
{
    public function __construct(
        private(set) string $data,
        private(set) ?string $label = null,
        private(set) bool $sortable = true,
        private(set) bool $searchable = true,
        private(set) null|string|array $filtering = null,
        private(set) ?Closure $render = null,
        private(set) ?Closure $searchLogic = null,
        private(set) bool $html = false,
    ) {
        $this->label ??= $this->data;
    }

    public static function for(
        string $data,
        ?string $label = null,
        bool $sortable = true,
        bool $searchable = true,
        null|string|array $filtering = null,
        ?Closure $render = null,
        ?Closure $searchLogic = null,
        bool $html = false,
    ): self {
        return new self($data, $label, $sortable, $searchable, $filtering, $render, $searchLogic, $html);
    }

    public function data(string $data): self {
        $this->data = $data;

        return $this;
    }

    public function label(?string $label): self {
        $this->label = $label === null ? "columns.$this->data" : $label;

        return $this;
    }

    public function sortable(bool $sortable = true): self {
        $this->sortable = $sortable;

        return $this;
    }

    public function searchable(bool $searchable = true): self {
        $this->searchable = $searchable;

        return $this;
    }

    /**
     * provide 'date' to filter by date range.
     * provide and array of available options,
     * or an empty array to auto determine available options
     */
    public function filterable(null|string|array $filtering = []): self {
        $this->filtering = $filtering;

        return $this;
    }

    public function render(?Closure $render, ?bool $html = null): self {
        $this->render = $render;
        if ($html !== null) $this->html = $html;

        return $this;
    }

    public function searchLogic(?Closure $searchLogic): self {
        $this->searchLogic = $searchLogic;

        return $this;
    }

    public function html(bool $html): self {
        $this->html = $html;

        return $this;
    }

    public function toArray(): array {
        return array_filter([
            'data'       => $this->data,
            'label'      => $this->label,
            'sortable'   => $this->sortable,
            'searchable' => $this->searchable,
            'filtering'  => $this->filtering,
            'html'       => $this->html,
        ], fn($v) => $v !== null);
    }

    public function isRelation(): bool {
        return str_contains($this->data ?? '', '.');
    }

    /** @return null|array{fn:string, relation: string, column?: string, path: string} */
    public function getAggregate(): ?array {
        if (!$this->data) return null;

        // Separate the deep nested path from the aggregate string
        $parts = explode('.', $this->data);
        $aggregateStr = array_pop($parts); // e.g., 'articles_count'
        $path = implode('.', $parts);      // e.g., 'category.author' (or empty if top-level)

        if (str_ends_with($aggregateStr, '_count')) return [
            'fn'       => 'count',
            'relation' => Str::camel(substr($aggregateStr, 0, -6)),
            'path'     => $path,
        ];

        foreach (['sum', 'avg', 'min', 'max'] as $fn) {
            $needle = "_{$fn}_";
            if (($pos = strrpos($aggregateStr, $needle)) !== false) return [
                'fn'       => $fn,
                'relation' => Str::camel(substr($aggregateStr, 0, $pos)),
                'column'   => substr($aggregateStr, $pos + strlen($needle)),
                'path'     => $path,
            ];
        }

        return null;
    }

    public function jsonSerialize(): array {
        return $this->toArray();
    }
}
