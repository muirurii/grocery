import { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../store/GlobalState";
import CartItem from "./CartItem";

const Cart = () => {

    const {products,isCartOpen,dispatch,isLoggedIn} = useContext(GlobalContext);

    const closeCart = ()=>{
         dispatch({
            type:"toogleCart",
             payload:'',
         });
    }

    const productsInCart = products.filter(product => product.isInCart);
    const totalPrice = productsInCart.reduce((total ,product)=>{
            return total + product.price* product.amount
    },0)

    return isCartOpen && (
         <div className="cart">
            <section>
                <button className="close-cart" onClick={closeCart}><i className="fas fa-arrow-left"></i></button>
            <h2>Selected Products</h2>
            {productsInCart.length ? (
                <>
                <ul>
                    {productsInCart.map((product,index)=> <CartItem key={index} product={product} />)}
                </ul>
                <div className="total">
                  <label className="cost">Total:{totalPrice}</label>
                  {isLoggedIn ?<button>Shop</button> : <Link to={"login"}>Login to start shopping</Link>}
                </div>
                </>
            ): 'The cart is currently empty select items to add them'} 
            </section>
        </div>
    )
}

export default Cart;
