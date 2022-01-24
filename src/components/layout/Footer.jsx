import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
           <address>
               <h3>Contacts</h3>
               <div className="icons">
               <i className="fab fa-facebook"></i>
               <i className="fab fa-instagram"></i>
               <i className="fab fa-twitter"></i>
               <i className="fab fa-email"></i>
               </div>
               <div>
                   <i className="fas fa-phone"></i>
                   +2547666255322
               </div>
           </address>
           <article>
               <h3>Quick Links</h3>
               <ul>
                   <li><Link to={'/grocery'}>Home</Link></li>
                   <li><Link to={'/shop'}>Shop</Link></li>
                   <li><Link to={'/about'}>About Us</Link></li>
                   <li><Link to={'/signup'}>Sign up</Link></li>
               </ul>
           </article>
           <article>
               <h3>Partners</h3>
               <div>
                   <i className="fas"></i>
                   <i className="fas"></i>
                   <i className="fas"></i>
                   <i className="fas"></i>
               </div>
               <div>
                   <h2>Greens</h2> 
                   Copyright&copy; 2022
               </div>
           </article>
        </footer>
    )
}

export default Footer;
