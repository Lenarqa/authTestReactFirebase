import React, { useState, useRef } from "react";
import classes from "./AuthForm.module.css";

const AuthForm = (props) => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  const newAccountHandler = (event) => {
    event.preventDefault();
    setIsLogin((lastLogin) => !lastLogin);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    setIsLoading(true);

    //some validation here
    console.log("submit handler");
    if (isLogin) {
        fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCsOOjEv1P6zoHk-aBaQJld9HiBYOq4mWo", )
    } else {
      fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCsOOjEv1P6zoHk-aBaQJld9HiBYOq4mWo",
        {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        setIsLoading(false);

        if (res.status) {
        } else {
          return res.json().then((data) => {
            let errorMessage = "Autentification fail";
            // if(data && data.error && data.error.message) {
            //     errorMessage = data.error.message;
            // }
            alert(errorMessage);
          });
        }
      });
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <h2>{isLogin ? "Login" : "Sign In"}</h2>
      <label htmlFor="email">Your email</label>
      <input type="email" id="email" ref={emailRef} />
      <label htmlFor="password">Your password</label>
      <input type="password" id="password" ref={passwordRef} />
      {!isLoading && <button type="submit">{isLogin ? "Login" : "Create Account"}</button>}
      {isLoading && <p>Loading...</p>}
      <p onClick={newAccountHandler}>
        {isLogin ? "Create new account" : "Login with existing account"}
      </p>
    </form>
  );
};

export default AuthForm;
