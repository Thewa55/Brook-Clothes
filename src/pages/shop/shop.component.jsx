import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import CollectionOverviewContainer from '../../components/collections-overview/collections-overview.container'; 
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionStart } from '../../redux/shop/shop.actions';

//import SHOP_DATA from './shopData';
//import { updateCollection } from '../../redux/shop/shop.actions';
//import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

//part of thunk import
// import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';

//All the imports below are commented out due to creation of the container file
// import WithSpinner from '../../components/with-spinner/with-spinner.component';
// import CollectionPage from '../collection/collection.component';
// import CollectionOverview from '../../components/collections-overview/collections-overview.component';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({match}) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCollectionStart());
    }, [])

    return (
        <div className='shop-page'>
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            <Route exact path={`${match.path}`} component= {CollectionOverviewContainer} />  
        </div>
    )
    
    
    //Code commented out due to container components
    // const { shop } = useSelector( state => ({
    //     shop: state.shop
    // }))
    // const loadStatus = selectIsCollectionsLoaded(shop)            
    //<Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!loadStatus} {...props} />} />
    //<Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={shop.isLoading} {...props}/>} /> 

}

export default ShopPage;