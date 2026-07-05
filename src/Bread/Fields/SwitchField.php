<?php

namespace Jasmine\Jasmine\Bread\Fields;

class SwitchField extends AbstractField
{
    protected string $component = 'switch-field';

    protected function modifyArray(array $array): array {
        if ($array['default'] === null) $array['default'] = false;

        return $array;
    }
}
