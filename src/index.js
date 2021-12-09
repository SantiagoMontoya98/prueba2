import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Home from "./containers/Home";
import { store } from "./redux/store/store";

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById("root")
);
