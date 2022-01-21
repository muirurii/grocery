import {Link} from 'react-router-dom';
import { GlobalContext } from '../store/GlobalState';
import { useContext } from 'react';
import LogOutModal from './LogOutModal';
import Avatar from './Avatar';

const Header = () =>{ 

    const {isLoggedIn,logOutModal,dispatch,userName} = useContext(GlobalContext);

    const openModal = ()=>{
        dispatch({
            type:"toggleLogOutModal"
        });
    }
    return(
    <header>
        <div className="top-banner">
            <div className="icons">some icons</div>
        </div>
        <div className="logo">
            <h1>GREENS <i className='fab fa-envira'></i> </h1>
        </div>
        <nav className='main-nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                {!isLoggedIn && <li><Link to="/signup">Sign Up</Link></li>}
                <li className='login' >
                    {isLoggedIn ? <button onClick ={openModal}>Logout</button>: <Link to={'/logIn'}>LogIn</Link>}
                  {logOutModal && <LogOutModal />}  
                  {isLoggedIn  && <Avatar name={userName}/>}
                </li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;