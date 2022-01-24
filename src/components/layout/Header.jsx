import {Link} from 'react-router-dom';
import { GlobalContext } from '../store/GlobalState';
import { useContext } from 'react';
import LogOutModal from './LogOutModal';
import Avatar from './Avatar';

const Header = () =>{ 

    const {isLoggedIn,logOutModal,dispatch,userName,products} = useContext(GlobalContext);

    const openModal = ()=>{
        dispatch({
            type:"toggleLogOutModal"
        });
    }
    const toggleCart = ()=>{
        dispatch({
        type:"toogleCart",
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
            <ul>
                <div className="big-screen-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/about">About us</Link></li>
                </div>
                <div>
                    {!isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
                    <li className='login' >
                        {isLoggedIn ? <button onClick ={openModal}>Logout</button>: <Link to={'/logIn'}>LogIn</Link>}
                    {logOutModal && <LogOutModal />}  
                    {isLoggedIn  && <Avatar name={userName}/>}
                    </li>
                </div>
            </ul>
        </nav>
        <div className="cart-count center" onClick={toggleCart}>
            <i className='fas fa-shopping-cart'></i>
            <p>{count}</p>
        </div>
    </header>
    )
}

export default Header;