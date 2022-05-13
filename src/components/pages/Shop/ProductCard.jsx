import { useContext } from "react";
import { GlobalContext } from "../../store/GlobalState";
import { Link } from "react-router-dom";
import {MdOutlineRemoveShoppingCart,MdRemoveRedEye} from 'react-icons/md'


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

    const removeFromCart = () =>{
        dispatch({
            type:"removeFromCart",
            payload: product.id,
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
                {isThisInCart ?( <>
                    <button onClick={toggleCart} className="product-btn view-in-cart">
                        <span className="center">
                         Cart &nbsp;
                         <MdRemoveRedEye />
                        </span>
                        
                    </button>
                    <button onClick={removeFromCart} className="product-btn remove-from-cart">
                        <span className="center">
                         Remove &nbsp;
                         <MdOutlineRemoveShoppingCart /> 
                        </span>
                        
                    </button>
                </>
               ) :
                <button onClick={addToCart} className="product-btn add-cart">Add to cart <i className="fas fa-cart-plus"></i></button>}
               <Link to={`/shop/${product.category.toLowerCase()}/${product.name.toLowerCase()}`}><button className="more">View</button></Link>
            </article>     
    );
}

export default ProductCard;
