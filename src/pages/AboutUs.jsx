import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start position
        animate={{ opacity: 1, y: 0 }} // End position
        exit={{ opacity: 0, y: 20 }} // Exit animation
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div
          className=" d-flex  p-5"
          style={{ fontSize: "24px", fontWeight: "800" }}
        >
          <span className=" p-2">عن إستبرق</span>
          <span className=" p-2">|</span>
          <span className=" p-2">ABOUT US</span>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
