<?php

namespace Jasmine\Jasmine\Bread;

use Illuminate\Database\Eloquent\Builder;
use Spatie\EloquentSortable\SortableTrait as SpatieSortableTrait;

trait SortableTrait
{
    use SpatieSortableTrait;
    
    public function buildSortQuery()
    {
        /** @var Builder $q */
        $q = static::query();
        
        if ($this->sortable['group_by'] ?? null) {
            $q->where($this->sortable['group_by'], $this->{$this->sortable['group_by']});
        }
        
        return $q;
    }
}