import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";

const ProductCard = ({product}) => {
    const {dispatch,productsInCart} = useContext(GlobalContext);
    const addToCart = ()=>{
        dispatch({
            type:"toogleCart",
            payload:'',
        })
        dispatch({
            type:"addToCart",
            payload:{...product,amount:1},
        })
    }
    const isThisInCart = productsInCart.every(prod=> prod.id === product.id );
    console.log(isThisInCart);
    return (
        <article className="product-card">
            <div className="product-background"></div>
            <div className="product-info">
                <p><strong>{product.name}</strong></p>
                <strong>{product.price}$</strong>
            </div>
            {<button onClick={addToCart} >Add to cart <i className="fas fa-cart-plus"></i></button>}
        </article>
    )
}

export default ProductCard;
