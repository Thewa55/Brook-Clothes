import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk  from "redux-thunk";

import rootReducer from "./root-reducer";

const middlewares = [thunk];


//Only have logger active only if it's development environment 
if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger);
}

//we are spreading the middleware so if we add more middleware we can add them into the array
const store = createStore(rootReducer, applyMiddleware(...middlewares))

const persistor = persistStore(store)

export {persistor, store};