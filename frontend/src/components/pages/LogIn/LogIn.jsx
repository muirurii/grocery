import { Link } from "react-router-dom";
import { GlobalContext } from "../../store/GlobalState";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
import useScrollToTop from "../../../customHooks/useScroll";
import postData from "../../../customHooks/postData";

const LogIn = () => {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    dispatch({
      type: "toogleCart",
      payload: false,
    });
  }, [dispatch]);

  const logIn = async (e) => {
    e.preventDefault();

    if (details.email.length < 2 || details.password.length < 2) {
      return setMessage("Password or name is too short");
    }
    const res = await postData("/users/login", {
      email: details.email,
      password: details.password,
    });
    
    if (res.error) {
      return setMessage(res.data);
    } else {
      dispatch({
        type: "changeLogIn",
        payload: {
          token: res.data.token,
          name:res.data.user.name,
          email:res.data.user.email
        },
      });
      dispatch({
        type: "toggleAvatar",
        payload: res.data.user.name,
      });
      navigate("/shop");
    }
  };

  useScrollToTop();

  return (
    <main className="log-in">
      <h1>Log In</h1>
      <form className="center form-layout" onSubmit={logIn}>
        <p className="message">{message}</p>
        <div>
          <label htmlFor="name">Email</label>
          <br />
          <input
            type="text"
            placeholder="enter your email"
            id="name"
            required
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.name}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            placeholder="enter your password"
            required
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            value={details.password}
          />
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
        <div className="form-text">
          <p>
            <Link to={"/signup"} className="link-to">
              Click here{" "}
            </Link>
            to sign up if you dont have an account.
          </p>
        </div>
      </form>
    </main>
  );
};

export default LogIn;
