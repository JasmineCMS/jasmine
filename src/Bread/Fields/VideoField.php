<?php

namespace Jasmine\Jasmine\Bread\Fields;

class VideoField extends AbstractField
{
    protected string $component = 'video-field';

    protected function modifyArray(array $array): array {
        if (!$array['default']) $array['default'] = ['type' => null, 'url' => null];

        return $array;
    }
}
