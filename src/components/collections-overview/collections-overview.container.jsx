import React from 'react'
import { useSelector } from 'react-redux';
import CollectionOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);

const CollectionOverviewContainer = (props) => {

    const { shop } = useSelector( state => ({
        shop: state.shop
    }))

    return (
        <CollectionOverviewWithSpinner isLoading={shop.isLoading} {...props}/>
    )

}

export default CollectionOverviewContainer;