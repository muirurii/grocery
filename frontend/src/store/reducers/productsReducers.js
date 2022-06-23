import types from '../actions/actionTypes';

const initialState = {
    all: [],
    featured: [],
    searchText: '',
    productDetails: {
        product: {},
        related: []
    },
    categoryProducts: []
}

const productReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ALL_PRODUCTS:
            {
                return {
                    ...state,
                    all: action.payload
                }
            }
        case types.SEARCH:
            {
                return {
                    ...state,
                    searchText: action.payload
                }
            }
        case types.FETCH_FEATURED_PRODUCTS:
            {
                return {
                    ...state,
                    featured: action.payload
                }
            }
        case types.FETCH_SINGLE_PRODUCT:
            {
                return {
                    ...state,
                    productDetails: action.payload
                }
            }
        case types.FETCH_CATEGORY:
            {
                return {
                    ...state,
                    categoryProducts: action.payload
                }
            }
        default:
            {
                return state;
            }
    }

}

export default productReducers;