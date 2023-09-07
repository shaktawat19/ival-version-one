import React from "react";
// import Home from "./Pages/Stages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import "./gobal.css"


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
