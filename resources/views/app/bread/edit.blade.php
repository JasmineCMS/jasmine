<?php
/** @var string $breadableName */

/**
 * @var \Jasmine\Jasmine\Bread\BreadableInterface|\Illuminate\Database\Eloquent\Model $breadable
 */

$action = isset($breadable)
    ? route('jasmine.bread.update', [$breadableName, $breadable->{$breadable->getRouteKeyName()}])
    : route('jasmine.bread.store', $breadableName);

/** @var \Jasmine\Jasmine\Bread\Fields\FieldsManifest $manifest */
$manifest = call_user_func("$breadableName::fieldsManifest");

/** @var \Illuminate\Support\ViewErrorBag $errors */
?>

@extends('jasmine::app.layout')

@section('title')
    @if(isset($breadable))
        @lang('Edit')
        {{ call_user_func("$breadableName::getSingularTitle") }}
        {{ $breadable->{$breadable->getRouteKeyName()} }}
    @else
        @lang('New')
        {{ call_user_func("$breadableName::getSingularTitle") }}
    @endif
@endsection

@section('top-bar-center')
    <button class="btn btn-primary" @click="remoteSubmit('breadEditForm')">@lang('Save')</button>
@endsection

@push('breadcrumbs')
    <li class="breadcrumb-item"><a href="{{ route('jasmine.bread.index', $breadableName) }}">
            {{ call_user_func("$breadableName::getPluralTitle") }}
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
