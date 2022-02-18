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
        <div className="logo">
            <h1>GREENS <i className='fab fa-envira'></i> </h1>
        </div>
        <nav className='main-nav'>
                <div className="big-screen-nav">
                    <MenuItems />
                </div>
        </nav>
        <div className='login' >
                {isLoggedIn ? <button onClick ={openModal}>Logout</button>: <Link to={'/logIn'}>LogIn</Link>}
                {logOutModal && <LogOutModal />}  
                {isLoggedIn  && <Avatar name={userName}/>}
        </div>
        <div className="cart-count center" onClick={toogleCart}>
            <i className='fas fa-shopping-cart'></i>
            <p>{count}</p>
        </div>
        <div className={`hamb ${menuStatus ? 'open' : null}`} onClick={toogleMenu}></div>
        <section className={`small-menu ${menuStatus ? ' show' : null}`} onClick={toogleMenu}>
            <MenuItems />
        </section>
    </header>
    )
}

export default Header;