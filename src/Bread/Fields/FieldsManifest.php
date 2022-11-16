<?php


namespace Jasmine\Jasmine\Bread\Fields;


use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Contracts\Support\Jsonable;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;

class FieldsManifest implements Arrayable, Jsonable
{
    /**
     * @var array|Collection
     */
    private $columns;
    
    /**
     * FieldsManifest constructor.
     *
     * @param array $columns
     */
    public function __construct(array $columns)
    {
        $this->columns = collect($columns);
    }
    
    /*** @return AbstractField[] */
    public function getFields(): array { return Arr::flatten($this->columns); }
    
    /**
     * @inheritDoc
     */
    public function toArray()
    {
        return $this->columns->map(function ($col) {
            return array_map(function ($group) {
                return array_map(function (AbstractField $field) {
                    return $field->toArray();
                }, $group);
            }, $col);
        });
    }
    
    /**
     * @inheritDoc
     */
    public function toJson($options = 0)
    {
        return json_encode($this->toArray(), $options);
    }
}
