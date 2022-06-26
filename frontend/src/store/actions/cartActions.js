import types from "./actionTypes"

export const addToCart = product => dispatch => {
    dispatch({
        type: types.ADD_TO_CART,
        payload: product
    });
}

export const removeFromCart = id => dispatch => {
    dispatch({
        type: types.REMOVE_FROM_CART,
        payload: id
    });
}

export const toogleCart = () => dispatch => {
    dispatch({
        type: types.TOOGLE_CART,
    });
}

export const clearCart = () => dispatch => {
    dispatch({
        type: types.CLEAR_CART,
    });
}

export const increaseAmount = id => dispatch => {
    dispatch({
        type: types.INC_AMOUNT,
        payload: id
    });
}

export const decreaseAmount = id => dispatch => {
    dispatch({
        type: types.DEC_AMOUNT,
        payload: id
    });
}