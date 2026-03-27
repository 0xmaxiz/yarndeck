import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Home from "./Home";
import Blog from "./Blog";
import Login from "./Login";
import Signup from "./Signup";

function App() {
  return (

    <BrowserRouter>
      {/* navbar */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
  
        </Routes>

    

    </BrowserRouter>
    
  );
}

export default App;
