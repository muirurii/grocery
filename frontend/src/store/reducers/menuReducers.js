import types from "../actions/actionTypes";

const initialState = {
    modal: false,
    mobileMenu: false
}

const menuReducers = (state = initialState, action) => {

    switch (action.type) {
        case types.TOOGLE_MENU:
            {
                return {
                    ...state,
                    mobileMenu: !state.mobileMenu
                }
            }
        case types.TOOGLE_MODAL:
            {
                return {
                    ...state,
                    modal: !state.modal
                }
            }
        default:
            {
                return state;
            }
    }
}

export default menuReducers;