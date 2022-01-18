import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import CartItem from "./CartItem";

const Cart = () => {

    const {productsInCart,isCartOpen,dispatch} = useContext(GlobalContext);

    const scrollY = window.scrollY;

    const closeCart = ()=>{
         dispatch({
                        type:"toogleCart",
                        payload:'',
                    })
    }

    return isCartOpen && (
         <div className="cart">
            <section style={{top:scrollY+30}}>
                <button className="close-card" onClick={closeCart}>x</button>
            <h2>Selected Products</h2>
            {productsInCart.length ? (
                <ul>
                    {productsInCart.map((product,index)=> <CartItem key={index} product={product} />)}
                </ul>
            ): 'No Products Selected'} 
            </section>
        </div>
    )
}

export default Cart;
