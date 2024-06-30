<?php

namespace Jasmine\Jasmine\Bread;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

/**
 * @method static array jasmineOnRetrievedForIndex(BreadableInterface|Model $model)
 * @method static array jasmineOnRetrievedForEdit(BreadableInterface|Model $model)
 * @method static array jasmineOnSaving(array $data, BreadableInterface|Model $model)
 * @method static void jasmineOnSaved(BreadableInterface|Model $model)
 * @method static void jasmineOnDeleting(BreadableInterface|Model $model)
 * @method string jasmineGetPublicUrl()
 */
trait Breadable
{
    public static function getBreadableKey(): string
    {
        return str_replace('\\', '-', static::class);
    }

    public static function getPluralName(): string
    {
        return __(Str::title(Str::snake(Str::pluralStudly(class_basename(static::class)), ' ')));
    }

    public static function getSingularName(): string
    {
        return __(Str::singular(Str::title(Str::snake(class_basename(static::class), ' '))));
    }

    public static function getMenuIcon(): string { return 'bi-files'; }

    public function getTitle(): string { return (string)$this->getKey(); }
}
