<?php

namespace Jasmine\Jasmine\Bread\Fields;

use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Support\Str;

abstract class AbstractField implements Arrayable, Jsonable
{
    protected string $component;
    protected string $name;
    protected string $id;
    protected string $label;
    protected mixed $default = '';
    protected string $description;
    protected int $repeats = 1;
    protected array $validation = [];
    protected array $options = [];
    protected string $width;
    protected string $repeatsWidth;
    
    public function __construct(string $name)
    {
        $this->name = $name;
        $this->id = uniqid('jf');
        $this->label = Str::title(preg_replace('/[\-_]/', ' ', $name));
        $this->description = '';
        $this->width = 'col-12';
        $this->repeatsWidth = 'col-12';
    }
    
    public function setId(string $id): static
    {
        $this->id = $id;
        return $this;
    }
    
    public function setLabel(string $label): static
    {
        $this->label = $label;
        return $this;
    }
    
    public function setDefault($default): static
    {
        $this->default = $default;
        return $this;
    }
    
    public function setDescription(string $description): static
    {
        $this->description = $description;
        return $this;
    }
    
    public function setRepeats(int $repeats, ?string $repeatsWidth = null): static
    {
        $this->repeats = $repeats;
        if ($repeatsWidth) $this->setRepeatsWidth($repeatsWidth);
        return $this;
    }
    
    public function setRepeatsWidth(string $width): static
    {
        $this->repeatsWidth = $width;
        return $this;
    }
    
    public function setValidation(array $rules): static
    {
        $this->validation = $rules;
        return $this;
    }
    
    public function setOptions(array $options): static
    {
        $this->options = $options;
        return $this;
    }
    
    public function setWidth(string $width): static
    {
        $this->width = $width;
        return $this;
    }
    
    /**
     * @return array
     * @throws \ReflectionException
     */
    public function toArray(): array
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
