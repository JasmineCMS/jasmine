<?php


namespace Jasmine\Jasmine\Bread\Fields;


class ImageField extends AbstractField
{
    protected string $component = 'image-field';
    
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
    
    public function toArray(): array
    {
        $array = parent::toArray();
        
        if ($array['options'] instanceof \stdClass) $array['options'] = (array)$array['options'];
        if (!$array['description'] && (isset($array['options']['w']) && isset($array['options']['h']))) {
            $array['description'] = $array['options']['w'] . 'x' . $array['options']['h'];
        }
        
        return $array;
    }
    
    
}
