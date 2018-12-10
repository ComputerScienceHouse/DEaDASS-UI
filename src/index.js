import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { OidcProvider } from "redux-oidc";
import configureStore from "./store";
import userManager from "./userManager";
import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <Provider store={configureStore}>
    <OidcProvider store={configureStore} userManager={userManager}>
      <App/>
    </OidcProvider>
  </Provider>,
  document.getElementById("root")
);
