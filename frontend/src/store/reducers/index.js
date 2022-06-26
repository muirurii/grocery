import { combineReducers } from "redux";
import productReducers from "./productsReducers";
import userReducers from "./userReducers";
import menuReducers from "./menuReducers";
import cartReducers from "./cartReducers";
import transactionReducers from "./transactionsReducers";
import loading from "./loading";

const reducers = combineReducers({
    products: productReducers,
    user: userReducers,
    menu: menuReducers,
    cart: cartReducers,
    transaction: transactionReducers,
    loading
});

export default reducers;