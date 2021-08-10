import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStart } from './shop/shop.sagas';
import { userSagas } from './user/user.sagas';

export default function* rootSaga(){

    //all takes an array of Sagas, if we wanted to render ie 3 sagas all at once we put it into all effect. If all 3 sagas are on separate lines, we would hvae to wait for each Saga to finish 
    yield all([
        //fetchCollectionsStart() without call works as well, but best practice to use call
        call(fetchCollectionsStart), call(userSagas)
    ])
}