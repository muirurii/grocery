import { Link } from "react-router-dom";

const MenuItems = ({navClass,menuToogle})=>{
    
       return(
        <ul className={navClass} onClick={ menuToogle && menuToogle}>
            <li><Link to='/grocery'>Home</Link></li>
            <li><Link to='/shop'>Shop</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/signup'>Sign Up</Link></li>
        </ul>
    );
}

export default MenuItems;