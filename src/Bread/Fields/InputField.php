<?php

namespace Jasmine\Jasmine\Bread\Fields;

class InputField extends AbstractField
{
    protected string $component = 'input-field';

    /**
     * @param array{
     *     type?: 'text' | 'email' | 'number' | 'password' | 'range' | 'tel' | 'time' | 'url',
     *     placeholder?: string,
     *     pattern?: string,
     *     minlength?: int,
     *     maxlength?: int,
     *     min?: int|float,
     *     max?: int|float,
     *     step?: int|float,
     *     readonly?: bool,
     *     disabled?: bool,
     *     autofocus?: bool,
     *     autocomplete?: string,
     *     dir?: 'auto' | 'ltr' | 'rtl',
     * } $options
     */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }
}
