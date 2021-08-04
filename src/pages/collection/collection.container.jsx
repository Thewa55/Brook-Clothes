import React from 'react'
import { useSelector } from 'react-redux';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component'
import CollectionPage from './collection.component'

const CollectionPageWithSpinner = WithSpinner(CollectionPage)

const CollectionPageContainer = (props) => {
    
    const { shop } = useSelector( state => ({
        shop: state.shop
    }))

    const loadStatus = selectIsCollectionsLoaded(shop)

    return(
        <CollectionPageWithSpinner isLoading={!loadStatus} {...props} />
    )
}

export default CollectionPageContainer;
