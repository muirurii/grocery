const StateReducer = (state,action)=>{
    switch (action.type){
        case "toogleCart":{
            return{
                ...state,
                isCartOpen: !state.isCartOpen,
            }
        }
        case "addToCart":{
            return{
                ...state,
                productsInCart:[...state.productsInCart,action.payload]
            }
        }
        case "increaseCount" :{
            return{
                ...state,
                productsInCart: state.productsInCart.map(product=> product.id === action.payload ? {...product,amount: product.amount+1} : product)
            }
        }
        case "reduceCount" :{
            return{
                ...state,
                productsInCart: state.productsInCart.map(product=> product.id === action.payload && product.amount > 1 ? {...product,amount: product.amount-1} : product)
            }
        }
        case "removeFromCart":{
            return{
                ...state,
                productsInCart:state.productsInCart.filter(product => action.payload !== product.id )
            }
        }
        default:{
            // console.log('def');
           return state;  
        }
    }
}

export default StateReducer;