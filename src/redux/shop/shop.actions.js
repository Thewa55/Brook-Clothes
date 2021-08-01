import ShopActionTypes from "./shop.types";
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

// export const updateCollection = collectionsMap => ({
//     type: ShopActionTypes.UPDATE_COLLECTION,
//     payload: collectionsMap
// });

export const fetchCollectionStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTION_START,
});

export const fetchCollectionSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTION_SUCCESS,
    payload: collectionsMap
});

export const fethcCollectionFailure = error => ({
    type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
    payload: error
})

export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionStart)

        collectionRef.get().then(snapshot => {
            const shopData = convertCollectionSnapshotToMap(snapshot);
            dispatch(fetchCollectionSuccess(shopData));
        }).catch(error => 
            dispatch(fethcCollectionFailure(error.message))
        );
    }
};