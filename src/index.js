import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Landing from "./components/landing";
import News from "./components/news";
import About from "./components/about";

const Index = () => {
	return [<Landing />, <News />, <About />]
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
