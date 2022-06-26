import types from "../actions/actionTypes";

const initialState = {
    status: false,
    products: [],
};

const cartReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.TOOGLE_CART:
            {
                return {
                    ...state,
                    status: !state.status
                }
            }
        case types.ADD_TO_CART:
            {
                return {
                    ...state,
                    products: [...state.products, {...action.payload, amount: 1 }],
                }
            }
        case types.REMOVE_FROM_CART:
            {
                return {
                    ...state,
                    products: state.products.filter(product => product._id !== action.payload)
                };
            }
        case types.CLEAR_CART:
            {
                return {
                    ...state,
                    status: false,
                    products: []
                };
            }
        case types.INC_AMOUNT:
            {
                return {
                    ...state,
                    products: state.products.map(product => product._id === action.payload ? {...product, amount: product.amount + 1 } : product)
                };
            }
        case types.DEC_AMOUNT:
            {
                return {
                    ...state,
                    products: state.products.map(product => product._id === action.payload ? {
                            ...product,
                            amount: product.amount > 1 ? product.amount - 1 : 1,
                        } :
                        product)
                };
            }
        default:
            {
                return state;
            }
    }
};

export default cartReducers;