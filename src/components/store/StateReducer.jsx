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
                products:state.products.map(product => action.payload === product.id ? {...product,isInCart:false}: product )
            }
        }
        case "filter":{
            return{
                ...state,
                products: state.products.filter(prod=> prod.category === action.payload)
            }
        }
        default:{
           return state;  
        }
    }
}

export default StateReducer;