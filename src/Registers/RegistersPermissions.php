<?php

namespace Jasmine\Jasmine\Registers;

use Illuminate\Support\Arr;
use Jasmine\Jasmine\Bread\Fields\GroupedField;
use Jasmine\Jasmine\Bread\Fields\SwitchField;

trait RegistersPermissions
{
    private array $permissions = [];

    public function registerPermission(string $key): void
    {
        $this->permissions[$key] = $key;
    }

    public function getPermissions(): array
    {
        return $this->permissions;
    }

    public function getPermissionFields(): array
    {
        $permissionFields = [];
        foreach (Arr::undot($this->getPermissions()) as $gk => $item) {
            if (is_string($item)) {
                $permissionFields[] = (new SwitchField($gk))->setLabel($item);
            } elseif (is_array($item)) {
                $fields = [];
                foreach ($item as $k => $ci) {
                    if (is_string($ci)) $fields[] = (new SwitchField($k))->setWidth('col-md-2');
                    elseif (is_array($ci)) {
                        $fields2 = [];
                        foreach ($ci as $kk => $cci) {
                            $fields2[] = (new SwitchField($kk))->setWidth('col-md-2');
                        }
                        $fields[] = (new GroupedField($k))->setFields($fields2);
                    }
                }
                $permissionFields[] = (new GroupedField($gk))->setFields($fields);
            }
        }

        return $permissionFields;
    }
}
