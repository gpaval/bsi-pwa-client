import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import routes from "./constants/routesConstants";
import Homepage from "./pages/Homepage/Homepage";
import Register from "./pages/Register/Register";
import Successfully from "./pages/Successfully/Successfully";
import Yourdata from "./pages/Yourdata/Yourdata";

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
        <Route path={routes.yourData}> <Yourdata/></Route>
        <Route path={routes.successfulIdentify}>
          <Successfully/>
        </Route>
        <Route path={routes.identify}></Route>
        <Redirect to={routes.homePage}></Redirect>
      </Switch>
    </Router>
  );
}

export default AppRoutes;
