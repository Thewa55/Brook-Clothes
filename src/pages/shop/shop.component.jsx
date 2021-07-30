import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
//import SHOP_DATA from './shopData';
//import CollectionPreview from '../../components/collection-preview/collection-preview.component'
//import { selectShopItems } from '../../redux/shop/shop.selectors';
//import { useSelector } from 'react-redux';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'
import { useDispatch } from 'react-redux';
import { updateCollection } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const ShopPage = ({match}) => {

    const unsubscribeFromSnapShot = null;
    const dispatch = useDispatch();
    const [isLoading, setIsLoading]= useState(true)

    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot(async snapshot => {
            const shopData = convertCollectionSnapshotToMap(snapshot);
            console.log(shopData);
            dispatch(updateCollection(shopData));
            setIsLoading(false);
        })
    })
    // const { shop } = useSelector( state => ({
    //     shop: state.shop
    // }))

    // const shopData = selectShopItems(shop)
    //const [shopData] = useState(SHOP_DATA)

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isLoading} {...props}/>} /> 
            <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isLoading} {...props} />} />
        </div>
    )
    
}

export default ShopPage;