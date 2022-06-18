import { Link } from "react-router-dom";
import { GlobalContext } from "../store/GlobalState";
import { useContext } from "react";
import LogOutModal from "./LogOutModal";
import Avatar from "./Avatar";
import MenuItems from "./MenuItems";
import {BsList} from 'react-icons/bs'

const Header = () => {
  const {
    user,
    logOutModal,
    dispatch,
    cartProducts,
    menuStatus,
  } = useContext(GlobalContext);

  const openModal = () => {
    dispatch({
      type: "toggleLogOutModal",
    });
  };
  const toogleCart = () => {
    dispatch({
      type: "toogleCart",
      payload: "",
    });
  };
  const toogleMenu = () => {
    dispatch({
      type: "toogleMenu",
      payload: "",
    });
  };

  const count = cartProducts.length;

  return (
    <header>
      <h1 className="logo">
        G<i className="fab fa-envira"></i>EENS
      </h1>
      <MenuItems
        isLoggedIn={user.isLoggedIn}
        navClass={`small-menu ${menuStatus ? " show" : null}`}
        menuToogle={toogleMenu}
      />
      <MenuItems navClass={"main-nav center"} isLoggedIn={user.isLoggedIn} />
      <div className="login">
        {logOutModal && <LogOutModal name={user.name} />}
        {user.isLoggedIn ? (
          <div onClick={openModal}>
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
      className={`center hamb ${menuStatus ? "open" : null}`}
      onClick={toogleMenu}>
          <BsList />
      </div>
    </header>
  );
};

export default Header;
