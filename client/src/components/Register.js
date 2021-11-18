import React, { useContext, useState } from "react";
import axios from "axios";
import AuthContext from "../context/AuthContext";
import { useHistory } from "react-router-dom";
import "../index.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        email,
        password,
        passwordVerify,
      };
      await axios.post("http://localhost:5000/auth/", registerData);
      // await axios.post(
      //   "https://my-mern-login-app.herokuapp.com/auth/",
      //   registerData
      // );
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="register-main-container">
      <div className="register-container">
        <h1>Register a new account</h1>
        <form onSubmit={register} className="register-form">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="register-form_input"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="register-form_input"
          />
          <input
            type="password"
            placeholder="Verify your Password"
            onChange={(e) => setPasswordVerify(e.target.value)}
            value={passwordVerify}
            className="register-form_input"
          />
          <button type="submit" className="register-form_button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
