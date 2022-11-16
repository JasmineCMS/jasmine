<?php

namespace Jasmine\Jasmine\Bread;

use Illuminate\Support\Str;

/**
 * @method static array jasmineOnRetrievedForIndex()
 * @method static array jasmineOnRetrievedForEdit()
 * @method static array jasmineOnSaving(array $data)
 * @method static void jasmineOnDeleting()
 */
trait Breadable
{
    public static function getBreadableKey(): string
    {
        return str_replace('\\', '-', static::class);
    }
    
    public static function getPluralName(): string
    {
        return Str::title(Str::snake(Str::pluralStudly(class_basename(static::class)), ' '));
    }
    
    public static function getSingularName(): string
    {
        return Str::singular(Str::title(Str::snake(class_basename(static::class), ' ')));
    }
    
    public static function getMenuIcon(): string { return 'bi-files'; }
    
    public function getTitle(): string { return (string)$this->getKey(); }
}
