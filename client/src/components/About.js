import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      className="about-section text-center py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src="https://via.placeholder.com/150" // Replace with your profile picture
        alt="Profile"
        className="rounded-circle mb-3"
        style={{ width: "150px", height: "150px" }}
      />
      <h2>Aahil Shaikh</h2>
      <p className="lead">Full-Stack Developer | Passionate about building scalable web apps</p>
      <p>
        Skills: React, Node.js, Express, MongoDB, Docker, AWS
      </p>
    </motion.div>
  );
}
export default About;