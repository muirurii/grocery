import types from "./actionTypes";

export const toogleMenu = () => dispatch => {
    dispatch({
        type: types.TOOGLE_MENU,
    });
};

export const toogleModal = () => dispatch => {
    dispatch({
        type: types.TOOGLE_MODAL,
    });
};