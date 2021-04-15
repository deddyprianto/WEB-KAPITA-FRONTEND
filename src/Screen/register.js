import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { actionRegister } from "../actions/actionsLogin";
import { CircularProgress } from "@material-ui/core";

function Register(props) {
  const regis = useSelector((state) => state.regis);
  const { loading, error, datauser } = regis;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const dispatch = useDispatch();
  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";
  useEffect(() => {
    if (datauser) {
      props.history.push(redirect);
    }
  }, [datauser]);
  const formhandlerregister = (e) => {
    e.preventDefault();
    dispatch(actionRegister(username, email, pass));
  };
  return (
    <div className="container">
      <form onSubmit={formhandlerregister}>
        <ul className="container-list">
          <li>
            {loading && <CircularProgress className="loading" />}
            {error && <div>{error}</div>}
          </li>
          <li>
            <h2>Create account</h2>
          </li>
          <li>
            <label htmlFor="text">Username</label>
            <input
              type="text"
              name="text"
              id="text"
              onChange={(e) => setUsername(e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
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
              Register
            </button>
          </li>
          <li>
            Already Have account , register Now
            <Link
              to={redirect === "/" ? "/sign" : `/sign?redirect=${redirect}`}
              className="button secondary text-center"
            >
              Register
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
}
export default Register;
