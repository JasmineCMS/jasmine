<?php

namespace Jasmine\Jasmine\Bread;

trait Breadable
{
    public static function getBreadableKey(): string
    {
        return str_replace('\\', '-', static::class);
    }

    public static function getPluralName(): string
    {
        return __(\Str::title(\Str::snake(\Str::pluralStudly(class_basename(static::class)), ' ')));
    }

    public static function getSingularName(): string
    {
        return __(\Str::singular(\Str::title(\Str::snake(class_basename(static::class), ' '))));
    }

    public static function getMenuIcon(): string { return 'fa-cubes'; }
}
