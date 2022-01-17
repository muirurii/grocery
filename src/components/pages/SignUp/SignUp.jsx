import { Link } from "react-router-dom";
const SignUp = () => {
    return (
        <main className="sign-in center">
            <form className="center form-layout">
                <div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="enter your name" id="name"/>
                </div>
                <div>
                <label htmlFor="user-name">Username</label>
                <input type="text" placeholder="enter your username" id="user-name"/>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="enter your email"/>  
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="enter a password"/>  
                </div>
                <div>
                  <label htmlFor="password">Confirm Password</label>
                  <input type="password" id="password" placeholder="re-enter the password"/>  
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