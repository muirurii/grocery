import { createContext } from "react";
import productsObj from "./products";

const products = productsObj();

export const GlobalContext = createContext(products);

export const GlobalProvider = ({children}) => {
    return (
       <GlobalContext.Provider value={{
            products
       }        
       }>
           {children}
       </GlobalContext.Provider>
    )
}

