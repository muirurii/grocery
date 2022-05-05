import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";


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
                <button className="decrement"  onClick={()=>decreaseItemCount(product.id)}>Reduce</button>
                <span>{product.amount}</span>
                <button className="increment" onClick={()=>increaseItemCount(product.id)}>Add</button>
                <button className="remove" onClick={()=>removeFromCart(product.id)}>Remove</button>
        </div>
    )
}

export default CartButtons
