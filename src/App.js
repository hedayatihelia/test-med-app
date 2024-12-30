import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_page from './Components/Landing_Page/Landing_Page';
import Login from "./Components/Login/Login";
import SignUp from "./Components/Sign_Up/Sign_Up";

function App() {
  return (
   <div className="App">
    <BrowserRouter>
         <Navbar />

        <Routes>
            <Route path="/" element={<Landing_page />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign_up" element={<SignUp />} />
        </Routes>
    </BrowserRouter>
    
   </div>
  );
}

export default App;
