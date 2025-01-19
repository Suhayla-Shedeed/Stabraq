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
        <div className="" style={{ fontSize: "24px", fontWeight: "800" }}>
          <h1 className="text-start p-5">Contact Us</h1>
          <div className="text-start p-5"><p>
            <i className="bi bi-geo-alt-fill "></i> Nasr City, Cairo
          </p>
          <p>
            <i className="bi bi-telephone-fill"></i> 01123399345
          </p>
          <p>
            <i className="bi bi-envelope-fill"></i> info@stabraq.com
          </p></div>
        </div>
      </motion.div>
    </>
  );
}

export default ContactUs;
