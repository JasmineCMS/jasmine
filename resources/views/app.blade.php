<!doctype html>
<html
    lang="{{ str_replace('_', '-', app()->getLocale()) }}"
    dir="{{ in_array(app()->getLocale(), ['ar','dv','fa','ha','he','ks','ku','ps','sd','ur','yi']) ? 'rtl' : 'ltr' }}"
    class="h-full bg-gray-50 dark:bg-gray-900"
>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{ Jasmine::vite($page) }}
    @foreach(Jasmine::getCustomStyles() as $style)
        <link rel="stylesheet" href="{{ $style }}">
    @endforeach
    <x-inertia::head>
        <title>{{ config('app.name', 'Laravel') }}</title>
    </x-inertia::head>
</head>
<body class="font-sans antialiased h-full">
<div id="loader"></div>
<x-inertia::app/>
@foreach(Jasmine::getCustomScripts() as $js)
    <script src="{{ $js }}" defer></script>
@endforeach
</body>
</html>
