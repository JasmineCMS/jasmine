@extends('jasmine::auth.layout')

@section('title', __('Reset Password'))

@section('content')
    @if (session('status'))
        <div class="alert alert-success" role="alert">{{ session('status') }}</div>
    @endif

    <form action="{{ route('jasmine.password.request') }}" method="post">
        @csrf
        <div class="f-group">
            <label for="email">{{ __('E-Mail Address') }}</label>
            <input id="email" type="email" class="@error('email') is-invalid @enderror" name="email"
                   dir="ltr" value="{{ old('email') }}" required autocomplete="email" autofocus>
            @error('email')
            <div role="alert"><span>{{ $message }}</span></div>
            @enderror
        </div>
        <div style="text-align: center;margin-top: 1.5rem;">
            <button type="submit">{{ __('Send') }}</button>
        </div>
        <div style="text-align: center;margin-top: 1.5rem;">
            <a href="{{ route('jasmine.login') }}">{{ __('Back to login') }}</a>
        </div>
    </form>
@endsection
