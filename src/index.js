import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import ReactGA from 'react-ga';

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

	return [<Landing scrollToNews={scrollToNews} scrollToAbout={scrollToAbout} />, <News ref={newsRef} />, <About ref={aboutRef} />, <Footer scrollToNews={scrollToNews} scrollToAbout={scrollToAbout} />]
};

ReactGA.initialize('UA-51659765-2');
const rootElement = document.getElementById("root");
ReactDOM.render(<Index />, rootElement);
