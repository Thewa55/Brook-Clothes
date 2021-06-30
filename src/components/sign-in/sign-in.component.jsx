import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.style.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils'


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
                <FormInput 
                    name='email' 
                    type='email' 
                    value={userInfo.email} 
                    handleChange = {handleChange}
                    label='E-mail'
                    required /> 
                <FormInput 
                    name='password' 
                    type='password' 
                    value={userInfo.password} 
                    handleChange= {handleChange}
                    label='Password'
                    required />
                <div className='buttons'>     
                    <CustomButton type='submit'> Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In with Google </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;