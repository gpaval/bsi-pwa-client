import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./constants/routesConstants";
import Homepage from "./pages/Homepage/Homepage";
import Identity from "./pages/Identify/Identify";
import Register from "./pages/Register/Register";

function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route path={routes.register}>
          <Register />
        </Route>
        <Route path={routes.homePage}>
          <Homepage />
        </Route>
        <Route path={routes.identify}>
          <Identity />
        </Route>
        <Route path={routes.yourData}></Route>
        <Route path={routes.successfulIdentify}></Route>
        <Redirect to={routes.homePage}></Redirect>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
