import {Link} from 'react-router-dom';
import { GlobalContext } from '../store/GlobalState';
import { useContext } from 'react';
import LogOutModal from './LogOutModal';
import Avatar from './Avatar';
import MenuItems from './MenuItems';

const Header = () =>{ 

    const {isLoggedIn,logOutModal,dispatch,userName,products,menuStatus} = useContext(GlobalContext);

    const openModal = ()=>{
        dispatch({
            type:"toggleLogOutModal"
        });
    }
    const toogleCart = ()=>{
        dispatch({
        type:"toogleCart",
        payload:'',
    });
    }
    const toogleMenu = ()=>{
        dispatch({
        type:"toogleMenu",
        payload:'',
    });
    }

    let count = 0;
    products.forEach(product=> product.isInCart && count++)

    return(
    <header>
        <h1 className="logo">G<i className='fab fa-envira'></i>EENS</h1>
        <MenuItems navClass={`small-menu ${menuStatus ? ' show' : null}`} menuToogle = {toogleMenu}/>
        <MenuItems navClass={'main-nav center'} />
        <div className='login' >
                {logOutModal && <LogOutModal name={userName}/>}  
                {isLoggedIn  ? (
                    <div onClick={openModal}>
                      <Avatar name={userName}/>  
                    </div>
                ): <Link to={'/logIn'}>Log in</Link>  }
        </div>
        <div className="cart-count center" onClick={toogleCart}>
            <i className='fas fa-shopping-cart'></i>
            <p>{count}</p>
        </div>
        <div className={`hamb ${menuStatus ? 'open' : null}`} onClick={toogleMenu}></div>
    </header>
    );
}

export default Header;