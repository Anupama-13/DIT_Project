<!DOCTYPE html>
<html>
<head>
    <title>Student Login Page</title>
    @include('bootstrap')
    <link rel="stylesheet" href="{{ asset('css/basicStyle.css') }}">

</head>
<body>
    <x-header></x-header>
    <div class="form-container">
        @if ($message = session('success'))
            <div class="alert alert-success">
                {{ $message }}
            </div>
        @endif
        <h2>Login Form</h2>
        <form class='form' method="post" action="verify">
            @csrf
            @php
                session()->start();
            @endphp
            <label for="student_id" name="username">Username</label>
            <input type="text" name="student_id" ><br><br>
            <label for="password" name="password">Password</label>
            <input type="password" name="password"><br><br>
            <input type="submit" name="submit" value="Login"><br><br>
        </form>
        <a class="forgot-password" href="/otpVerification">Forgot Password?</a><br><br>
        @if (session('error'))
        <div class="alert alert-danger" style="color:red;">
            {{ session('error') }}
            {{session()->forget('error')}}

        </div>
    @endif
    </div>
    <x-footer></x-footer>
</body>
</html>
