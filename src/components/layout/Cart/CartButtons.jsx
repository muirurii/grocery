import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import {IoAddCircleSharp,IoBagRemoveSharp} from "react-icons/io5";
import {IoIosRemoveCircle} from "react-icons/io";

const CartButtons = ({product}) => {
    
    const {dispatch}= useContext(GlobalContext);

    const increaseItemCount = (id)=>{
            dispatch({
                type:"increaseCount",
                payload: id,
            });
    }
    const decreaseItemCount = (id)=>{
            dispatch({
                type:"reduceCount",
                payload: id,
            });
    }
    const removeFromCart = (id)=>{
            dispatch({
                type:"removeFromCart",
                payload: id,
            });

    }
    return (
        <div className="buttons">
                <button className="decrement"  onClick={()=>decreaseItemCount(product.id)}><IoIosRemoveCircle /></button>
                <span>{product.amount}</span>
                <button className="increment" onClick={()=>increaseItemCount(product.id)}><IoAddCircleSharp /></button>
                <button className="remove" onClick={()=>removeFromCart(product.id)}><IoBagRemoveSharp /></button>
        </div>
    )
}

export default CartButtons
