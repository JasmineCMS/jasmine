<?php
/** @var \Jasmine\Jasmine\Models\JasminePage $page */
/** @var \Jasmine\Jasmine\Bread\Fields\FieldsManifest $manifest */
$manifest = call_user_func(get_class($page) . "::fieldsManifest");


/** @var \Illuminate\Support\ViewErrorBag $errors */
?>

@extends('jasmine::app.layout')

@section('title')
    @lang('Edit')
    {{ $page::getPageName() }}
@endsection

@push('breadcrumbs')
    <li class="breadcrumb-item">@lang('Pages')</li>
@endpush

@section('top-bar-center')
    <button class="btn btn-primary" @click="remoteSubmit('breadEditForm')">@lang('Save')</button>
@endsection

@section('content')
    <div class="mt-2">
        <form action="{{ route('jasmine.page.update', $page->name) }}" method="post" enctype="multipart/form-data"
              ref="breadEditForm">
            @csrf
            @method('put')
            <bread-edit :manifest="{{ $manifest->toJson() }}"
                        :breadable="{{ $page ?? '{}' }}"
                        :errors="{{ $errors->any() ? json_encode($errors->getMessages()) : '{}' }}"
                        :old="{{ count(old()) ? json_encode(old()) : '{}' }}"></bread-edit>
        </form>
    </div>
@endsection
