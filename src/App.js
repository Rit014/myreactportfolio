import React from 'react';
import Navbar from './Component/NavBar';
import About from './Component/About';
import Project from './Component/Project';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Contact from './Component/Contact';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() { 
  
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
