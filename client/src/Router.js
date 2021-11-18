import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import AuthContext from "./context/AuthContext";
import Customers from "./components/Customers";
import "./index.css";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/"></Route>
        {loggedIn === false && (
          <>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/customer">
              <Customers />
              <div>Customers</div>
            </Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
