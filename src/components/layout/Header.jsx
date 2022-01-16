import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';
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
                <li><Link to="/">Shop</Link></li>
                <li><Link to="/">Help</Link></li>
                <li className='login'><Link to="/">Log In</Link></li>
                <li><Link to="/">Sign Up</Link></li> 
            </ul>
        </nav>
        <SearchBar />
    </header>
    )
}

export default Header;