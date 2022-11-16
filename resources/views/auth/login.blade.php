@extends('jasmine::auth.layout')

@section('title', __('Login'))

@section('content')
    <form action="{{ route('jasmine.login') }}" method="post">
        @csrf
        <div class="f-group">
            <label for="email">{{ __('E-Mail Address') }}</label>
            <input id="email" type="email" class="@error('email') is-invalid @enderror" name="email"
                   dir="ltr" value="{{ old('email') }}" required autocomplete="email" autofocus>
            @error('email')
            <div role="alert"><span>{{ $message }}</span></div>
            @enderror
        </div>
        <div class="f-group">
            <label for="password">{{ __('Password') }}</label>
            <input id="password" type="password" class="@error('password') is-invalid @enderror"
                   name="password" required autocomplete="current-password">
            @error('password')
            <div role="alert"><span>{{ $message }}</span></div>
            @enderror
        </div>
        <div class="f-group">
            <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
            <label for="remember">{{ __('Remember Me') }}</label>
        </div>
        <div style="text-align: center;margin-top: 1.5rem;">
            <button type="submit">{{ __('Login') }}</button>
        </div>
        <div style="text-align: center;margin-top: 1.5rem;">
            <a href="{{ route('jasmine.password.request') }}">{{ __('Forgot Your Password?') }}</a>
        </div>

        @if($ssos = \Jasmine\Jasmine\Facades\Jasmine::getOauth2Ssos())
            <div style="text-align: center; margin: 1rem 0;">Or login via</div>
            <div class="ssos">
                @foreach($ssos as $sso)
                    <a href="{{ route('jasmine.sso.oauth2.attempt', ['provider' => $sso['name']]) }}"
                       title="{{ $sso['name'] }}">
                        <img src="{{ $sso['icon'] }}" alt="{{ $sso['name'] }}">
                    </a>
                @endforeach
            </div>
        @endif
    </form>
@endsection
