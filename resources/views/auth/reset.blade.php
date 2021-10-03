@extends('jasmine::auth.layout')

@section('title', __('Reset Password'))

@section('content')
    <form action="{{ route('jasmine.password.reset', $token) }}" method="post">
        @csrf
        <input type="hidden" name="token" value="{{ $token }}">
        <div class="f-group">
            <label for="email">{{ __('E-Mail Address') }}</label>
            <input id="email" type="email" class="@error('email') is-invalid @enderror" name="email"
                   dir="ltr" value="{{ $email ?? old('email') }}" required autocomplete="email" autofocus>
            @error('email')
            <div role="alert"><span>{{ $message }}</span></div>
            @enderror
        </div>
        <div class="f-group">
            <label for="password">{{ __('Password') }}</label>
            <input id="password" type="password" class="@error('password') is-invalid @enderror"
                   name="password" required autocomplete="new-password">
            @error('password')
            <div role="alert"><span>{{ $message }}</span></div>
            @enderror
        </div>
        <div class="f-group">
            <label for="password-confirm">{{ __('Confirm Password') }}</label>
            <input id="password-confirm" type="password"
                   name="password_confirmation" required autocomplete="new-password">
        </div>
        <div style="text-align: center;margin-top: 1.5rem;">
            <button type="submit">{{ __('Reset Password') }}</button>
        </div>
        <div style="text-align: center;margin-top: 1.5rem;">
            <a href="{{ route('jasmine.login') }}">{{ __('Back to login') }}</a>
        </div>
    </form>
@endsection
