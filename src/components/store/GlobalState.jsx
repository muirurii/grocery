import { createContext ,useReducer} from "react";
import products from "./products";
import StateReducer from "./StateReducer";


const initialState = [
      {
        products:[...products],
        isCartOpen:false,
        searchText:"",
        filterValue:"",
        isLoggedIn: false,
        logOutModal:false,
        userName:' ',
        menuStatus: false
    }
      
]

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(StateReducer,initialState[0]);

    return (
       <GlobalContext.Provider value={{
            products:state.products,
            isCartOpen: state.isCartOpen,
            searchText: state.searchText,
            filterValue: state.filterValue,
            isLoggedIn:state.isLoggedIn,
            logOutModal:state.logOutModal,
            userName:state.userName,
            menuStatus: state.menuStatus,
            dispatch
       }        
       }>
           {children}
       </GlobalContext.Provider>
    )
}

