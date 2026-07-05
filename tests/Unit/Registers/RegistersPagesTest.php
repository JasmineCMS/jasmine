<?php

use Jasmine\Jasmine\Exceptions\MustExtendJasminePage;
use Jasmine\Jasmine\Registers\RegistersPages;

function makePagesHost(): object {
    return new class {
        use RegistersPages;
    };
}

it('starts with no pages', function () {
    expect(makePagesHost()->getPages())->toBe([]);
});

it('returns null for an unknown page', function () {
    expect(makePagesHost()->getPage('missing'))->toBeNull();
});

it('rejects a class that does not extend JasminePage', function () {
    $host = makePagesHost();

    expect(fn() => $host->registerPage(stdClass::class))
        ->toThrow(MustExtendJasminePage::class);
});
