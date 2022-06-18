import { useContext,useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import postData from "../../../customHooks/postData";
import { GlobalContext } from "../../store/GlobalState";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartProducts, isCartOpen, dispatch, user } =
    useContext(GlobalContext);
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const closeCart = () => {
    dispatch({
      type: "toogleCart",
      payload: "",
    });
  };

  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0);

  const makeTransaction = async () => {
    if(loading) return;
    setLoading(true);
    const res = await postData(
      "/transactions",
      {
        transaction: {
          cost: totalPrice,
          products: cartProducts.map((item) => item._id),
        },
      },
      user.token
    );
    if (!res.error) {
        dispatch({
            type:"clearCart"
        });
      navigate('/profile');
      closeCart();
    }
    setLoading(false);
  };

  const count = cartProducts.length;

  return (
    isCartOpen && (
      <div className="cart">
        <section>
          <button className="close-cart" onClick={closeCart}>
            <i className="fas fa-arrow-left"></i> &nbsp;Back
          </button>
          <h2>Selected Products {`(${count})`} </h2>
          {cartProducts.length ? (
            <>
              <ul>
                {cartProducts.map((product, index) => (
                  <CartItem key={index} product={product} />
                ))}
              </ul>
              <div className="total">
                <label className="cost">Total:${totalPrice}</label>
                {user.isLoggedIn ? (
                  <button onClick={makeTransaction} >Check Out</button>
                ) : (
                  <Link to={"login"}>Login to start shopping</Link>
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
