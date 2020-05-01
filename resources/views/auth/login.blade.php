@extends('jasmine::auth.layout')

@section('title', __('Login'))

@section('sub-title')
    <p class="text-center">

    </p>
@endsection

@section('content')
    <form method="POST" action="{{ route('jasmine.login') }}">
        @csrf

        <div class="form-group">
            <label for="email">{{ __('E-Mail Address') }}</label>

            <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email"
                   dir="ltr" value="{{ old('email') }}" required autocomplete="email" autofocus>

            @error('email')
            <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
                </span>
            @enderror
        </div>

        <div class="form-group">
            <label for="password">{{ __('Password') }}</label>

            <input id="password" type="password" class="form-control @error('password') is-invalid @enderror"
                   dir="ltr" name="password" required autocomplete="current-password">

            @error('password')
            <span class="invalid-feedback" role="alert">
                    <strong>{{ $message }}</strong>
            </span>
            @enderror
        </div>

        <div class="form-group">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="remember" name="remember"
                    {{ old('remember') ? 'checked' : '' }}>
                <label class="custom-control-label" for="remember">{{ __('Remember Me') }}</label>
            </div>
        </div>

        <div class="form-group mt-4">
            <div class="d-flex justify-content-between flex-column flex-md-row">
                <button type="submit" class="btn btn-primary mb-4">
                    {{ __('Login') }}
                </button>
                <a class="btn btn-link" href="{{ route('jasmine.password.request') }}">
                    {{ __('Forgot Your Password?') }}
                </a>
            </div>
        </div>
    </form>
@endsection
