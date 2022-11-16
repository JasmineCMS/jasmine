<?php


namespace Jasmine\Jasmine\Bread;


use Jasmine\Jasmine\Bread\Fields\FieldsManifest;

interface BreadableInterface
{
    public static function getBreadableKey(): string;
    
    public static function getPluralName(): string;
    
    public static function getSingularName(): string;
    
    public static function getMenuIcon(): string;
    
    public static function browseableColumns(): array;
    
    public static function fieldsManifest(): FieldsManifest;
    
    public function getTitle(): string;
}
