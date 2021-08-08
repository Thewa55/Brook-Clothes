//takeEvery - Listens for every action of a specific type we pass to Saga
//call - is the effect that invokes a method
//put - 
//takeLatest - is similar to takeEvery except if multiple Sagas are fired, we only resolve the last Sagas
import { takeEvery, call, put, takeLatest } from "@redux-saga/core/effects";

import { firestore, convertCollectionSnapshotToMap } from "../../firebase/firebase.utils";
import { fetchCollectionSuccess, fethcCollectionFailure } from "./shop.actions";
import ShopActionTypes from "./shop.types";

//this is a generator function, all generator function needs a yield
export function* fetchCollectionsStart(){
    //the first parameter in takeEvery is the first action we want, the second paramter is another generator function that runs in response to the first action
    //takeEvery is a non blocking call, in order to not stop the app to wait for the async call
    //if we fire fetch collection start again, we can cancel the previous request. Every yield we yield the control from Saga to the middleware
    // yield takeEvery(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync)
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync)
};

export function* fetchCollectionsAsync(){
    yield console.log('This is fired'); 

    //sagas do not dispatch actions using dispatch keyword, instead it uses the put effect
    try {
        const collectionRef = firestore.collection('collections');
        //collectionRef comes back in a promise form that gets resolved with the value of the collection reference
        const snapshot = yield collectionRef.get()

        //we want to put a yield in case this call takes a long time
        //the call is an effect that invokes functions, first argument is the function, second argument is the paramerter for the first argument
        //yields allows saga middleware the ability to cancel the method whenever it can (i.e if fetchCollectionStart is invoked again before the first call is resolved)
        const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot)

        yield put(fetchCollectionSuccess(collectionsMap));
    } catch (error){
        yield put(fethcCollectionFailure(error.message))
    }

    // collectionRef.get().then(snapshot => {
    //     const shopData = convertCollectionSnapshotToMap(snapshot);
    //     dispatch(fetchCollectionSuccess(shopData));
    // }).catch(error => 
    //     dispatch(fethcCollectionFailure(error.message))
    // );
};