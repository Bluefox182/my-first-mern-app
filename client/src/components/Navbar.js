import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LogOutBtn from "./LogOutBtn";
import "../index.css";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-links">
        Home
      </Link>
      {loggedIn === false && (
        <>
          <Link to="/register" className="navbar-links">
            Register
          </Link>
          <Link to="/login" className="navbar-links">
            Log in
          </Link>
        </>
      )}
      {loggedIn === true && (
        <>
          <Link to="/customer" className="navbar-links">
            Customers
          </Link>
          <LogOutBtn />
        </>
      )}
    </div>
  );
}

export default Navbar;
