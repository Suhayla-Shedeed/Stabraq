import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function ContactUs() {
  const navigate = useNavigate();
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }} // Start position
        animate={{ opacity: 1, y: 0 }} // End position
        exit={{ opacity: 0, y: 20 }} // Exit animation
        transition={{ duration: 0.5 }} // Animation duration
      >
        <div className="contact-us-container">
      <h1 className="text-start p-5">Contact Us</h1>        
      </div>
      </motion.div>
    </>
  );
}

export default ContactUs;
