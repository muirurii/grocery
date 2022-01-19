import {Link} from 'react-router-dom';

const Header = () =>{ 
    return(
    <header>
        <div className="top-banner">
            <div className="icons">some icons</div>
        </div>
        <div className="logo">
            <h1>GREENS</h1>
        </div>
        <nav className='main-nav'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                 <li className='login'><Link to="/login">Log In</Link></li>
            </ul>
        </nav>
    </header>
    )
}

export default Header;