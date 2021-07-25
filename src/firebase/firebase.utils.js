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

export const createUserProfileDocument = async (userAuth, additionData) => {
    if(!userAuth) return;

    //userRef is pulling the document from Firestore. Documents are used for CRUD operations
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    //collectionRef is pulling a collection (group) of users from Firestore
    // const collectionRef = firestore.collection(`users`);
    // console.log(collectionRef)

    //We are retrieving a snapshot of the user here
    const snapShot = await userRef.get()
    
    //We are retieving a snapshot of the collection here
    // const collectionSnapShot = await collectionRef.get()
    // console.log({collectionSnapShot})
    // console.log({collection: collectionSnapShot.docs.map(doc => doc.data()) })

    //If there is no data for the userID in the firestore, we are creating a new user document in firestore.
    if(!snapShot.exists){
        const { displayName , email } = userAuth;
        const createdAt = new Date();

        try{
         await userRef.set({
             displayName,
             email,
             createdAt,
             ...additionData
         })
        }catch(error) {
            console.log('error creating user', error.message)
        }
    }

    //we're returning userRef if we need it later on.
    return userRef
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