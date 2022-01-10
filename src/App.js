import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import UserProfilePage from "./pages/UserProfilePage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/auth">
          <AuthPage />
        </Route>
        <Route path="/profile">
          <UserProfilePage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
