import React, { Fragment, useContext } from "react";
import AuthContext from "./components/store/auth-context";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import AuthPage from "./pages/AuthPage";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLogin && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/profile">
          {authCtx.isLogin && <UserProfilePage />}
          {!authCtx.isLogin && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
