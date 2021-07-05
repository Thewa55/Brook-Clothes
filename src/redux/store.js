import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];

//we are spreading the middleware so if we add more middleware we can add them into the array
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;