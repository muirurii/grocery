import { combineReducers } from "redux";
import productReducers from "./productsReducers";

const reducers = combineReducers({
    products: productReducers,
});

export default reducers;