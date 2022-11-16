<?php


namespace Jasmine\Jasmine\Bread\Fields;


class VideoField extends AbstractField
{
    protected string $component = 'video-field';
    
    public function __construct(string $name)
    {
        parent::__construct($name);
        
        $this->default = [
            'url'  => '',
            'type' => '',
        ];
    }
    
    
}
