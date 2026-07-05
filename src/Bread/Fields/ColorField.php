<?php

namespace Jasmine\Jasmine\Bread\Fields;

class ColorField extends AbstractField
{
    protected string $component = 'input-field';

    /**
     * @param array{
     *     format?: 'hex', // TODO
     *     presetColors?: string[],
     * } $options
     */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }

    protected function buildOptions(): array {
        return [
            'type' => 'color',
            ...parent::buildOptions(),
        ];
    }
}
