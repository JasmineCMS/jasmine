<?php

namespace Jasmine\Jasmine\Bread\Fields;

class DateField extends AbstractField
{
    protected string $component = 'input-field';

    /**
     * @param array{
     *     type?: 'date' | 'datetime-local',
     *     min?: string,
     *     max?: string,
     *     step?: string,
     * } $options
     */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }

    protected function buildOptions(): array {
        return [
            'type' => 'date',
            ...parent::buildOptions(),
        ];
    }
}
