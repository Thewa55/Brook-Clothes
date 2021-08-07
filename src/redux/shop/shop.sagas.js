//takeEvery - Listens for every action of a specific type we pass to Saga
import { takeEvery } from "@redux-saga/core/effects";

import ShopActionTypes from "./shop.types";

//this is a generator function, all generator function needs a yield
export function* fetchCollectionsStart(){
    //the first parameter in takeEvery is the first action we want, the second paramter is another generator function that runs in response to the first action
    //takeEvery is a non blocking call, in order to not stop the app to wait for the async call
    //if we fire fetch collection start again, we can cancel the previous request. Every yield we yield the control from Saga to the middleware
    yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsStartAsync)
};

export function* fetchCollectionsStartAsync(){
    yield console.log('This is fired');
};