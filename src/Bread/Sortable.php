<?php

namespace Jasmine\Jasmine\Bread;

/**
 * @method array getJasmineSortingGroups()
 */
interface Sortable extends \Spatie\EloquentSortable\Sortable
{
    public function determineOrderColumnName(): string;
}
