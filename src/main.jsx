import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"

;
import { JounarlApp } from "./JounarlApp";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <JounarlApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
