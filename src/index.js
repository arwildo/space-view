import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Landing from "./components/landing";
import News from "./components/news";
import About from "./components/about";
import Footer from "./components/footer";

const Index = () => {
	return [<Landing />, <News />, <About />,<Footer />]
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
