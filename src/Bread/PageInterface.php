<?php

namespace Jasmine\Jasmine\Bread;

use Jasmine\Jasmine\Bread\Fields\FieldsManifest;

interface PageInterface
{
    public static function fieldsManifest(): FieldsManifest;
}
