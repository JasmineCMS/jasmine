<?php
/** @var array $settings */
/**
 * @var \Jasmine\Jasmine\Bread\BreadableInterface|\Illuminate\Database\Eloquent\Model $breadable
 */
?>
@php($view = $settings['view'])
@php($name = $settings['name'])
@php($id = $settings['id'])
@php($label = $settings['label'])
@php($description = $settings['description'])e
@php($repeats = $settings['repeats'])
@php($validation = $settings['validation'])
@php($options = $settings['options'])
@php($width = $settings['width'])

@php($value = $breadable->{$name} ?? old($name))

<template v-slot:default="{data}">
    <input :id="data.id" :name="data.name" :value="false"
           class="form-control @error($name) is-invalid @enderror">

    @error($name)
    <span class="invalid-feedback" role="alert">
        <strong>{{ $message }}</strong>
    </span>
    @enderror
</template>
