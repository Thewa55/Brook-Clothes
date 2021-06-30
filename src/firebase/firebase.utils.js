import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
require('dotenv').config();

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_SENDERID,
    appId: process.env.REACT_APP_APPID,
    measurementId: process.env.REACT_APP_MEASUREMENTID
}

firebase.initializeApp(config);

//importing auth lets us export auth so we can use it anywhere in the app
export const auth = firebase.auth();
export const firestore = firebase.firestore();

//this is pulled from the auth
const provider = new firebase.auth.GoogleAuthProvider()

//we always want to always trigger google popup whenever we use the google auth provider for authentication and sign in
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;