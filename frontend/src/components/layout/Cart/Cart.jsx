import {useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import postData from "../../../customHooks/postData";
import CartItem from "./CartItem";
import { bindActionCreators } from "redux";
import * as actions from "../../../store/actions/cartActions";
import {useSelector,useDispatch} from "react-redux";

const Cart = () => {
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {products,status} = useSelector(state=> state.cart);
  const user = useSelector(state=> state.user);
  const {toogleCart,clearCart} = bindActionCreators({...actions},dispatch);
 
  const makeTransaction = async () => {
    if(loading) return;
    setLoading(true);
    const res = await postData(
      "/transactions",
      {
        transaction: {
          cost: totalPrice,
          products: products.map((item) => item._id),
        },
      },
      user.token
    );
    if (!res.error) {
      navigate('/profile');
      clearCart();
    }
    setLoading(false);
  };

  const count = products.length;
 const totalPrice = products.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);

  return (
    status && (
      <div className="cart">
        <section>
          <button className="close-cart" onClick={toogleCart}>
            <i className="fas fa-arrow-left"></i> &nbsp;Back
          </button>
          <h2>Selected Products {`(${count})`} </h2>
          {products.length ? (
            <>
              <ul>
                {products.map((product, index) => (
                  <CartItem key={index} product={product} />
                ))}
              </ul>
              <div className="total">
                <label className="cost">Total:${totalPrice}</label>
                {user.isLoggedIn ? (
                  <button onClick={makeTransaction} >Check Out</button>
                ) : (
                  <Link to={"login"} onClick={toogleCart}>Login to start shopping</Link>
                )}
              </div>
            </>
          ) : (
            <p className="center">
              The cart is currently empty select items to add them
            </p>
          )}
        </section>
      </div>
    )
  );
};

export default Cart;
