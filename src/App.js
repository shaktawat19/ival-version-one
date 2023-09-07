import React from "react";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import About from "./pages/About.jsx";
import MenuNavbar from "./components/menuNavBar/MenuNavbar.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Router>
        {/* <MenuNavbar /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
