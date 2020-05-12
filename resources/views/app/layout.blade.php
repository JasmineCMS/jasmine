<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ __('jasmine::vars.dir') === 'rtl' ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    {{-- CSRF Token --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('title')@if(View::hasSection('title')) | @endif{{ config('app.name') }}</title>

    {{-- Scripts --}}
    <script src="{{ asset(mix('js/manifest.js', 'jasmine-public/app-assets')) }}" defer></script>
    <script src="{{ asset(mix('js/vendor.js', 'jasmine-public/app-assets')) }}" defer></script>
    <script src="{{ asset(mix('js/app.js', 'jasmine-public/app-assets')) }}" defer></script>

    {{-- Fonts --}}
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Assistant:200,300,400,600,700,800&display=swap&subset=hebrew"
          rel="stylesheet">

    {{-- Styles --}}
    <link href="{{ asset(mix('css/vendor.css', 'jasmine-public/app-assets')) }}" rel="stylesheet">
    <link href="{{ asset(mix('css/app.css', 'jasmine-public/app-assets')) }}" rel="stylesheet">
</head>
<body>
<div id="app">
    <top-bar :user="{{ Auth::guard('jasmine_web')->user() }}"
             locale-url="{{ route('jasmine.change-locale', '-locale-') }}"
    >
        @if(View::hasSection('top-bar-center'))
            <template v-slot:center>@yield('top-bar-center')</template>
        @endif
        @if(View::hasSection('top-bar-end'))
            <template v-slot:end>@yield('top-bar-end')</template>
        @endif
    </top-bar>
    <div class="wrapper d-flex">
        <side-bar :menu-items="{{ Jasmine::getSideBarMenuItems()->toJson() }}"></side-bar>
        <div class="flex-fill has-main">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('jasmine.dashboard') }}">@lang('Dashboard')</a></li>
                    @stack('breadcrumbs')
                    @if(Route::current()->getName() !== 'jasmine.dashboard')
                        <li class="breadcrumb-item active" aria-current="page">@yield('title')</li>
                    @endif
                </ol>
            </nav>
            <main class="px-4">
                @yield('content')
            </main>
        </div>
    </div>

    <form ref="logoutForm" action="{{ route('jasmine.logout') }}" method="post" class="d-none">
        @csrf
    </form>
</div>

@stack('scripts')
</body>
</html>