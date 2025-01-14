import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import './App.css'
import HomePage from './pages/HomePage'
import ModernCarousel from './pages/ModernCarousel'
import Navbar from './pages/UpperNavbar';
import Registeration from './pages/Registeration';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moderncarousel" element={<ModernCarousel />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/registeration" element={<Registeration />} />

      </Routes>
    </Router>
  );
}

export default App;
