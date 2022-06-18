import { Link ,useNavigate} from "react-router-dom";
import useScrollToTop from "../../../customHooks/useScroll";
import { GlobalContext } from "../../store/GlobalState";
import postData from "../../../customHooks/postData";
import { useState,useContext } from "react";

const SignUp = () => {
  useScrollToTop();
  const navigate = useNavigate();
  const {dispatch}= useContext(GlobalContext);

  const [details,setDetails] = useState({
    name:'',
    email:'',
    password: '',
    repeatPass:''
  });
  const [message,setMessage] = useState('');  

  const registerUser = async(e)=>{
    e.preventDefault();
    if(details.name.length < 3 || details.email.length < 3 || details.password.length < 3){
      return setMessage("password or name is too short");
    }
    if(details.password !== details.repeatPass){
      return setMessage("passwords dont match");
    }

    const res = await postData('/users/new',{
      name:details.name,
      email:details.email,
      password:details.password
    });

    if(res.error){
      return setMessage(res.data.message);
    } else{
      dispatch({
        type: "changeLogIn",
        payload: {
          token: res.data.user.token,
          name: res.data.user.name,
          email: res.data.user.email
        },
      });
      dispatch({
        type: "toggleAvatar",
        payload: details.name,
      });
      navigate("/shop");
    }
  }

  return (
    <main className="sign-up">
      <h1>Create account</h1>
      <form className="center form-layout" onSubmit={registerUser}>
        <p className="message">{message}</p>
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
