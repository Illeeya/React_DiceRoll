import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Inputs from "./modules/Inputs";
import Button from "./modules/Button";
import Results from "./modules/Results";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Inputs />
    <Button />
    <Results />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
