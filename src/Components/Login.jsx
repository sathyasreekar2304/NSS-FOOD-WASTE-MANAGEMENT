import React from 'react'

const Login = () => {
    return (
        <>
        <div className='my-5 container col-md-6 col-10 mx-auto'>
        <form>

<h3 className='text-center'>Log in</h3>

<div className="form-group">
    <label>Email</label>
    <input type="email" className="form-control mb-2" placeholder="Enter email" />
</div>

<div className="form-group">
    <label>Password</label>
    <input type="password" className="form-control mb-2" placeholder="Enter password" />
</div>

<div className="form-group">
    <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input mr-1" id="customCheck1" />
        <label className="custom-control-label mb-2" htmlFor="customCheck1">Remember me</label>
    </div>
</div>

<button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>
<p className="forgot-password text-right">
    Forgot <a href="#">password?</a>
</p>
</form>
            </div>
        </>
    )
}

export default Login;
