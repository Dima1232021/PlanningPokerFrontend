import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ActionCableProvider } from "react-actioncable-provider";
import { API_WS_URL } from "./config";
import { store } from "./store/index";
import ListActionCable from "./components/ListActionCable";

ReactDOM.render(
  <ActionCableProvider url={API_WS_URL}>
    <Provider store={store}>
      <BrowserRouter>
        <ListActionCable />
        <App />
      </BrowserRouter>
    </Provider>
  </ActionCableProvider>,
  document.getElementById("root")
);
