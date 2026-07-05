<?php

use Jasmine\Jasmine\Bread\Fields\FileField;

it('uses the file-field component', function () {
    expect(FileField::for('f')->setDisk('public')->toArray()['component'])->toBe('file-field');
});

it('returns the disk that was set', function () {
    expect(FileField::for('f')->setDisk('s3')->getDisk())->toBe('s3');
});

it('exposes the disk through its options', function () {
    expect((array)FileField::for('f')->setDisk('media')->toArray()['options'])->toMatchArray(['disk' => 'media']);
});

/*
 * Not covered here: getDisk() with no disk set falls back to
 * config('file-manager.diskList.0', 'public'). That reads from the container,
 * so it needs a booted app — cover it in a Feature test, not this unit lane.
 * Every test above sets a disk first to stay app-free.
 */
