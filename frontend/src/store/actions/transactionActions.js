import fetchData from "../../customHooks/fetchData";
import types from "./actionTypes";

export const fetchTransactions = token => async dispatch => {
    const res = await fetchData(`/transactions`, token);
    dispatch({
        type: types.SET_TRANSACTIONS,
        payload: res.data
    });
}