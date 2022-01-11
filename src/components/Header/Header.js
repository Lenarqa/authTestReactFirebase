import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";
import AuthContext from "../store/auth-context";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const isLogin = authCtx.isLogin;

  const logoutHandler = () => {
    authCtx.logout();
  };

  return (
    <header className={classes.header}>
      <h1>React Auth</h1>
      <div className={classes.links}>
        {!isLogin && <NavLink to="/auth">Login</NavLink>}
        {isLogin && <NavLink to="/profile">Profile</NavLink>}
        {isLogin && <button className={classes.logoutBtn} to="/logout" onClick={logoutHandler}>Logout</button>}
      </div>
    </header>
  );
};

export default Header;
