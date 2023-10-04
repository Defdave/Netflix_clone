import React, { useRef } from 'react'
import './SignupScreen.css'
import { auth } from '../firebase'

export default function SignupScreen() {
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const register = (e) => {
        e.preventDefault()

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((userAuth) => console.log(userAuth))
        .catch(error => alert(error.message))
    }

    const signin = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((auth) => {console.log(auth)})
        .catch(error => alert(error.message))
    }

  return (
    <div className='signup_screen'>
        <form className='signup_form'>
            <h1>Sign In</h1>
            <input type='email' ref={emailRef} placeholder='Email'/>
            <input type='password' ref={passwordRef} placeholder='Password' />
            <button onClick={signin}>Sign In</button>

            <h4><span className='signup_screen_gray'>New to Netflix?</span>
            <span className='signup_screen_link' onClick={register}> Sign Up now.</span></h4>
        </form>
    </div>
  )
}
