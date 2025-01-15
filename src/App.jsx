import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router components
import './App.css'
import LandingPage from './pages/LandingPage'
import ModernCarousel from './pages/ModernCarousel'
import UpperNavbar from './pages/UpperNavbar';
import Registeration from './pages/Registeration';
import Item from './pages/Item';
import HomePage from './pages/HomePage';
import ItemDetails from './pages/ItemDetails';

function App() {
  // const { i18n } = useTranslation();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/moderncarousel" element={<ModernCarousel />} />
        <Route path="/nav" element={<UpperNavbar />} />
        <Route path="/registeration" element={<Registeration />} />
        <Route path="/item" element={<Item />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/itemdetails" element={<ItemDetails />} />


      </Routes>
    </Router>
  );
}

export default App;
