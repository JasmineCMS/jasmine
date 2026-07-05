<?php

namespace Jasmine\Jasmine\Bread\Fields;

class ImageField extends FileField
{
    protected string $component = 'image-field';

    protected bool $flexible = false;

    public function isFlexible(): bool {
        return $this->flexible;
    }

    public function flexible(bool $flexible = true): static {
        $this->flexible = $flexible;

        return $this;
    }

    /**
     * @param array{
     *     w?: int,
     *     h?: int,
     *     bg?: string,
     *     fg?: string,
     *     ext?: 'png' | 'jpg',
     *     placeholder?: string,
     * } $options
     */
    public function setOptions(array $options): static {
        return parent::setOptions($options);
    }

    protected function buildOptions(): array {
        return [
            ...parent::buildOptions(),
            'disk'     => $this->getDisk(),
            'flexible' => $this->isFlexible(),
        ];
    }

    protected function modifyArray(array $array): array {
        if ($array['description'] === null
            && !empty($array['options']['w'])
            && !empty($array['options']['h'])
        ) $array['description'] = $array['options']['w'] . 'x' . $array['options']['h'];

        if (!$array['default']) $array['default'] = [
            'src' => null,
            'alt' => null,
            'w'   => null,
            'h'   => null,
        ];

        return $array;
    }
}
