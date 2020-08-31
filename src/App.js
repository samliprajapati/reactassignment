import React from "react";
import "./App.css";
import "antd/dist/antd.css";
import Login from "./Container/Auth/Login";
import { Route, Switch } from "react-router-dom";
import MainApp from "./MainApp";
import Register from "./Container/Auth/Register";
import PrivateRoute from "./Container/Auth/PrivateRoute";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/" component={MainApp} />
      </Switch>
    </div>
  );
}

export default App;
