import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppRoutes from "./AppRoutes";
import * as serviceWorker from "./serviceWorker";
import Amplify from "aws-amplify";

Amplify.configure({
  Auth: {
    region: process.env.REACT_APP_REGION,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_APP_CLIENT_ID,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
