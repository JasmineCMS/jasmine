<?php
/** @var \Jasmine\Jasmine\Models\JasminePage $page */
/** @var \Jasmine\Jasmine\Bread\Fields\FieldsManifest $manifest */
$manifest = call_user_func(get_class($page) . "::fieldsManifest");


/** @var \Illuminate\Support\ViewErrorBag $errors */
?>

@extends('jasmine::app.app')

@section('title')
    @lang('Edit')
    {{ $page::getPageName() }}
@endsection

@push('breadcrumbs')
    <li class="breadcrumb-item">@lang('Pages')</li>
@endpush

@push('top-bar-center')
    @foreach(Jasmine::getLocales() as $local)
        <a href="{{ request()->fullUrlWithQuery(['_locale' => $local]) }}"
           class="btn @if(request('_locale') === $local) active btn-success @else btn-secondary @endif">
            {{ \Str::title($local) }}
        </a>
    @endforeach
@endpush

@push('top-bar-end')
    <button class="btn btn-primary" @click="remoteSubmit('breadEditForm')">@lang('Save')</button>
@endpush

@section('content')
    <div class="mt-2">
        <form method="post" enctype="multipart/form-data"
              action="{{ route('jasmine.page.update', ['jasminePage' => $page->name, '_locale' => request()->get('_locale')]) }}"
              ref="breadEditForm">
            @csrf
            @method('put')
            <bread-edit :manifest="{{ $manifest->toJson() }}"
                        :breadable="{{ count($page->content) ? json_encode($page->content) : '{}' }}"
                        breadable-key-name="{{ $page->getKeyName() }}"
                        locale="{{ request('_locale', config('jasmine.locale', 'en')) }}"
                        fm-path="Pages/{{ $page->url }}"
                        :errors="{{ $errors->any() ? json_encode($errors->getMessages()) : '{}' }}"
                        :old="{{ count(old()) ? json_encode(old()) : '{}' }}"></bread-edit>
        </form>
    </div>
@endsection
