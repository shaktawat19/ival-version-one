import React from "react";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./gobal.css";
import About from "./pages/about/About";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
