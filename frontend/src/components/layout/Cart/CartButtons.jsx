import {IoAddCircleSharp,IoBagRemoveSharp} from "react-icons/io5";
import {IoIosRemoveCircle} from "react-icons/io";
import { useDispatch } from "react-redux";
import * as actions from "../../../store/actions/cartActions";
import { bindActionCreators } from "redux";

const CartButtons = ({product}) => {
    const dispatch = useDispatch();
    const {increaseAmount,decreaseAmount,removeFromCart} = bindActionCreators({...actions},dispatch);

    return (
        <div className="buttons">
                <button className="decrement"  onClick={()=>decreaseAmount(product._id)}><IoIosRemoveCircle /></button>
                <span>{product.amount}</span>
                <button className="increment" onClick={()=>increaseAmount(product._id)}><IoAddCircleSharp /></button>
                <button className="remove" onClick={()=>removeFromCart(product._id)}><IoBagRemoveSharp /></button>
        </div>
    )
}

export default CartButtons
