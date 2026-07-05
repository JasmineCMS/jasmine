<?php

namespace Jasmine\Jasmine\Bread\Fields;

class SelectField extends AbstractField
{
    protected string $component = 'select-field';

    /**
     * @param array{
     *     options?: array<string, string>,
     *     multiple?: bool,
     *     readonly?: bool,
     * } $options
     */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }
}
