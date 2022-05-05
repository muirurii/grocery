import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import { Link } from "react-router-dom";

const ProductCard = ({product}) => {

    const {cartProducts,dispatch} = useContext(GlobalContext);

    const addToCart = ()=>{
        dispatch({
            type:"addToCart",
            payload:{...product,amount:1},
        });
    }
    const toggleCart = ()=>{
            dispatch({
            type:"toogleCart",
            payload:'',
        });
    }

    const isThisInCart = cartProducts.find(prod=> prod.id === product.id);

    return (
            <article className="product-card">
                <div className="product-background" style={{backgroundImage:`url(${product.img})`}}></div>
                <div className="product-info">
                    <p><strong>{product.name}</strong></p>
                    <strong>${product.price} per </strong>
                    <span>{product.amount_each}</span>
                </div>
                {isThisInCart ? <button onClick={toggleCart} className="view-in-cart">View in cart</button> :
                <button onClick={addToCart} className="add-cart">Add to cart <i className="fas fa-cart-plus"></i></button>}
               <Link to={`/shop/${product.category.toLowerCase()}/${product.name.toLowerCase()}`}><button className="more">View</button></Link>
            </article>     
    );
}

export default ProductCard;
