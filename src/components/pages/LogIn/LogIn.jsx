import { Link } from "react-router-dom";
import { GlobalContext } from '../../store/GlobalState'
import { useContext, useState,useEffect} from 'react';
import {useNavigate } from "react-router";
import useScrollToTop from "../../../customHooks/useScroll";

const LogIn = () => {

    const {dispatch} = useContext(GlobalContext);
    const navigate = useNavigate();
    const [name,setName] = useState("");

    useEffect(()=>{
         dispatch({
         type:"toogleCart",
         payload: false
        });
    },[dispatch]);
   

    const logIn = (e)=>{
        e.preventDefault();
        dispatch({
            type:"changeLogIn"
        });
        dispatch({
            type:"toggleAvatar",
            payload: name
        });
        navigate('/shop');
    }

    useScrollToTop();

    return (
        <main className="log-in">
            <h1>Log In</h1>
            <form className="center form-layout" onSubmit={logIn}>
                <div>
                <label htmlFor="name">Username</label><br />
                <input type="text" placeholder="enter your username" 
                id="name" required
                onChange={(e)=> setName(e.target.value)} value={name}
                />
                </div>
                <div>
                  <label htmlFor="password">Password</label><br />
                  <input type="password" id="password" placeholder="enter your password" required/>  
                </div>
                <div>
                    <button type="submit">Log in</button>
                </div>
                <div className="form-text">
                    <p>Forgot Password?</p>
                    <p>
                    <Link to={'/signup'} className="link-to">Click here </Link>to sign up if you dont have an account.
                    </p>
                </div>
            </form>
            
        </main>
    )
}

export default LogIn;
