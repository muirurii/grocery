import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";


const CartButtons = ({product}) => {
    
    const {dispatch,productsInCart}= useContext(GlobalContext);

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
                <button className="decrement"  onClick={()=>decreaseItemCount(product.id)}>-</button>
                <span>{product.amount}</span>
                <button className="increment" onClick={()=>increaseItemCount(product.id)}>+</button>
                <button className="remove" onClick={()=>removeFromCart(product.id)}>X</button>
        </div>
    )
}

export default CartButtons
