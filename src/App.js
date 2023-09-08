import React from "react";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./gobal.css";
import About from "./pages/about/About";
import Stepper from "./Pages/Stages/Stepper";



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="/stepper" element={<Stepper/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
