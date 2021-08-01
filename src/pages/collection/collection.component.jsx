import React from 'react';
import { useSelector } from 'react-redux';
import { selectShopItems } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

import './collection.style.scss'

const CollectionPage = ({ match }) => {

    const { shop } = useSelector( state => ({
        shop: state.shop
    }))

    const shopData = selectShopItems(shop)
    
    const { title, items} = shopData[match.params.collectionId];

    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (<CollectionItem key={item.id} item={item}/>))} 
            </div>
        </div>
    )
}

export default CollectionPage;