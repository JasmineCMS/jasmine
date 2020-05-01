<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ __('jasmine::vars.dir') === 'rtl' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- CSRF Token --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')@if(View::hasSection('title')) | @endif{{ config('app.name') }}</title>

    {{-- Fonts --}}
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Assistant:200,300,400,600,700,800&display=swap&subset=hebrew"
          rel="stylesheet">

    {{-- Styles --}}
    <link href="{{ asset(mix('css/vendor.css', 'jasmine-public/auth-assets')) }}" rel="stylesheet">
    <link href="{{ asset(mix('css/app.css', 'jasmine-public/auth-assets')) }}" rel="stylesheet">
</head>
<body class="vh-100">
<div class="row no-gutters justify-content-center align-items-center h-100">
    <div class="col-xl-3 col-md-5 col-9 d-flex flex-column align-items-center">
        <div class="card w-100 bunny pt-4">
            <div class="card-body">
                <h1 class="h4 text-center mb-4">@yield('title')</h1>
                @yield('content')
            </div>
        </div>
        <div class="mt-4 d-flex">
            <a href="{{ route('jasmine.change-locale', 'en') }}" class="px-2 text-white">English</a>
            |
            <a href="{{ route('jasmine.change-locale', 'he') }}" class="px-2 text-white">עברית</a>
        </div>
    </div>
</div>
</body>
</html>
