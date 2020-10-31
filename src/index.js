import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Landing from "./components/landing";

const Index = () => {
	return <Landing />
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
