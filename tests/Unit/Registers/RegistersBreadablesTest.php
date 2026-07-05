<?php

use Jasmine\Jasmine\Exceptions\MustImplementBreadableInterface;
use Jasmine\Jasmine\Registers\RegistersBreadables;

function makeBreadablesHost(): object {
    return new class {
        use RegistersBreadables;
    };
}

it('starts with no breadables', function () {
    expect(makeBreadablesHost()->getBreadables())->toBe([]);
});

it('rejects a class that does not implement BreadableInterface', function () {
    $host = makeBreadablesHost();

    expect(fn() => $host->registerBreadable(stdClass::class))
        ->toThrow(MustImplementBreadableInterface::class);
});
