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
                products:state.products.map(prod=> prod.id === action.payload ? {...prod,isInCart:true}: prod)
            }
        }
        case "increaseCount" :{
            return{
                ...state,
                products: state.products.map(product=> product.id === action.payload ? {...product,amount: product.amount+1} : product)
            }
        }
        case "reduceCount" :{
            return{
                ...state,
                products: state.products.map(product=> product.id === action.payload && product.amount > 1 ? {...product,amount: product.amount-1} : product)
            }
        }
        case "removeFromCart":{
            return{
                ...state,
                products:state.products.map(product => action.payload === product.id ? {...product,isInCart:false,amount:1}: product )
            }
        }
        case "filter":{
            return{
                ...state,
                filterValue: action.payload
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