import { Link } from "react-router-dom";
import useScrollToTop from "../../../customHooks/useScroll";


const SignUp = () => {

    useScrollToTop();

    return (
        <main className="sign-up">
            <h1>Sign Up</h1>
            <form className="center form-layout">
                <div>
                <label htmlFor="name">Name</label><br />
                <input type="text" placeholder="enter your name" id="name" required/>
                </div>
                <div>
                <label htmlFor="user-name">Username</label><br />
                <input type="text" placeholder="enter your username" id="user-name" required/>
                </div>
                <div>
                  <label htmlFor="email">Email</label><br />
                  <input type="email" id="email" placeholder="enter your email" required/>  
                </div>
                <div>
                  <label htmlFor="password">Password</label><br />
                  <input type="password" id="password" placeholder="enter a password" required/>  
                </div>
                <div>
                  <label htmlFor="password">Confirm Password</label><br />
                  <input type="password" id="password" placeholder="re-enter the password" required/>  
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
                <div className="form-text">
                    <p>
                    Already have an account? <Link to={'/login'} className="link-to">Log in</Link> 
                    </p>
                </div>
            </form>
            
        </main>
    )
}

export default SignUp;