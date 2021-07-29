import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import CheckoutPage from './pages/checkout/checkout.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
// import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'
// import { selectShopItems } from './redux/shop/shop.selectors'

function App() {

  const dispatch = useDispatch();
  const [user, setUser ] = useState();

  //Code for putting store data into Firebase (one time data transfer)
  // const { shop } = useSelector( state => ({
  //   shop: state.shop
  // }))
  // const shopDatas = selectShopItems(shop);

  // const shopData = Object.keys(shopDatas).map(key=> shopDatas[key])

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

            dispatch(setCurrentUser(
              {id:snapShot.id,
              ...snapShot.data()}
            ))

          })
          // setUser(user)
          // createUserProfileDocument(user)
        } else {
          setUser(user)
          //addCollectionAndDocuments('collections', shopData.map(({title, items}) => ({title, items})));
        }
      })
    }
 
  })

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
        <Route exact path='/signin' render={() => user? (<Redirect to ='/' />): (<SignInAndSignUpPage/>)}/>
        <Route exact path='/checkout' component={CheckoutPage}/>
      </Switch>
    </div>
  );
}

export default App;
