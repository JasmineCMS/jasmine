@extends('jasmine::auth.layout')

@section('title', __('Otp'))

@section('content')
    <form action="{{ route('jasmine.otp') }}" method="post">
        @csrf
        <div class="f-group">
            <label for="code">{{ __('Two factor verification') }}</label>
            <input id="code" type="text" inputmode="numeric" style="text-align: center;"
                   class="@error('code') is-invalid @enderror" name="code" minlength="6" maxlength="6"
                   dir="ltr" value="{{ old('code') }}" required autocomplete="off" autofocus>
            @error('code')
            <div role="alert"><span>{{ $message }}</span></div>
            @enderror
        </div>
        <div class="f-group">
            <input type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
            <label for="remember">{{ __('Don\'t require code on this device') }}</label>
        </div>
        <div style="text-align: center;margin-top: 1.5rem;">
            <button type="submit">{{ __('Continue') }}</button>
        </div>
    </form>
@endsection
