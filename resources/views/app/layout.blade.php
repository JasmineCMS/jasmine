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
<div id="app" data-fm-url="{{ url('file-manager') }}">
    <top-bar :user="{{ Auth::guard('jasmine_web')->user() }}"
             locale-url="{{ route('jasmine.change-locale', '-locale-') }}"
    >
        <template v-slot:center>@stack('top-bar-center')</template>
        <template v-slot:end>@stack('top-bar-end')</template>
    </top-bar>
    <div class="wrapper d-flex">
        <side-bar :menu-items="{{ Jasmine::getSideBarMenuItems()->toJson() }}"></side-bar>
        <div class="flex-fill has-main d-flex flex-column">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="{{ route('jasmine.dashboard') }}">@lang('Dashboard')</a></li>
                    @stack('breadcrumbs')
                    @if(Route::current()->getName() !== 'jasmine.dashboard')
                        <li class="breadcrumb-item active" aria-current="page">@yield('title')</li>
                    @endif
                </ol>
            </nav>
            <main class="px-4 flex-fill">
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
