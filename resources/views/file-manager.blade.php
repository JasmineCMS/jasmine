<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" dir="{{ $rtl ? 'rtl' : 'ltr' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <meta name="csrf-token" content="{{ csrf_token() }}">

    <link rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap{{ $rtl ? '.rtl' : ''}}.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <script>
        /** @type */
        window.fmSettings = @js($settings);
    </script>
    <style>
        html, body {
            height: 100%;
        }
    </style>

    @if (is_file(public_path('jasmine-public/hot')))
        {{
            Vite::useHotFile(public_path('jasmine-public/hot'))->useBuildDirectory('jasmine-public/build')
                ->withEntryPoints(['file-manager/css/file-manager.css', 'file-manager/js/file-manager.js'])
        }}
    @else
        <link rel="stylesheet" href="{{ asset('jasmine-public/build/file-manager/css/file-manager.css') }}">
        <script defer src="{{ asset('jasmine-public/build/file-manager/js/file-manager.js') }}"></script>
    @endif

    <style>
        #fm .btn-group + .btn-group {
            margin-inline-start: 0.5rem;
        }

        [dir="rtl"] {
            .bi-skip-backward-fill::before {
                transform: rotate(180deg);
            }

            .bi-skip-forward-fill::before {
                transform: rotate(180deg);
            }

            .fm-content {
                padding-right: 1rem;
                padding-left: unset;
            }
        }

    </style>
</head>
<body>
<div class="container-fluid h-100">
    <div class="row h-100">
        <div class="col-md-12 h-100">
            <div id="fm" class="h-100"></div>
        </div>
    </div>
</div>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const extensions = new URLSearchParams(document.location.search).get('extensions')?.split(',') ?? [];
        window._HTTP?.interceptors.response.use(res => {
            if (res.config?.url.includes('content') && Array.isArray(res.data?.files) && extensions.length > 0) {
                res.data.files = res.data.files.filter(file => extensions.includes(file.extension));
            }

            return res;
        }, error => Promise.reject(error));
    });
</script>
</body>
</html>
