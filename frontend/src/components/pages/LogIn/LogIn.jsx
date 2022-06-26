import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router";
import useScrollToTop from "../../../customHooks/useScroll";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../../store/actions/userActions";

const LogIn = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.user);
  const { setError, setUser } = bindActionCreators({ ...actions }, dispatch);

  const logIn = async (e) => {
    e.preventDefault();

    if (details.email.length < 2 || details.password.length < 2) {
      return setError("Password or name is too short");
    }
    const res = await setUser(
      {
        email: details.email,
        password: details.password,
      },
      "login"
    );

    if (!res.success) {
      return setError(res.error);
    } else {
      setError("");
      navigate("/shop");
    }
  };

  useScrollToTop();

  return (
    <main className="log-in">
      <h1>Log In</h1>
      <form className="center form-layout" onSubmit={logIn}>
        <p className="message">{error}</p>
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
