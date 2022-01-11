import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLogin: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const isLogin = !!token;

  const calculateRemainingTime = (epirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date().getTime();

    const remainingDuration = adjExpirationTime - currentTime;

    return remainingDuration;
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const loginHandler = (token, expirationTime) => {
    localStorage.setItem("token", token);
    setToken(token);
    const remainingTime = calculateRemainingTime(expirationTime);

    // setTimeout(logoutHandler, remainingTime);
    setTimeout(logoutHandler, 15000);//test auto logout
  };

  const contextValue = {
    token: token,
    isLogin: isLogin,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
