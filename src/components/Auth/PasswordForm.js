import React, { useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import classes from "./PasswordForm.module.css";
import AuthContext from "../store/auth-context";

const PasswordForm = (props) => {
  const passwordInputRef = useRef();
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  const changePasswordHandler = (event) => {
    event.preventDefault();
    const enteredPassword = passwordInputRef.current.value;
    
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCsOOjEv1P6zoHk-aBaQJld9HiBYOq4mWo",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(res=>{
      history.replace("/");
    });
  };

  return (
    <div className={classes.form}>
      <h2>New password</h2>
      <input type="password" minLength="7" ref={passwordInputRef} type="text" />
      <button onClick={changePasswordHandler}>Change password</button>
    </div>
  );
};

export default PasswordForm;
