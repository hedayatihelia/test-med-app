import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Landing_page from './Components/Landing_Page/Landing_Page';

function App() {
  return (
   <div className="App">
    <BrowserRouter>
         <Navbar />

        <Routes>
            <Route path="/" element={<Landing_page />} />
        </Routes>
    </BrowserRouter>
    
   </div>
  );
}

export default App;
