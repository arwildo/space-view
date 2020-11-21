import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Landing from "./components/landing";
import News from "./components/news";
import About from "./components/about";
import Footer from "./components/footer";

const Index = () => {
  // News smooth scroll
  const newsRef = useRef(null);
  const scrollToNews = () => {
    newsRef.current.scrollIntoView({behavior: "smooth"});
  }

  // About smooth scroll
  const aboutRef = useRef(null);
  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({behavior: "smooth"});
  }

	return [<Landing scrollToNews={scrollToNews} scrollToAbout={scrollToAbout} />, <News ref={newsRef} />, <About ref={aboutRef} />, <Footer />]
};

const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
