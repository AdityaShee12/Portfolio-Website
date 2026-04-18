import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await axios.post("http://localhost:5000/api/send", formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 3000);
    } catch (err) {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen bg-transparent pt-32 pb-24 px-6 lg:px-16 flex items-center justify-center pointer-events-auto"
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 flex flex-col justify-between"
        >
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get in <span className="text-blue-400">Touch</span>
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed max-w-md">
              Have a project in mind or simply want to say hi? I'd love to hear from you. Drop a message below and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:sheeaditya12@gmail.com" className="text-white text-lg hover:text-blue-300 transition-colors cursor-none">
                    sheeaditya12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+918910384698" className="text-white text-lg hover:text-blue-300 transition-colors cursor-none">
                    +91 89103 84698
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.2)]">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white text-lg">South 24 Parganas, WB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-900/40 transition-all duration-300 text-2xl cursor-none">
              <FaGithub />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-black/40 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:border-blue-500 hover:bg-blue-900/40 transition-all duration-300 text-2xl cursor-none">
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 bg-black/40 rounded-2xl p-8 lg:p-10 border border-white/5"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-gray-300 font-medium">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500 cursor-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-gray-300 font-medium">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500 cursor-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm text-gray-300 font-medium">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500 cursor-none"
                placeholder="How can I help you?"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm text-gray-300 font-medium">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-500 resize-none cursor-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className={`w-full py-4 rounded-xl text-white font-bold text-lg transition-all duration-300 cursor-none ${
                status === "sending" 
                  ? "bg-blue-600/50 cursor-not-allowed" 
                  : status === "success"
                  ? "bg-green-500 hover:bg-green-600"
                  : status === "error"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1"
              }`}
            >
              {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Failed to Send" : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
