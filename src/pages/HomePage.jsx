import React from 'react';
import { useNavigate } from "react-router-dom";
import ModernCarousel from './ModernCarousel';
import UpperNavbar from './UpperNavbar';

function HomePage() {
  const navigate = useNavigate();
  return (
    
    <div>
        <UpperNavbar/>
        <ModernCarousel/>
    </div>
  );
}

export default HomePage;
