import { Link } from "react-router-dom";
import LogOutModal from "./LogOutModal";
import Avatar from "./Avatar";
import MenuItems from "./MenuItems";
import {BsList} from 'react-icons/bs'
import {useDispatch,useSelector} from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../store/actions/menuActions";
import {toogleCart as setCart} from "../../store/actions/cartActions"

const Header = () => {
  const {products} = useSelector(state => state.cart);
  const user = useSelector(state=> state.user);
  const {mobileMenu,modal} = useSelector(state=> state.menu);
  const dispatch = useDispatch();
  const {toogleMenu,toogleModal} = bindActionCreators({...actions},dispatch);
  const toogleCart = bindActionCreators(setCart,dispatch);
  const count = products.reduce((start,product)=>{
        return start + product.amount;
  },0);

  return (
    <header>
      <h1 className="logo">
        G<i className="fab fa-envira"></i>EENS
      </h1>
      <MenuItems
        isLoggedIn={user.isLoggedIn}
        navClass={`small-menu ${mobileMenu ? " show" : null}`}
        menuToogle={toogleMenu}
      />
      <MenuItems navClass={"main-nav center"} isLoggedIn={user.isLoggedIn} />
      <div className="login">
        {modal && <LogOutModal name={user.name} />}
        {user.isLoggedIn ? (
          <div onClick={toogleModal}>
            <Avatar name={user.name} />
          </div>
        ) : (
          <Link to={"/logIn"}>Log in</Link>
        )}
      </div>
      <div className="cart-count center" onClick={toogleCart}>
        <i className="fas fa-shopping-cart"></i>
        <p>{count}</p>
      </div>
      <div 
      className={`center hamb ${mobileMenu ? "open" : null}`}
      onClick={toogleMenu}>
          <BsList />
      </div>
    </header>
  );
};

export default Header;
