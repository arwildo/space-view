import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Landing from "./components/landing";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>,
  rootElement
);
