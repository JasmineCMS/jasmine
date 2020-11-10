@extends('jasmine::app.layout')

@section('title')
    @lang('Redirection')
@endsection

@section('content')
    <div class="mt-2">
        <redirections
            index-url="{{ route('jasmine.redirection.index', ['json' => true]) }}"
            save-url="{{ route('jasmine.redirection.save') }}"
            delete-url="{{ route('jasmine.redirection.delete') }}"
        ></redirections>
    </div>
@endsection
