import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='container-fluid p-0'>
        <div className='home-hero p-0'></div>
        <div className='container-fluid signup-bg'>
            <div className='row'>
                <div className='col text-center text-primary m-5'>
                    <h1>Sign In</h1>
                </div>
            </div>
            <div className='row '>
          <div className='col d-flex justify-content-center form-floating m-auto '>
            <input type="text" className="form-control m-5" id="floatingUsername" placeholder="user123" />
            <label htmlFor='floatingUsername' className='mx-5 w-25'>Username</label>
          </div>
        </div>

            <div className='row'>
                <div className='col d-flex justify-content-center form-floating m-auto'>
                    <input type="password" className="form-control m-5" id="floatingpassword" placeholder='password123' />
                    <label htmlFor='floatingpassword' className='mx-5 w-25'>Password</label>
                </div>
            </div>
            <div className='row'>
                <div className='col text-center m-1'>
                    <Link to={''} className='link-primary text-decoration-none'>Reset Password</Link>
                </div>
                <div className='col text-center m-1'>
                    <Link to={'/signup'} className='link-primary text-decoration-none'>Sign Up</Link>
                </div>
            </div>
            <div className='row'>
                <div className='col text-center m-3'>
                    <button type="button" className="btn btn-primary w-25 m-1">Sign in <svg className='ms-1' xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
  <path d="M10.6258 9.8129L8.39305 12.0457M13.3051 12.4922L11.0724 14.725M9.7327 19.637C7.49994 21.8698 5.26718 21.4233 3.48097 19.637C1.69477 17.8508 1.24821 15.6181 3.48097 13.3853L6.16029 10.706L12.412 16.9577L9.7327 19.637ZM13.3051 3.56117C15.5379 1.32841 17.7706 1.77497 19.5577 3.56117C21.3448 5.34738 21.7896 7.58014 19.5577 9.8129L16.8784 12.4922L10.6258 6.24049L13.3051 3.56117Z" stroke="white" stroke-width="1.0992"/>
</svg> </button>
                </div>
            </div>  
        </div>
    </div>
  )
}

export default Login