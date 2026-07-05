<?php

namespace Jasmine\Jasmine\Bread\Fields;

class JsonField extends AbstractField
{
    protected string $component = 'json-field';

    /** @param array{} $options // TODO */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }
}
