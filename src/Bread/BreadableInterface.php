<?php


namespace Jasmine\Jasmine\Bread;


use Jasmine\Jasmine\Bread\Fields\FieldsManifest;

interface BreadableInterface
{
    public static function getPluralTitle(): string;

    public static function getSingularTitle(): string;

    public static function getMenuIcon(): string;

    public static function browseableColumns(): array;

    public static function fieldsManifest(): FieldsManifest;
}
