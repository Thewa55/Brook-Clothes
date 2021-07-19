import React from 'react';
import CollectionPreview from '../collection-preview/collection-preview.component';
import { selectShopItems,  } from '../../redux/shop/shop.selectors';
import { useSelector } from 'react-redux';

import './collections-overview.style.scss';

const CollectionOverview = () => {

    const { shop } = useSelector( state => ({
        shop: state.shop
    }))

    const shopData = selectShopItems(shop)

    return (
        <div className='collection-overview'>
            {shopData.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
}

export default CollectionOverview;