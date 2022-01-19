import { createContext ,useReducer} from "react";
import productsObj from "./products";
import StateReducer from "./StateReducer";

const products = productsObj();

const initialState = [
      {
        products:[...products],
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
            dispatch
       }        
       }>
           {children}
       </GlobalContext.Provider>
    )
}

