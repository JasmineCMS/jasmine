<?php

namespace Jasmine\Jasmine\Bread\Fields;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Support\Str;

abstract class AbstractField implements Arrayable, Jsonable
{
    /**
     * Vue component name
     *
     * @var string
     */
    protected $component;

    /** @var string */
    protected $name;

    /** @var string */
    protected $id;

    /** @var string */
    protected $label;

    /** @var mixed */
    protected $default;

    /** @var string */
    protected $description;

    /** @var int */
    protected $repeats = 1;

    /** @var array */
    protected $validation = [];

    /** @var array */
    protected $options = [];

    /** @var string */
    protected $width;

    /**
     * AbstractField constructor.
     *
     * @param string $name
     */
    public function __construct(string $name)
    {
        $this->name = $name;
        $this->id = uniqid('jf');
        $this->label = __(Str::title(preg_replace('/[\-_]/', ' ', $name)));
        $this->width = 'col-12';
        $this->default = '';
    }

    public function setId(string $id)
    {
        $this->id = $id;
        return $this;
    }

    public function setLabel(string $label)
    {
        $this->label = $label;
        return $this;
    }

    public function setDefault($default)
    {
        $this->default = $default;
        return $this;
    }

    public function setDescription(string $description)
    {
        $this->description = $description;
        return $this;
    }

    public function setRepeats(int $repeats)
    {
        $this->repeats = $repeats;
        return $this;
    }

    public function setValidation(array $rules)
    {
        $this->validation = $rules;
        return $this;
    }

    public function setOptions(array $options)
    {
        $this->options = $options;
        return $this;
    }

    public function setWidth(string $width)
    {
        $this->width = $width;
        return $this;
    }

    /**
     * @return array
     * @throws \ReflectionException
     */
    public function toArray()
    {
        if ($this->repeats > 1) {
            // TODO: log or error?
            $this->width = 'col-12';
        }

        return [
            'type'        => (new \ReflectionClass($this))->getShortName(),
            'component'   => $this->component,
            'name'        => $this->name,
            'id'          => $this->id,
            'label'       => $this->label,
            'default'     => $this->default,
            'description' => $this->description,
            'repeats'     => $this->repeats,
            'validation'  => $this->validation,
            'options'     => $this->options ? $this->options : new \stdClass(),
            'width'       => $this->width,
        ];
    }

    public function toJson($options = 0)
    {
        $array = $this->toArray();
        return json_encode($array, $options);
    }
}
