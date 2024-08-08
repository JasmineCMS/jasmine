<?php

namespace Jasmine\Jasmine\Bread;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Jasmine\Jasmine\ManifestFaker;

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
        return once(function () {
            $k = str_replace('\\', '-', static::class);
            if (str_starts_with($k, 'App-Models-')) $k = Str::of($k)->substr(11)->plural()->lower();
            return $k;
        });
    }
    
    public static function getPluralName(): string
    {
        return once(fn() => __(Str::title(Str::snake(Str::pluralStudly(class_basename(static::class)), ' '))));
    }
    
    public static function getSingularName(): string
    {
        return once(fn() => __(Str::singular(Str::title(Str::snake(class_basename(static::class), ' ')))));
    }
    
    public static function getMenuIcon(): string { return 'bi-files'; }
    
    public function getTitle(): string { return (string)$this->getKey(); }
    
    public static function fake(bool $all = false, array $override = []): array
    {
        return ManifestFaker::fake(static::class, $all, $override);
    }
}
