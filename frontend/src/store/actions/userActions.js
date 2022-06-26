import types from "./actionTypes";
import postData from "../../customHooks/postData";

export const setUser = (data, url) => async dispatch => {
    const res = await postData(`/users/${url}`, {...data });
    if (res.error) {
        return { success: false, error: res.data.message }
    } else {
        dispatch({
            type: types.SET_USER,
            payload: res.data
        });
        return { success: true }
    }
}

export const setError = error => dispatch => {
    dispatch({
        type: types.SET_ERROR,
        payload: error
    });
}

export const resetUser = () => dispatch => {
    dispatch({
        type: types.RESET_USER,
        payload: {
            isLoggedIn: false,
            user: {
                name: '',
                email: '',
                token: '',

            },
            error: ''
        }
    });
}