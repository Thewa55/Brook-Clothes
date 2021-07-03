import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.style.scss'
import { signInWithGoogle, auth } from '../../firebase/firebase.utils'


const SignIn = () => {

    const [userInfo, setUserInfo] = useState({email: '', password: ''})

    const handleSubmit = async event => {
        event.preventDefault()

        const {email, password} = userInfo
        try {

            //auth method where you can pass the email and password to be authenticated
            await auth.signInWithEmailAndPassword(email, password);

            setUserInfo(prevState => ({ ...prevState, email: '', password: ''}))
        } catch (error) {
            console.log(error)
        }
        
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
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn> Google Sign In </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;