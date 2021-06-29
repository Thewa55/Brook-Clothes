import React, { useState } from 'react'
import './sign-in.style.scss'

const SignIn = () => {

    const [userInfo, setUserInfo] = useState({email: '', password: ''})

    const handleSubmit = event => {
        event.preventDefault()
        setUserInfo(prevState => ({ ...prevState, email: '', password: ''}))
    }   

    const handleChange = event => {
        const { value, name } = event.target;
        setUserInfo(prevState => ({ ...prevState, [name]: value}))
    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <input 
                    name='email' 
                    type='email' 
                    value={userInfo.email} 
                    onChange = {handleChange}
                    required /> 
                <label>E-mail</label>
                <input 
                    name='password' 
                    type='password' 
                    value={userInfo.password} 
                    onChange= {handleChange}
                    required /> 
                <label>Password</label>
                <input type='submit' value='Submit Form'/>
            </form>
        </div>
    )
}

export default SignIn;