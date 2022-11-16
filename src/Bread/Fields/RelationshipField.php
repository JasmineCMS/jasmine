<?php


namespace Jasmine\Jasmine\Bread\Fields;


use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\Relation;

class RelationshipField extends AbstractField
{
    protected string $component = 'relationship-field';
    
    protected $relationship = null;
    
    public function __construct(string $name)
    {
        parent::__construct($name);
        
        $this->default = [];
    }
    
    public function getRelationship() { return $this->relationship; }
    
    public function setRelationship(Relation $relationship, string $related_title_field = null)
    {
        $this->relationship = [
            'many_to_many'        => $relationship instanceof BelongsToMany,
            'name'                => $relationship->getRelationName(),
            'parent'              => get_class($relationship->getParent()),
            'parent_key_name'     => $relationship instanceof BelongsTo ? $relationship->getForeignKeyName() : null,
            'related'             => get_class($relationship->getRelated()),
            'related_key_name'    => $relationship->getRelated()->getKeyName(),
            'related_title_field' => $related_title_field ?? $relationship->getRelatedKeyName(),
            'multiple'            => $relationship instanceof BelongsToMany || $relationship instanceof HasMany,
        ];
        
        return $this;
    }
    
    public function toArray(): array
    {
        $array = parent::toArray();
        
        if (count($this->options)) {
            $array['options'] += $this->getRelationship();
        } else {
            $array['options'] = $this->getRelationship();
        }
        
        
        return $array;
    }
}
