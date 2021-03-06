import { takeLatest, put, all, call } from "@redux-saga/core/effects";
import UserActionTypes from "./user.types";
import { auth, googleProvider, createUserProfileDocument } from "../../firebase/firebase.utils";
//import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure } from "./user.action";
import { signInSuccess, signInFailure, signOutFailure, signOutSuccess, signOutStart } from "./user.action";

export function* getSnapshotFromUserAuth(userAuth){
    try{
    const userRef = yield call (createUserProfileDocument, userAuth)

    const userSnapShot = yield userRef.get()

    //the put(googleSignInSuccess) is similar to how we originally had it in the app.js file where we dispatched the user information into redux
    // dispatch(setCurrentUser(
    //     {id:snapShot.id,
    //     ...snapShot.data()}
    //   ))
    yield put(signInSuccess({id: userSnapShot.id, ...userSnapShot}));

    } catch (error){
        yield put(signInFailure(error));
    }
}


export function* onSignInWithGoogle(){
    try{
        //the reason we don't call signInWithGoogle method from the firebase utils is because we want to access the return value
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user)
        
        //refactored this part of the try catch into getSnapshotFromuserAuth function
        //we are passing the user into createUserProfileDocument and returning the user reference from firestore
        //const userRef = yield call (createUserProfileDocument, user)
        //const userSnapShot = yield userRef.get()

        //the put(googleSignInSuccess) is similar to how we originally had it in the app.js file where we dispatched the user information into redux
        // dispatch(setCurrentUser(
        //     {id:snapShot.id,
        //     ...snapShot.data()}
        //   ))
        //yield put(signInSuccess({id: userSnapShot.id, ...user}));


    } catch (error){

        yield put(signInFailure(error));
    }
}

export function* onGoogleSignInStart(){
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, onSignInWithGoogle)
}

export function* onSignInWithEmail({payload: { email, password}}){
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)

        //refactored this part of the try catch into getSnapshotFromuserAuth function
        // const userRef = yield call (createUserProfileDocument, user)
        // const userSnapShot = yield userRef.get()
        // yield put(signInSuccess({id: userSnapShot.id, ...user}));

    } catch (error){
        yield put(signInFailure(error))
    }
}

export function* onEmailSignInStart(){
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, onSignInWithEmail)
}

export function* signOut(){
    try{
        yield auth.signOut();
        yield put(signOutSuccess());
    }catch(error) {
        yield put(signOutFailure(error))
    }
}

export function* onSignOutStart(){
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* userSagas(){

    //we need the call effect inside of the all effect, otherwise only the GOOGLE_SIGN_IN_START action will be called and onSignInWithGoogle generator function will not be called
    yield all([
        call(onGoogleSignInStart), 
        call(onEmailSignInStart), 
        call(onSignOutStart)
    ]);
}

