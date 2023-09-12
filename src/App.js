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



// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
// import LoginForm from './modules/auth/LoginForm';
// import Dashboard from './modules/auth/Dashboard';
// import HomePage from './Pages/Home/HomePage'

// const PrivateRoute = ({ element: Element, isAuthenticated }) => {
//   const navigate = useNavigate();

//   if (!isAuthenticated) {
//     // Redirect to the login page
//     navigate('/login');
//     return null; // You can also return a loading indicator or a message here
//   }

//   return <Element />;
// };

// const PublicRoute = ({ element: Element, isAuthenticated, restricted }) => {
//   const navigate = useNavigate();

//   if (isAuthenticated && restricted) {
//     // Redirect to the dashboard if authenticated and route is restricted
//     navigate('/dashboard');
//     return null; // You can also return a loading indicator or a message here
//   }

//   return <Element />;
// };

// const App = () => {
//   const isAuthenticated = true; // Replace with actual authentication logic

//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<HomePage/>}></Route>
//         <Route path="/login"  element={<LoginForm />} />
//         <Route path="/dashboard" element={<Dashboard />}  />
//       </Routes>
//     </Router>
//   );
// };

// export default App;


