<?php

namespace Jasmine\Jasmine\Bread\Fields;

class MultiSelectField extends AbstractField
{
    protected string $component = 'multi-select-field';

    public function toArray(): array
    {
        $array = parent::toArray();

        if (
            !is_array($array['default'])
            && !in_array($array['options']['mode'] ?? null, ['single', null])
        ) $array['default'] = [];

        return $array;
    }
}
