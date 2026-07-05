<?php

namespace Jasmine\Jasmine\Registers;

use Illuminate\Support\Arr;
use Jasmine\Jasmine\Bread\Fields\AbstractField;
use Jasmine\Jasmine\Bread\Fields\GroupedField;
use Jasmine\Jasmine\Bread\Fields\SwitchField;

trait RegistersPermissions
{
    /** @var array<string, string> */
    private array $permissions = [];

    public function registerPermission(string $key): void {
        $this->permissions[$key] = $key;
    }

    /** @return array<string, string> */
    public function getPermissions(): array {
        return $this->permissions;
    }

    /** @return list<AbstractField> */
    public function getPermissionFields(): array {
        return $this->buildPermissionFields(Arr::undot($this->permissions));
    }

    /**
     * @param array<string, mixed> $tree
     * @return list<AbstractField>
     */
    private function buildPermissionFields(array $tree, int $depth = 0): array {
        $fields = [];
        foreach ($tree as $key => $value) {
            $fields[] = is_array($value)
                ? new GroupedField($key)->setFields($this->buildPermissionFields($value, $depth + 1))
                : $this->buildLeafField($key, (string)$value, $depth);
        }

        return $fields;
    }

    private function buildLeafField(string $key, string $fullPermission, int $depth): SwitchField {
        $field = new SwitchField($key);

        return $depth === 0
            ? $field->setLabel($fullPermission)
            : $field->setWidth(2);
    }
}
