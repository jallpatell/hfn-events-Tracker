import React from 'react'

const App = () => {
  return (
    <div className='login-container'>
      <h2 className='form-title'> Log-in with</h2>
      <div className='social-login'>
        <button className="social-button">
          <img src="../logos/google.svg" alt="Google" className="social-icon"/>Google
          </button>
          <button className="social-button">
          <img src="../logos/apple.svg" alt="Apple" className="social-icon"/>Apple
          </button>
      </div>
      <p className="seperator"> <span>or</span></p>
      <form action='#'className='login-form'>
        <div className='input-wrapper'>
          <input type='email' placeholder='Email address'
          className='input-feild' required />
          <i class="material-symbols-rounded">mail</i>
        </div>

        <div className='input-wrapper'>
          <input type='password' placeholder='Password'
          className='input-feild' required />
          <i class="material-symbols-rounded ">lock</i>
        </div>
        <a href='#' className='forgot-password-link'> Forgot Password?</a>
        <button className="login-button">LogIn</button>
      </form>
      <p className="signup-text">Don't have an account? <a href="#">Sign-up now</a></p>
      
    </div>
  )
}

export default App