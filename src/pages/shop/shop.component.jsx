import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
//import SHOP_DATA from './shopData';
//import CollectionPreview from '../../components/collection-preview/collection-preview.component'
//import { selectShopItems } from '../../redux/shop/shop.selectors';
//import { useSelector } from 'react-redux';
import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { firestore, convertCollectionSnapshotToMap } from '../../firebase/firebase.utils'

const ShopPage = ({match}) => {

    const unsubscribeFromSnapShot = null;

    useEffect(() => {
        const collectionRef = firestore.collection('collections')

        collectionRef.onSnapshot(async snapshot => {
            convertCollectionSnapshotToMap(snapshot)
        })
    })
    // const { shop } = useSelector( state => ({
    //     shop: state.shop
    // }))

    // const shopData = selectShopItems(shop)
    //const [shopData] = useState(SHOP_DATA)

    return (
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} /> 
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
    
}

export default ShopPage;