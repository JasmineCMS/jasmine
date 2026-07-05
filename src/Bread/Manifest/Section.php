<?php

namespace Jasmine\Jasmine\Bread\Manifest;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Support\Str;
use InvalidArgumentException;

class Section implements Arrayable, GridItem
{
    public function __construct(
        private int $width,
        private string $title,
        private array $items,
        private string $classes = '',
        private ?string $id = null,
    ) {
        $this->validateItems();
        $this->id ??= 'js' . Str::random(4);
    }

    private function validateItems(): void {
        foreach ($this->items as $n => $i) if (!($i instanceof GridItem)) throw new InvalidArgumentException(
            sprintf('Items are expected to be an array of GridItem; index %d was %s.', $n, get_debug_type($i)),
        );
    }

    public function setWidth(int $width): static {
        $this->width = $width;

        return $this;
    }

    public function getWidth(): int {
        return $this->width;
    }

    public function setTitle(string $title): static {
        $this->title = $title;

        return $this;
    }

    public function getTitle(): string {
        return $this->title;
    }

    public function setItems(array $items): static {
        $this->items = $items;
        $this->validateItems();

        return $this;
    }

    public function getItems(): array {
        return $this->items;
    }

    public function setClasses(string $classes): static {
        $this->classes = $classes;

        return $this;
    }

    public function getClasses(): string {
        return $this->classes;
    }

    public function setId(?string $id): Section {
        $this->id = $id ?: 'js' . Str::random(4);

        return $this;
    }

    public function getId(): string {
        return $this->id;
    }

    public function toArray(): array {
        return [
            'id'      => $this->getId(),
            'width'   => $this->getWidth(),
            'title'   => $this->getTitle(),
            'classes' => $this->getClasses(),
            'items'   => array_map(fn($i) => $i->toArray(), $this->items),
        ];
    }
}
