@extends('jasmine::app.layout')

@section('title')
    @lang('File Manager')
@endsection


@section('content')
    <div class="mt-2 h-100">
        <file-manager-wrapper></file-manager-wrapper>
    </div>
@endsection
