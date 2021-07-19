import React from 'react';
//import SHOP_DATA from './shopData';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { selectShopItems } from '../../redux/shop/shop.selectors';
import { useSelector } from 'react-redux';

const ShopPage = () => {

    const { shop } = useSelector( state => ({
        shop: state.shop
    }))

    const shopData = selectShopItems(shop)
    //const [shopData] = useState(SHOP_DATA)

    return (
        <div className='shop-page'>
            {shopData.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
    
}

export default ShopPage;