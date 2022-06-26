import types from "../actions/actionTypes"

const initialState = {
    transactions: [],
    spent: 0,
    pending: 0,
    delivered: 0
}

const transactionReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'test':
            {
                console.log('testing')
                return state
            }
        case types.SET_TRANSACTIONS:
            {
                return {
                    ...state,
                    transactions: [...action.payload].sort((a, b) => {
                        return new Date(b.createdAt) - new Date(a.createdAt)
                    }),
                    spent: action.payload.reduce((a, b) => a + b.cost, 0),
                    pending: action.payload.reduce((a, b) => a + Number(!b.delivered), 0),
                    delivered: action.payload.reduce((a, b) => a + Number(b.delivered), 0)
                }
            }
        default:
            return {
                ...state
            }
    }
}

export default transactionReducers;