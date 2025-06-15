

import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import About from "./components/Pages/about/About";

import ProjectsMe from "./components/Pages/Projects/ProjectsMe";
import MessageMe from "./components/Pages/contact/MessageMe";






function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<MessageMe/>}/>
      <Route path="/projects" element={<ProjectsMe/>}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
