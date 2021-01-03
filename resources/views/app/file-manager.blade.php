@extends('jasmine::app.app')

@section('title')
    @lang('File Manager')
@endsection


@section('content')
    <div class="h-100 pb-4">
        <file-manager-wrapper></file-manager-wrapper>
    </div>
@endsection
