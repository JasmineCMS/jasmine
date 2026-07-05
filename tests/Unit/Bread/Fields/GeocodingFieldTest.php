<?php

use Jasmine\Jasmine\Bread\Fields\GeocodingField;

it('uses the geocoding-field component', function () {
    expect(GeocodingField::for('g')->toArray()['component'])->toBe('geocoding-field');
});

it('has no api key by default', function () {
    expect(GeocodingField::for('g')->getApiKey())->toBeNull();
});

it('exposes the api key through its options', function () {
    $options = (array)GeocodingField::for('g')->setApiKey('KEY123')->toArray()['options'];

    expect($options)->toMatchArray(['api_key' => 'KEY123']);
});

it('fills an empty default with a coordinate placeholder', function () {
    expect(GeocodingField::for('g')->toArray()['default'])->toBe([
        'lat'     => '31.7501995',
        'lng'     => '34.9979087',
        'address' => null,
    ]);
});
