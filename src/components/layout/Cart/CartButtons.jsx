import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";


const CartButtons = ({product}) => {
    
    const {dispatch}= useContext(GlobalContext);

    const increaseItemCount = (id)=>{
            dispatch({
                type:"increaseCount",
                payload: id,
            })
    }
    const decreaseItemCount = (id)=>{
            dispatch({
                type:"reduceCount",
                payload: id,
            })
    }
    const removeFromCart = (id)=>{
            dispatch({
                type:"removeFromCart",
                payload: id,
            })
    }
    return (
        <div className="buttons">
                <button data-tool-tip="decrease" className="decrement"  onClick={()=>decreaseItemCount(product.id)}>-</button>
                <span>{product.amount}</span>
                <button data-tool-tip="increase" className="increment" onClick={()=>increaseItemCount(product.id)}>+</button>
                <button data-tool-tip="remove" className="remove" onClick={()=>removeFromCart(product.id)}>X</button>
        </div>
    )
}

export default CartButtons
