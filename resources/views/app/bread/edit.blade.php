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

/** @var \Illuminate\Database\Eloquent\Model|\Jasmine\Jasmine\Bread\BreadableInterface $breadableInstance */
$breadableInstance = $breadable ?? new $breadableName;
?>

@extends('jasmine::app.app')

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
    @if(in_array(Translatable::class, class_uses($breadableName)))
        @foreach(Jasmine::getLocales() as $local)
            <a href="{{ \Jasmine\Jasmine\setUrlGetParam('_locale', $local) }}"
               class="btn @if(request('_locale') === $local) active btn-success @else btn-secondary @endif">
                {{ \Illuminate\Support\Str::title($local) }}
            </a>
        @endforeach
    @endif
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
        <form action="{{ $action }}" method="post" enctype="multipart/form-data" ref="breadEditForm" @submit.prevent>
            @csrf
            @if(isset($breadable))
                @method('put')
            @endif
            <bread-edit :manifest="{{ $manifest->toJson() }}"
                        :breadable="{{ $breadable ?? '{}' }}"
                        breadable-key-name="{{ $breadableInstance->getKeyName() }}"
                        locale="{{ request('_locale') }}"
                        fm-path="{{ $breadableInstance::getPluralName() }}/{{ $breadableInstance->getKey() }}"
                        :errors="{{ $errors->any() ? json_encode($errors->getMessages()) : '{}' }}"
                        :old="{{ count(old()) ? json_encode(old()) : '{}' }}"></bread-edit>
        </form>
    </div>
@endsection
