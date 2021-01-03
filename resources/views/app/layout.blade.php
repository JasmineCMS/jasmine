<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
      dir="{{ __('jasmine::vars.dir') === 'rtl' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- CSRF Token --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')@if(View::hasSection('title')) | @endif{{ config('app.name') }}</title>

    {{-- Scripts --}}
    <script src="{{ asset(mix('js/manifest.js', \Jasmine::appAssetsManifest())) }}" defer></script>
    <script src="{{ asset(mix('js/vendor.js', \Jasmine::appAssetsManifest())) }}" defer></script>
    <script src="{{ asset(mix('js/app.js', \Jasmine::appAssetsManifest())) }}" defer></script>

    {{-- Fonts --}}
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Assistant:200,300,400,600,700,800&display=swap&subset=hebrew"
          rel="stylesheet">

    {{-- Styles --}}
    <link href="{{ asset(mix('css/vendor.css', \Jasmine::appAssetsManifest())) }}" rel="stylesheet">
    <link href="{{ asset(mix('css/app.css', \Jasmine::appAssetsManifest())) }}" rel="stylesheet">

    @foreach(Jasmine::getCustomStyles() as $style)
        <link rel="stylesheet" href="{{ $style }}">
    @endforeach

    @stack('styles')
</head>
<body>
<div id="app"
     data-fm-tinymce5-url="{{ route('jasmine.fm.show.tinymce5') }}"
     data-fm-url="{{ url('file-manager') }}">
    @yield('app')
</div>

@stack('scripts')
@foreach(Jasmine::getCustomJses() as $js)
    <script src="{{ $js }}" defer></script>
@endforeach
</body>
</html>
