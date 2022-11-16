<?php


namespace Jasmine\Jasmine\Bread\Fields;


class GroupedField extends AbstractField
{
    protected string $component = 'grouped-field';
    
    protected array $fields = [];
    
    public function __construct(string $name)
    {
        parent::__construct($name);
        
        $this->default = [];
    }
    
    public function setFields(array $fields): static
    {
        $this->fields = $fields;
        return $this;
    }
    
    public function toArray(): array
    {
        $array = parent::toArray();
        
        $array['options'] = (array)$array['options'];
        $array['options']['fields'] = array_map(function (AbstractField $field) {
            return $field->toArray();
        }, $this->fields);
        
        foreach ($array['options']['fields'] as $field) {
            if ($field['type'] === 'GroupedField') {
                $array['default'][$field['name']] = new \stdClass();
            } else {
                $array['default'][$field['name']] = $field['default'];
            }
        }
        
        return $array;
    }
    
    
}
