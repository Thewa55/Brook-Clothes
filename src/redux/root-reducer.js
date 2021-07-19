import  { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
//this storage import is for local storage, there is also a session storage we can import
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoyReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

//persistConfig is the configuration for perist
//key tells it at what point in the reducer we want ot store
//storage is what kind of storage we want
//whitelist tells persist what reducer we want to persist, we are only doing cart since user is stored in firebase
const persistConfig= {
    key: 'root',
    storage, 
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoyReducer,
    shop: shopReducer
})

//we are now exporting persistReducer instead of the reducer
//it takes 2 arguments, first is for the configuration and second is the reducer
export default persistReducer(persistConfig, rootReducer)


// export default combineReducers({
//     user: userReducer,
//     cart: cartReducer
// })

