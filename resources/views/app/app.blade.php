@extends('jasmine::app.layout')
@section('app')
    <top-bar :user="{{ Auth::guard(config('jasmine.auth.guard'))->user() }}">
        <template v-slot:center>@stack('top-bar-center')</template>
        <template v-slot:end>@stack('top-bar-end')</template>
    </top-bar>
    <div class="wrapper d-flex">
        <side-bar :menu-items="{{ json_encode(Jasmine::getSideBarMenuItems()) }}"></side-bar>
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

            <footer class="d-flex mt-4 justify-content-center align-items-center" dir="ltr">
                <div class="p-2">
                    <p class="m-0">
                        <small><a href="https://github.com/JasmineCMS/jasmine" target="_blank">JasmineCMS</a></small>,

                        <small>
                            Sponsored by
                        </small>
                        <a href="https://triple.co.il/en" target="_blank" title="Triple Internet Solutions">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24"
                                 shape-rendering="geometricPrecision"
                                 text-rendering="geometricPrecision" image-rendering="optimizeQuality"
                                 fill-rule="evenodd" clip-rule="evenodd"
                                 viewBox="0 0 59.598 30.873">
                                <path fill="#FEFEFE" d="M2.177 3.141h13.109v25.465H2.177z"/>
                                <path fill="#DE0000"
                                      d="M4.949 0h7.406a4.944 4.944 0 014.944 4.944v21.002c0 2.722-2.222 4.927-4.944 4.927H4.949C2.212 30.873 0 28.668 0 25.946V4.944A4.939 4.939 0 014.949 0zm9.516 5.216H3.368v1.821h4.707v19.521h1.706V7.037h4.684V5.216z"/>
                                <path fill="#1A1A1A" fill-rule="nonzero"
                                      d="M21.438 21.999V7.684h1.691v2.187c.435-1.015.821-1.673 1.196-1.995.369-.34.771-.499 1.208-.499.64 0 1.287.254 1.933.771l-.664 2.24c-.465-.34-.918-.499-1.366-.499-.42 0-.788.159-1.111.481-.324.307-.551.76-.692 1.322-.21.855-.306 1.802-.306 2.835v7.472h-1.889zm7.15-16.993v-2.75h1.889v2.75h-1.889zm0 16.993V7.684h1.889v14.315h-1.889zm4.752 5.494V7.684h1.712v1.881c.403-.725.867-1.27 1.366-1.645.516-.351 1.13-.543 1.854-.543.947 0 1.788.323 2.512.947.726.629 1.271 1.514 1.645 2.642.368 1.162.545 2.404.545 3.771 0 1.463-.21 2.772-.614 3.946-.402 1.173-.998 2.064-1.768 2.687-.777.613-1.594.936-2.45.936-.629 0-1.19-.159-1.689-.516a4.077 4.077 0 01-1.225-1.287v6.99H33.34zm1.712-12.564c0 1.838.289 3.192.867 4.077.58.867 1.271 1.322 2.093 1.322.84 0 1.549-.472 2.143-1.373.596-.918.885-2.32.885-4.218 0-1.837-.272-3.188-.868-4.089-.578-.918-1.275-1.355-2.081-1.355-.788 0-1.497.466-2.108 1.435-.625.964-.93 2.364-.93 4.201h-.001zm10.16 7.07V2.256h1.872v19.743h-1.872zm12.373-4.638l1.944.34c-.305 1.446-.867 2.592-1.689 3.397-.839.806-1.9 1.208-3.169 1.208-1.627 0-2.921-.64-3.868-1.934-.951-1.287-1.417-3.09-1.417-5.408 0-2.399.482-4.269 1.435-5.591.964-1.338 2.205-1.996 3.737-1.996 1.479 0 2.687.658 3.622 1.951.947 1.303 1.418 3.141 1.418 5.488 0 .148 0 .357-.018.647h-8.26c.062 1.576.402 2.766 1.026 3.606.612.839 1.389 1.259 2.318 1.259a2.47 2.47 0 001.759-.709c.499-.47.868-1.225 1.162-2.258zm-6.168-3.878h6.179c-.08-1.208-.316-2.115-.709-2.711-.594-.929-1.366-1.399-2.318-1.399-.868 0-1.594.373-2.172 1.11-.578.744-.918 1.742-.98 3z"/>
                            </svg>
                        </a>

                    </p>

                </div>
            </footer>

        </div>
    </div>

    <form ref="logoutForm" action="{{ route('jasmine.logout') }}" method="post" class="d-none">
        @csrf
    </form>
@endsection
