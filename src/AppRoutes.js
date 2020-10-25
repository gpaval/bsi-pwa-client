import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./constants/routesConstants";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={routes.homePage}></Route>
        <Route path={routes.register}></Route>
        <Route path={routes.yourData}></Route>
        <Route path={routes.successfulIdentify}></Route>
        <Route path={routes.identify}></Route>
        <Redirect to={routes.homePage}></Redirect>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
