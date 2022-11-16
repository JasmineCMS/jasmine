<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}"
      dir="{{ in_array(app()->getLocale(), ['ar','dv','fa','ha','he','ks','ku','ps','sd','ur','yi']) ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>File Manager</title>
    {{-- CSRF Token --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <style>
        {!! file_get_contents(base_path('./vendor/alexusmai/laravel-file-manager/resources/assets/css/file-manager.css')) !!}
    </style>
    @foreach(Jasmine::getCustomStyles() as $style)
        <link rel="stylesheet" href="{{ $style }}">
    @endforeach
</head>
<body>
<div class="container-fluid">
    <div class="row">
        <div class="col-md-12" id="fm-main-block">
            <div id="fm"></div>
        </div>
    </div>
</div>
<script>
    {!! file_get_contents(base_path('./vendor/alexusmai/laravel-file-manager/resources/assets/js/file-manager.js')) !!}

    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('fm-main-block').setAttribute('style', 'height:' + window.innerHeight + 'px');
        fm.$store.commit('fm/setFileCallBack', function (fileUrl) {
            (window.parent || window).dispatchEvent(new CustomEvent('fm-chosen', {detail: {url: fileUrl}}));
        });
    });
</script>
@foreach(Jasmine::getCustomJses() as $js)
    <script src="{{ $js }}" defer></script>
@endforeach
</body>
</html>
