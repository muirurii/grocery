import { createContext, useReducer } from "react";
import StateReducer from "./StateReducer";

const initialState = {
  products: [],
  isCartOpen: false,
  searchText: "",
  user:{
    isLoggedIn: false,
    name:'',
    email:'',
    token:''
  },
  logOutModal: false,
  menuStatus: false,
  cartProducts: [],
};

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StateReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        products: state.products,
        isCartOpen: state.isCartOpen,
        searchText: state.searchText,
        user: state.user,
        logOutModal: state.logOutModal,
        menuStatus: state.menuStatus,
        cartProducts: state.cartProducts,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
