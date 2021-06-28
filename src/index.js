import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AlertExample } from "./contexts/AlertContext";

ReactDOM.render(
  <React.StrictMode>
    <AlertExample>
      <App />
    </AlertExample>
  </React.StrictMode>,
  document.getElementById("root")
);
