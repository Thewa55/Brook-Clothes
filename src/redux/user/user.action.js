import UserActionTypes from "./user.types"

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
});

export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

//refactored to only use one sign-in
// export const googleSignInSuccess = user => ({
//     type: UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
//     payload: user
// });

// export const googleSignInFailure = error => ({
//     type: UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
//     payload: error
// });

// export const emailSignInSuccess = user => ({
//     type: UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
//     payload: user
// });

// export const emailSignInFailure = error => ({
//     type: UserActionTypes.EMAIL_SIGN_IN_FAILURE,
//     payload: error
// });