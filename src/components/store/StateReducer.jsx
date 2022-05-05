const StateReducer = (state,action)=>{
    switch (action.type){
        case "toogleCart":{
            return{
                ...state,
                isCartOpen: action.payload === false ? false : !state.isCartOpen,
            }
        }
        case "toogleMenu":{
            return{
                ...state,
                menuStatus: !state.menuStatus,
            }
        }
        case "addToCart":{
            return{
                ...state,
                cartProducts:[...state.cartProducts,action.payload]
            }
        }
        case "increaseCount" :{
            return{
                ...state,
                cartProducts: state.cartProducts.map(product=> product.id === action.payload ? {...product,amount: product.amount+1} : product)
            }
        }
        case "reduceCount" :{
            return{
                ...state,
                cartProducts: state.cartProducts.map(product=> product.id === action.payload ? {...product,amount: product.amount > 1 ? product.amount-1 : 1 } : product)
            }
        }
        case "removeFromCart":{
            return{
                ...state,
                cartProducts: state.cartProducts.filter(product=> product.id !== action.payload)
            }
        }
        case "search":{
            return{
                ...state,
                searchText:action.payload
            }
        }
        case "changeLogIn":{
            return{
                ...state,
                isLoggedIn: !state.isLoggedIn
            }
        }
        case "toggleLogOutModal":{
            return{
                ...state,
                logOutModal: !state.logOutModal
            }
        }
        case "toggleAvatar":{
            return{
                ...state,
                userName: action.payload
            }
        }
        default:{
           return state;  
        }
    }
}

export default StateReducer;