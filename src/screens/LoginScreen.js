import React from 'react'
import './LoginScreen.css'
import logo from '../imgs/netflix-logo.png'
import SignupScreen from './SignupScreen'

export default function LoginScreen() {
  const [signup, setSignup] = React.useState(false)

  return (
    <div className='login_screen'>
        <div className='login_screen_bg'>
            <img src={logo} className='login_screen_logo' alt='Netflix-logo'/>
            <button className='login_screen_button' onClick={() => setSignup(true)}>Sign In</button>

            <div className='login_screen_gradient' />
        </div>

        <div className='login_screen_body'>
          {signup?
          <SignupScreen /> :
          <>
          <h1>Unlimited fims, Tv programmes and more.</h1>
          <h2>Watch anywhere, Cancel at any time</h2>
          <h3>Ready to watch?Enter your email to create or restart your membership</h3>

          <div className='login_screen_input' >
            <form>
            <input type='email' placeholder='Email address' />
            <button className='login_screen_button_get_started' onClick={() => setSignup(true)}>Get Started</button>
            </form>
          </div>
          </>
}
        </div>
    </div>
  )
}
