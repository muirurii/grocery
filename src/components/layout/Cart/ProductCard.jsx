import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";

const ProductCard = ({product}) => {
    const {dispatch} = useContext(GlobalContext);
    const addToCart = ()=>{
        dispatch({
            type:"addToCart",
            payload:product.id,
        });
        toggleCart();
    }
    const toggleCart = ()=>{
            dispatch({
            type:"toogleCart",
            payload:'',
        });
    }
    const isThisInCart = product.isInCart;
    return (
        <article className="product-card">
            <div className="product-background" style={{backgroundImage:`url(${product.img})`}}></div>
            <div className="product-info">
                <p><strong>{product.name}</strong></p>
                <strong>{product.price}$</strong>
            </div>
            {isThisInCart ? <button onClick={toggleCart} className="view-in-cart">View in cart</button> :
             <button onClick={addToCart} >Add to cart <i className="fas fa-cart-plus"></i></button>}
        </article>
    )
}

export default ProductCard;
