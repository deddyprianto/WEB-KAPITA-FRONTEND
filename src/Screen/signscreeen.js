import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionlogin } from "../actions/actionsLogin";

function Signin(props) {
  const login = useSelector((state) => state.login);
  const { loading, loginInfo, error } = login;
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    if (loginInfo) {
      props.history.push(redirect);
    }
  }, [loginInfo]);
  const dispatch = useDispatch();
  const formhandler = (e) => {
    e.preventDefault();
    dispatch(actionlogin(username, pass));
  };
  return (
    <div className="container">
      <form onSubmit={formhandler}>
        <ul className="container-list">
          <li>
            {loading && <div>Loading...</div>}
            {error && <div className="tulisan">{error}</div>}
          </li>
          <li>
            <h2>Sign-in</h2>
          </li>
          <li>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPass(e.target.value)}
            ></input>
          </li>
          <li>
            <button className="button primary" type="submit">
              Login
            </button>
          </li>
          <li>new in shopp ?</li>

          <li>
            <Link
              to={
                redirect == "/" ? "/register" : `/register?redirect=${redirect}`
              }
              className="button secondary text-center"
            >
              Create Account
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default Signin;
