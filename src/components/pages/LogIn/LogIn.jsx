import { Link } from "react-router-dom";
const LogIn = () => {
    return (
        <main className="log-in center">
            <form className="center form-layout">
                <div>
                <label htmlFor="name">Username</label>
                <input type="text" placeholder="enter your username" id="name"/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" placeholder="enter your password"/>  
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
                <div className="form-text">
                    <p>Forgot Password?</p>
                    <p>
                    <Link to={'/signup'} className="link-to">Click here to</Link> sign up if you dont have an account.
                    </p>
                </div>
            </form>
            
        </main>
    )
}

export default LogIn;
