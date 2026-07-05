<?php

namespace Jasmine\Jasmine\Bread;

use ArrayAccess;
use ArrayIterator;
use Countable;
use IteratorAggregate;
use JsonSerializable;

class Translations implements ArrayAccess, Countable, IteratorAggregate, JsonSerializable
{
    private array $items = [];

    public function __construct(array $items = []) {
        $this->items = $items;
    }

    public function offsetExists(mixed $offset): bool {
        return isset($this->items[$offset]);
    }

    public function offsetGet(mixed $offset): mixed {
        return $this->items[$offset] ?? null;
    }

    public function offsetSet(mixed $offset, mixed $value): void {
        if ($offset === null) $this->items[] = $value;
        else $this->items[$offset] = $value;
    }

    public function offsetUnset(mixed $offset): void {
        unset($this->items[$offset]);
    }

    public function getIterator(): ArrayIterator {
        return new ArrayIterator($this->items);
    }

    public function count(): int {
        return count($this->items);
    }

    public function toArray(): array {
        return $this->items;
    }

    public function jsonSerialize(): array {
        return $this->items;
    }
}
