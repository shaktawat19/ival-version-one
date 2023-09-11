import React from "react";
// import Home from "./Pages/Stages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import "./gobal.css"
import Stepper from "./Pages/Stages/Stepper";
import Login from "./components/auth/component/Login";



const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/stepper" element={<Stepper/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
