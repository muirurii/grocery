import types from "../actions/actionTypes"

const initialState = {
    isLoggedIn: false,
    name: '',
    email: '',
    token: '',
    error: ''
}
const userReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_USER:
            {
                return {
                    ...state,
                    isLoggedIn: !state.isLoggedIn,
                    token: action.payload.token,
                    name: action.payload.user.name,
                    email: action.payload.user.email,
                }
            }
        case types.RESET_USER:
            {
                return {
                    ...state,
                    ...action.payload
                }
            }
        case types.SET_ERROR:
            {
                return {
                    ...state,
                    error: action.payload,
                }
            }
        default:
            {
                return state;
            }
    }
}

export default userReducers;