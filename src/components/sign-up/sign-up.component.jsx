import React, { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.style.scss'

const SignUp = () => {
    const [userSignUp, setUserSignUp] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userSignUp;

    const handleChange = event => {
        const { value, name } = event.target;
        setUserSignUp(prevState => ({ ...prevState, [name]: value}))
    }

    const handleSubmit = async event => {
        event.preventDefault()
        
        const { displayName, email, password, confirmPassword } = userSignUp;

        if(password !== confirmPassword){
            alert('Password does not match');
            return
        }

        try {

            //auth method to create a new user in firebase with email and password
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            await createUserProfileDocument(user, {displayName})

            setUserSignUp(prevState => ({ ...prevState, email: '', password: ''}))
        } catch (error) {
            console.log(error)
        }

        
    }   

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign Up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                  type='text'
                  name='displayName'
                  value={displayName}
                  onChange={handleChange}
                  label='Display Name'
                  required
                ></FormInput>
                <FormInput 
                  type='email'
                  name='email'
                  value={email}
                  onChange={handleChange}
                  label='Email'
                  required
                />
                <FormInput 
                  type='password'
                  name='password'
                  value={password}
                  onChange={handleChange}
                  label='Password'
                  required
                />
                <FormInput 
                  type='password'
                  name='confirmPassword'
                  value={confirmPassword}
                  onChange={handleChange}
                  label='Confirm Password'
                  required
                />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;