<?php


namespace Jasmine\Jasmine\Bread\Fields;


class GroupedField extends AbstractField
{
    protected $component = 'grouped-field';

    protected $fields = [];

    public function __construct(string $name)
    {
        parent::__construct($name);

        $this->default = [];
    }

    /**
     * @param array $fields
     *
     * @return $this
     */
    public function setFields(array $fields)
    {
        $this->fields = $fields;
        return $this;
    }

    public function toArray()
    {
        $array = parent::toArray();

        $array['options'] = (array)$array['options'];
        $array['options']['fields'] = array_map(function (AbstractField $field) {
            return $field->toArray();
        }, $this->fields);

        foreach ($array['options']['fields'] as $field) {
            if ($field['type'] === 'GroupedField') {
                $array['default'][$field['name']] = [];
            } else {
                $array['default'][$field['name']] = $field['default'];
            }
        }

        return $array;
    }


}
