import React, { useState, useRef } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const emailRef = useRef();
  const passwordRef = useRef();

    const newAccountHandler = (event) => {
        event.preventDefault();
        setIsLogin((lastLogin) => !lastLogin);
    }

  return (
    <form className={classes.form}>
      <h2>{isLogin ? "Login" : "Create new account"}</h2>
      <label htmlFor="email">Your email</label>
      <input type="email" id="email" ref={emailRef} />
      <label htmlFor="password">Your password</label>
      <input type="password" id="password" ref={passwordRef} />
      <button>{isLogin ? "Login" : "Create"}</button>
      <p onClick={newAccountHandler}>Create new account</p>
    </form>
  );
};

export default AuthForm;
