<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
      dir="{{ in_array(app()->getLocale(), ['ar','dv','fa','ha','he','ks','ku','ps','sd','ur','yi']) ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>

    {{-- CSRF Token --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <meta name="routes" content="{{ route('jasmine.ziggy') }}">
    <meta name="globals" content="{{ route('jasmine.globals') }}">
    <meta name="locale" content="{{ route('jasmine.locale') }}">

    <style>
        :root {--blue: #4e90fe; --pink: #da46ae;}
        @keyframes ls {0%{ transform: rotate(0deg);}100% { transform: rotate(360deg);}}
    </style>
    @inertiaHead
    {{-- Styles --}}
    <link href="{{ asset(mix('css/vendor.css', 'jasmine-public/app-assets')) }}" rel="stylesheet">
    <link href="{{ asset(mix('css/app.css', 'jasmine-public/app-assets')) }}" rel="stylesheet">

    @foreach(Jasmine::getCustomStyles() as $style)
        <link rel="stylesheet" href="{{ $style }}">
    @endforeach

    @stack('styles')
</head>
<body class="sb-nav-fixed">
<x-jasmine::loader/>
@inertia
{{-- Scripts --}}
<script src="{{ asset(mix('js/manifest.js', 'jasmine-public/app-assets')) }}" defer></script>
<script src="{{ asset(mix('js/vendor.js', 'jasmine-public/app-assets')) }}" defer></script>
<script src="{{ asset(mix('js/app.js', 'jasmine-public/app-assets')) }}" defer></script>

@stack('scripts')
@foreach(Jasmine::getCustomJses() as $js)
    <script src="{{ $js }}" defer></script>
@endforeach
</body>
</html>
