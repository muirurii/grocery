import { createContext ,useReducer} from "react";
import products from "./products";
import StateReducer from "./StateReducer";


const initialState = {
        products:[...products],
        isCartOpen:false,
        searchText:"",
        isLoggedIn: false,
        logOutModal:false,
        userName:' ',
        menuStatus: false,
        cartProducts:[]
    }


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

const [state,dispatch] = useReducer(StateReducer,initialState);

    return (
       <GlobalContext.Provider value={{
            products:state.products,
            isCartOpen: state.isCartOpen,
            searchText: state.searchText,
            isLoggedIn:state.isLoggedIn,
            logOutModal:state.logOutModal,
            userName:state.userName,
            menuStatus: state.menuStatus,
            cartProducts:state.cartProducts,
            dispatch
       }        
       }>
           {children}
       </GlobalContext.Provider>
    )
}

