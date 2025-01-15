import React from 'react';
import { useNavigate } from "react-router-dom";
import ModernCarousel from './ModernCarousel';
import UpperNavbar from './UpperNavbar';
// import "../i18n";

function HomePage() {
  // const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  return (
    
    <div>
        <UpperNavbar/>
        <ModernCarousel/>
    </div>
  );
}

export default HomePage;
