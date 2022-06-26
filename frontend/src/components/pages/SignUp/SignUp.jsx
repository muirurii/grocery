import { Link ,useNavigate} from "react-router-dom";
import useScrollToTop from "../../../customHooks/useScroll";
import { useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../store/actions/userActions";

const SignUp = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const dispatch= useDispatch();
  const {error} = useSelector(state => state.user);
  
  const {setError,setUser} = bindActionCreators({...actions},dispatch);

  const [details,setDetails] = useState({
    name:'',
    email:'',
    password: '',
    repeatPass:''
  });
  

  const registerUser = async(e)=>{
    e.preventDefault();
    if(details.name.length < 3 || details.email.length < 3 || details.password.length < 3){
      return setError("password or name is too short");
    }
    if(details.password !== details.repeatPass){
      return setError("passwords dont match");
    }
    
   const res = await setUser({
      name:details.name,
      email:details.email,
      password:details.password
    },'new');

    if(!res.success){
      return setError(res.error)
    } else{      
      setError('');
      navigate("/shop");
    }
  }

  return (
    <main className="sign-up">
      <h1>Create account</h1>
      <form className="center form-layout" onSubmit={registerUser}>
        <p className="message">{error}</p>
        <div>
          <label htmlFor="user-name">Username</label>
          <br />
          <input
            type="text"
            placeholder="enter your username"
            id="user-name"
            required
            value={details.name}
            onChange={(e)=> setDetails({...details,name:e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            placeholder="enter your email"
            required
            value={details.email}
            onChange={(e)=> setDetails({...details,email:e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="enter a password"
            required
            value={details.password}
            onChange={(e)=> setDetails({...details,password:e.target.value})}
          />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="re-enter the password"
            required
            value={details.repeatPass}
            onChange={(e)=> setDetails({...details,repeatPass:e.target.value})}
          />
        </div>
        <div>
          <button type="submit">Sign Up</button>
        </div>
        <div className="form-text">
          <p>
            Already have an account?{" "}
            <Link to={"/login"} className="link-to">
              Log in
            </Link>
          </p>
        </div>
      </form>
    </main>
  );
};

export default SignUp;
