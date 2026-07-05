<?php

namespace Jasmine\Jasmine\Bread\Fields;

class TextareaField extends AbstractField
{
    protected string $component = 'textarea-field';

    /**
     * @param array{
     *     rows?: int,
     *     placeholder?: string,
     *     maxlength?: int,
     *     minlength?: int,
     *     wrap?: 'soft' | 'hard' | 'off',
     *     readonly?: bool,
     *     spellcheck?: bool, // TODO
     * } $options
     */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }
}
