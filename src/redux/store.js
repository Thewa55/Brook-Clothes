import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "./root-reducer";
import { rootSaga } from './root-saga'

//Moved this into root reducer
//import { fetchCollectionsStart } from "./shop/shop.sagas";

//old thunk code
//import thunk  from "redux-thunk";
// const middlewares = [thunk];

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]



//Only have logger active only if it's development environment 
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

//we are spreading the middleware so if we add more middleware we can add them into the array
const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export {persistor, store};