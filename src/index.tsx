import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./components/App/App";
import store from "./state/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("app")
);
