import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      "your_service_id", // Replace with your EmailJS Service ID
      "your_template_id", // Replace with your EmailJS Template ID
      formData,
      "your_user_id" // Replace with your EmailJS User ID
    ).then(() => {
      alert("Message sent!");
      setFormData({ name: "", email: "", message: "" });
    }).catch(err => {
      console.error("Error sending email:", err);
      alert("Failed to send message.");
    });
  };

  return (
    <motion.div
      className="contact-section py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-center mb-4">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Message"
            value={formData.message}
            onChange={e => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </motion.div>
  );
}
export default Contact;