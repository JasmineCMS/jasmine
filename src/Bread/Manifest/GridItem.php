<?php

namespace Jasmine\Jasmine\Bread\Manifest;

interface GridItem
{
    public function getWidth(): int;

    public function getClasses(): string;

    public function getId(): string;
}
