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

    /** @var string */
    protected $repeatsWidth;

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
        $this->repeatsWidth = 'col-12';
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

    public function setRepeats(int $repeats, ?string $repeatsWidth = null)
    {
        $this->repeats = $repeats;
        if ($repeatsWidth) $this->setRepeatsWidth($repeatsWidth);
        return $this;
    }

    public function setRepeatsWidth(string $width)
    {
        $this->repeatsWidth = $width;
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
        if ($this->repeats > 1) $this->width = 'col-12';

        return [
            'type'         => (new \ReflectionClass($this))->getShortName(),
            'component'    => $this->component,
            'name'         => $this->name,
            'id'           => $this->id,
            'label'        => $this->label,
            'default'      => $this->default,
            'description'  => $this->description,
            'repeats'      => $this->repeats,
            'repeatsWidth' => $this->repeatsWidth,
            'validation'   => count($this->validation) ? $this->validation : ['nullable'],
            'options'      => $this->options ?: new \stdClass(),
            'width'        => $this->width,
        ];
    }

    public function toJson($options = 0) { return json_encode($this->toArray(), $options); }
}
