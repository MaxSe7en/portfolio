import React from "react";
import {
  Blog,
  Footer,
  Possibillity,
  Features,
  Header,
  WhatGPT3,
} from "./Containers";
import { Cta, Brand, Navbar } from "./Components";
import "./App.css";
import Profesional from "./Containers/Professional/Professional";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Profesional />
      <Possibillity />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
