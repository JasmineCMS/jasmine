<?php


namespace Jasmine\Jasmine\Bread\Fields;


class ImageField extends AbstractField
{
    protected $component = 'image-field';

    public function __construct(string $name)
    {
        parent::__construct($name);

        $this->default = [
            'src' => '',
            'alt' => '',
            'w'   => '',
            'h'   => '',
        ];
    }


}
