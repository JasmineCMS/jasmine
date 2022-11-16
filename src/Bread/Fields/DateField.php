<?php


namespace Jasmine\Jasmine\Bread\Fields;


class DateField extends AbstractField
{
    protected string $component = 'input-field';
    
    public function toArray(): array
    {
        $array = parent::toArray();
        
        $array['options'] = (array)$array['options'] + ['type' => 'date'];
        
        return $array;
    }
}
