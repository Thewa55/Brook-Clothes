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

    const dispatch = useDispatch();
    const [isLoading, setIsLoading]= useState(true)

    useEffect(() => {
        const collectionRef = firestore.collection('collections');

        //fetch method to get data from firestore
        // fetch('https://firestore.googleapis.com/v1//projects/brook-clothes/databases/(default)/documents/collections')
        //     .then(response => response.json)
        //     .then(collections => console.log(collections))

        //.get makes an api call to fetch back the data associated to this collectionRef
        //the difference is that now it's a promise
        collectionRef.get().then(snapshot => {
            const shopData = convertCollectionSnapshotToMap(snapshot);
            dispatch(updateCollection(shopData));
            setIsLoading(false);
        });

        //this is a observable style
        // collectionRef.onSnapshot(async snapshot => {
        //     const shopData = convertCollectionSnapshotToMap(snapshot);
        //     dispatch(updateCollection(shopData));
        //     setIsLoading(false);
        // })
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