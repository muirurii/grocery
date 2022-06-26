import { Link } from "react-router-dom";
import { MdOutlineRemoveShoppingCart, MdRemoveRedEye } from "react-icons/md";
import {useDispatch,useSelector} from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../store/actions/cartActions";

const ProductCard = ({ product }) => {
  const {products } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const {addToCart,removeFromCart,toogleCart} = bindActionCreators({...actions},dispatch);
  const isThisInCart = products.some((prod) => prod._id === product._id);

  return (
    <article className="product-card">
      <div
        className="product-background"
        style={{ backgroundImage: `url(${product.img})` }}
      ></div>
      <div className="product-info">
        <p>
          <strong>{product.name}</strong>
        </p>
        <strong>${product.price} per </strong>
        <span>{product.amount_each}</span>
      </div>
      {isThisInCart ? (
        <>
          <button onClick={toogleCart} className="product-btn view-in-cart">
            <span className="center">
              Cart &nbsp;
              <MdRemoveRedEye />
            </span>
          </button>
          <button
            onClick={() => removeFromCart(product._id)}
            className="product-btn remove-from-cart"
          >
            <span className="center">
              Remove &nbsp;
              <MdOutlineRemoveShoppingCart />
            </span>
          </button>
        </>
      ) : (
        <button onClick={()=> addToCart(product)} className="product-btn add-cart">
          Add to cart <i className="fas fa-cart-plus"></i>
        </button>
      )}
      <Link to={`/shop/${product.category.toLowerCase()}/${product._id}`}>
        <button className="more">View</button>
      </Link>
    </article>
  );
};

export default ProductCard;
