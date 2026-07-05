<?php

namespace Jasmine\Jasmine\Bread\Manifest;

use Illuminate\Contracts\Support\Arrayable;
use InvalidArgumentException;
use Jasmine\Jasmine\Bread\Fields\AbstractField;

class FieldsManifest implements Arrayable
{
    private function transformLegacyFormat(array $items): array {
        $res = [];

        foreach ($items as $key => $val) {
            if ($val instanceof GridItem) {
                $res[] = $val;

                continue;
            }

            if (is_string($key) && is_array($val)) {
                preg_match('/col-[a-z]+-(\d+)(?:\s+(.+))?/i', $key, $m);
                $width = isset($m[1]) ? (int)$m[1] : 12;
                $classes = $m[2] ?? '';

                // One section under the key → it *is* the column. Unchanged legacy shape.
                if (count($val) === 1) {
                    $title = array_key_first($val);
                    $res[] = new Section($width, $title, $val[$title], $classes);

                    continue;
                }

                // Several sections → wrap in a single width-N column of full-width
                // children so they stack instead of each leaving a 3-col gutter.
                $children = [];
                foreach ($val as $title => $fields) $children[] = new Section(12, $title, $fields, '');
                $res[] = new Section($width, '', $children, $classes);

                continue;
            }

            $res[] = $val;
        }

        return $res;
    }

    public function __construct(private array $items) {
        $this->items = $this->transformLegacyFormat($this->items);
        $this->validateItems();
    }

    private function validateItems(): void {
        foreach ($this->items as $n => $i) if (!($i instanceof GridItem)) throw new InvalidArgumentException(
            sprintf('Items are expected to be an array of GridItem; index %d was %s.', $n, get_debug_type($i)),
        );
    }

    public function setItems(array $items): static {
        $this->items = $items;
        $this->validateItems();

        return $this;
    }

    public function getItems(): array {
        return $this->items;
    }

    /** @return list<AbstractField> */
    public function getFields(): array {
        return $this->extractFields($this->items);
    }

    private function extractFields(array $items): array {
        $fields = [];

        foreach ($items as $item) $fields = array_merge($fields, $item instanceof Section
            ? $this->extractFields($item->getItems()) : [$item]
        );

        return $fields;
    }

    public function toArray(): array {
        return array_map(fn($i) => $i->toArray(), $this->items);
    }
}
