import fetchData from "../../customHooks/fetchData";
import types from "./actionTypes";

export const fetchProducts = () => async dispatch => {
    const res = await fetchData('/products/all');
    dispatch({
        type: types.FETCH_ALL_PRODUCTS,
        payload: res.data
    });
}

export const fetchFeatured = () => async dispatch => {
    try {
        const res = await fetchData('/products/featured');
        dispatch({
            type: types.FETCH_FEATURED_PRODUCTS,
            payload: res.data
        });
    } catch (error) {
        console.log("error", error)
    }
}

export const fetchProduct = productName => async dispatch => {
    const res = await fetchData(`/products/${productName}`);
    dispatch({
        type: types.FETCH_SINGLE_PRODUCT,
        payload: res.data
    });
}

export const fetchCategory = category => async dispatch => {
    const res = await fetchData(`/products/category/${category}`);
    dispatch({
        type: types.FETCH_CATEGORY,
        payload: res.data
    });
}

export const setSearch = (search) => dispatch => {
    dispatch({
        type: types.SEARCH,
        payload: search
    });
}