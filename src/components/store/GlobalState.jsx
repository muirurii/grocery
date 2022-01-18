import { createContext ,useReducer} from "react";
import productsObj from "./products";
import StateReducer from "./StateReducer";

const products = productsObj();

const initialState = [
      {
        products:[...products],
        productsInCart:[],
        isCartOpen:false
    }
      
]

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(StateReducer,initialState[0]);

    return (
       <GlobalContext.Provider value={{
            products:state.products,
            isCartOpen: state.isCartOpen,
            productsInCart:state.productsInCart,
            dispatch
       }        
       }>
           {children}
       </GlobalContext.Provider>
    )
}

