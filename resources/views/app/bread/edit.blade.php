<?php
/** @var string $breadableName */

use Jasmine\Jasmine\Bread\Translatable;

/**
 * @var \Jasmine\Jasmine\Bread\BreadableInterface|\Illuminate\Database\Eloquent\Model|Translatable $breadable
 */

$actionParams = ['breadableName' => $breadableName];

if (in_array(Translatable::class, class_uses($breadableName))) {
    $actionParams['_locale'] = \request()->get('_locale', 'en');
}

$action = isset($breadable)
    ? route('jasmine.bread.update', array_merge($actionParams, ['breadableId' => $breadable->{$breadable->getRouteKeyName()}]))
    : route('jasmine.bread.store', $actionParams);

/** @var \Jasmine\Jasmine\Bread\Fields\FieldsManifest $manifest */
$manifest = call_user_func("$breadableName::fieldsManifest");

/** @var \Illuminate\Support\ViewErrorBag $errors */
?>

@extends('jasmine::app.layout')

@section('title')
    @if(isset($breadable))
        @lang('Edit')
        {{ call_user_func("$breadableName::getSingularName") }}
        {{ $breadable->{$breadable->getRouteKeyName()} }}
    @else
        @lang('New')
        {{ call_user_func("$breadableName::getSingularName") }}
    @endif
@endsection

@push('top-bar-center')
    @foreach(Jasmine::getLocales() as $local)
        <a href="{{ \Jasmine\Jasmine\setUrlGetParam('_locale', $local) }}"
           class="btn btn-info @if(request('_locale') === $local) active @endif">
            {{ \Illuminate\Support\Str::title($local) }}
        </a>
    @endforeach
@endpush

@push('top-bar-end')
    <button class="btn btn-primary" @click="remoteSubmit('breadEditForm')">@lang('Save')</button>
@endpush

@push('breadcrumbs')
    <li class="breadcrumb-item"><a href="{{ route('jasmine.bread.index', $breadableName) }}">
            {{ call_user_func("$breadableName::getPluralName") }}
        </a></li>
@endpush

@section('content')
    <div class="mt-2">
        <form action="{{ $action }}" method="post" enctype="multipart/form-data" ref="breadEditForm">
            @csrf
            @if(isset($breadable))
                @method('put')
            @endif
            <bread-edit :manifest="{{ $manifest->toJson() }}"
                        :breadable="{{ $breadable ?? '{}' }}"
                        :errors="{{ $errors->any() ? json_encode($errors->getMessages()) : '{}' }}"
                        :old="{{ count(old()) ? json_encode(old()) : '{}' }}"></bread-edit>
        </form>
    </div>
@endsection
