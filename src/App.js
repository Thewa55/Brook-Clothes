import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

function App() {

  const dispatch = useDispatch();
  const [user, setUser ] = useState()

  useEffect(() => {
    if(user == null){
      auth.onAuthStateChanged(async user => {
        if(user){
          //we are passing the user into createUserProfileDocument and returning the user reference from firestore
          const userRef = await createUserProfileDocument(user)
          //a snapshot lets us check if a document exists at this query
          userRef.onSnapshot(snapShot => {

            //snapShot doesn't give us access to any of the properties, using snapShot.data() gives us the data in an object
            console.log(snapShot.data())
            setUser({
              id:snapShot.id,
              ...snapShot.data()
            })

            dispatch({
              type: 'SET_CURRENT_USER',
              payload: {
                id:snapShot.id,
                ...snapShot.data()
              }
            })

          })
          // setUser(user)
          // createUserProfileDocument(user)
        } else {
          setUser(user)
        }
      })
    }

    console.log(user)
  })

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
