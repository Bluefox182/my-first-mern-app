import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };
      await axios.post("http://localhost:5000/auth/login", loginData);
      // await axios.post(
      //   "https://my-mern-login-app.herokuapp.com/auth/login",
      //   loginData
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
        <h1>Log in to your account</h1>
        <form onSubmit={login} className="register-form">
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
          <button type="submit" className="register-form_button">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
