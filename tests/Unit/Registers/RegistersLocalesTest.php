<?php

use Jasmine\Jasmine\Registers\RegistersLocales;

function makeLocalesHost(): object {
    return new class {
        use RegistersLocales;
    };
}

it('starts with no locales', function () {
    expect(makeLocalesHost()->getLocales())->toBe([]);
});

it('registers a list of locales', function () {
    $host = makeLocalesHost();

    $host->registerLocales(['en', 'he']);

    expect($host->getLocales())->toBe(['en', 'he']);
});

it('overwrites locales on a second call', function () {
    $host = makeLocalesHost();

    $host->registerLocales(['en']);
    $host->registerLocales(['he', 'fr']);

    expect($host->getLocales())->toBe(['he', 'fr']);
});

it('keeps associative locale arrays intact', function () {
    $host = makeLocalesHost();

    $host->registerLocales(['en' => 'English', 'he' => 'עברית']);

    expect($host->getLocales())->toBe(['en' => 'English', 'he' => 'עברית']);
});
