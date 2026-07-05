<?php

use Jasmine\Jasmine\Bread\Fields\VideoField;

it('uses the video-field component', function () {
    expect(VideoField::for('v')->toArray()['component'])->toBe('video-field');
});

it('fills an empty default with a type/url placeholder', function () {
    expect(VideoField::for('v')->toArray()['default'])->toBe(['type' => null, 'url' => null]);
});

it('keeps a default that is already set', function () {
    $default = ['type' => 'youtube', 'url' => 'https://youtu.be/x'];

    expect(VideoField::for('v')->setDefault($default)->toArray()['default'])->toBe($default);
});
