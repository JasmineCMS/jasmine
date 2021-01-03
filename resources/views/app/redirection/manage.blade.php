@extends('jasmine::app.app')

@section('title')
    @lang('Redirection')
@endsection

@push('breadcrumbs')
    <li class="breadcrumb-item">@lang('Tools')</li>
@endpush

@section('content')
    <div class="mt-2">
        @error('file')
        <div class="alert alert-danger" role="alert">
            {{ $message }}
        </div>
        @enderror
        <redirections
            index-url="{{ route('jasmine.redirection.index', ['json' => true]) }}"
            save-url="{{ route('jasmine.redirection.save') }}"
            delete-url="{{ route('jasmine.redirection.delete') }}"
            export-url="{{ route('jasmine.redirection.export') }}"
            import-url="{{ route('jasmine.redirection.import') }}"
        ></redirections>
    </div>
@endsection
