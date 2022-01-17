import { useContext } from "react";
import { GlobalContext } from "../store/GlobalState";
import CartItem from "./CartItem";

const Cart = () => {

    const {products} = useContext(GlobalContext);

    const inCart = products.filter(product => product.inCart);

    return (
        <div className="cart">
            <section>
            <h2>Selected Products</h2>
            {inCart.length ? (
                <ul>
                    {inCart.map((product,index)=> <CartItem key={index} product={product} />)}
                </ul>
            ): 'No Products Selected'} 
            </section>
        </div>
    )
}

export default Cart;
