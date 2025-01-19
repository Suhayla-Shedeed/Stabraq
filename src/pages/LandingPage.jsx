import React from 'react';
import { useNavigate } from "react-router-dom";
import ModernCarousel from './ModernCarousel';
import { motion } from "framer-motion"; 


function HomePage() {

  const navigate = useNavigate();
  return (
    <><motion.div
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }} 
    >
      <div>
        <ModernCarousel />

      </div>

    </motion.div></>

  );
}

export default HomePage;
