import React, { useState } from 'react';
import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = (props) => {

    const [shopData, setShopDate] = useState(SHOP_DATA)
    console.log(shopData);
    return (
        <div className='shop-page'>
            {shopData.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
    
}

export default ShopPage;