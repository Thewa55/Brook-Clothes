// import SHOP_DATA from "../../pages/shop/shopData"
import ShopActionTypes from "./shop.types";


const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: undefined
};

const shopReducer = ( state= INITIAL_STATE, action) => {
    switch( action.type){
        case ShopActionTypes.FETCH_COLLECTION_START:
            return{
                ...state,
                isFetching: true
            }
        case ShopActionTypes.FETCH_COLLECTION_SUCCESS:
            return { 
                ...state,
                collections: action.payload,
                isFetching: false
            }
        case ShopActionTypes.FETCH_COLLECTION_FAILURE:
            return{
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        // case ShopActionTypes.UPDATE_COLLECTION:
        //     return { ...state,
        //     collections: action.payload
        // }
        default:
            return state;
    };
}

export default shopReducer;