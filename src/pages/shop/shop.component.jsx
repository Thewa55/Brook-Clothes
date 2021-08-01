import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
//import SHOP_DATA from './shopData';
//import CollectionPreview from '../../components/collection-preview/collection-preview.component'
//import { selectShopItems } from '../../redux/shop/shop.selectors';
//import { useSelector } from 'react-redux';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
//import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import { useDispatch, useSelector } from 'react-redux';
// import { updateCollection } from '../../redux/shop/shop.actions';
import { fetchCollectionStartAsync } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({match}) => {

    const dispatch = useDispatch();
    const [shopData, setShopData] = useState()
    useEffect(() => {


        setShopData(dispatch(fetchCollectionStartAsync()));
        // setIsCollectionLoaded(false)
    }, [shopData])

    const { shop } = useSelector( state => ({
        shop: state.shop
    }))

    const loadStatus = selectIsCollectionsLoaded(shop)


    return (
        <div className='shop-page'>
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!loadStatus} {...props} />} />
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={shop.isLoading} {...props}/>} /> 
        </div>
    )
    
}

export default ShopPage;