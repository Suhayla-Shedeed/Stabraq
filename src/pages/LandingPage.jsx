import React from 'react';
import { useNavigate } from "react-router-dom";
import ModernCarousel from './ModernCarousel';
import { motion } from "framer-motion"; 


// import "../i18n";

function HomePage() {
  // const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  return (
    <><motion.div
      initial={{ opacity: 0, y: 20 }} // Start position
      animate={{ opacity: 1, y: 0 }} // End position
      exit={{ opacity: 0, y: 20 }} // Exit animation
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div>
        <ModernCarousel />
      </div>
    </motion.div></>

  );
}

export default HomePage;
