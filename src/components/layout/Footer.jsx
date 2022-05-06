import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="center">
           <address>
               <h3>Contacts</h3>
               <div className="icons">
                   <i className="fas fa-phone"></i>
                   <span>+2547666255322</span> <br />
                   <i className="fab fa-facebook"></i>
                   <span>greensstores</span> <br />
                   <i className="fab fa-instagram"></i>
                   <span>greensstores</span> <br />
                   <i className="fab fa-twitter"></i>
                   <span>greensstores</span> <br />
                   <i className="fas fa-envelope"></i>
                   <span>greensstores</span> <br />
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
               <div>
               <h1 className="logo">G<i className='fab fa-envira'></i>EENS</h1>
               </div>
           </article>
        </footer>
    )
}

export default Footer;
