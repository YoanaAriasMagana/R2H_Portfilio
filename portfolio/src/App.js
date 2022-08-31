import React from 'react';
// import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import NavBar from "./Components/NavBar";

import './App.css';

function App() {
  return (
    <>
    <NavBar/>
    <About />
    <Skills />
    <Projects />
    <Contact />
    </>
  );
}

export default App;