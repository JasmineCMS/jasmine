<?php

use Jasmine\Jasmine\Registers\RegistersCustomAssets;

function makeAssetsHost(): object {
    return new class {
        use RegistersCustomAssets;
    };
}

it('starts with no scripts or styles', function () {
    $host = makeAssetsHost();

    expect($host->getCustomScripts())->toBe([])
        ->and($host->getCustomStyles())->toBe([]);
});

it('registers a script and a style', function () {
    $host = makeAssetsHost();

    $host->registerCustomScript('https://cdn.test/a.js');
    $host->registerCustomStyle('https://cdn.test/a.css');

    expect($host->getCustomScripts())->toBe(['https://cdn.test/a.js'])
        ->and($host->getCustomStyles())->toBe(['https://cdn.test/a.css']);
});

it('deduplicates a path registered twice', function () {
    $host = makeAssetsHost();

    $host->registerCustomScript('https://cdn.test/a.js');
    $host->registerCustomScript('https://cdn.test/a.js');

    expect($host->getCustomScripts())->toBe(['https://cdn.test/a.js']);
});

it('preserves insertion order and returns a list', function () {
    $host = makeAssetsHost();

    $host->registerCustomScript('https://cdn.test/a.js');
    $host->registerCustomScript('https://cdn.test/b.js');

    expect($host->getCustomScripts())->toBe(['https://cdn.test/a.js', 'https://cdn.test/b.js']);
});

it('keeps scripts and styles independent', function () {
    $host = makeAssetsHost();

    $host->registerCustomScript('https://cdn.test/a.js');

    expect($host->getCustomStyles())->toBe([]);
});
