import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
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
    <section id="contact" className="relative min-h-screen bg-transparent pt-32 pb-24 px-6 lg:px-16 flex items-center justify-center pointer-events-auto">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-8 glass-panel rounded-3xl p-8 lg:p-12 overflow-hidden">
        
        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-aurora-purple/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-aurora-teal/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none"></div>

        {/* Left Side: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 flex flex-col justify-between relative z-10"
        >
          <div>
            <h2 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Let's <span className="text-gradient-aurora">Connect</span>
            </h2>
            <p className="text-gray-400 font-body text-lg mb-12 leading-relaxed max-w-md">
              Have a project in mind or simply want to say hi? I'd love to hear from you. Drop a message below and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-aurora-teal flex items-center justify-center text-2xl group-hover:bg-aurora-teal group-hover:text-obsidian transition-all duration-300 shadow-lg">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-sm font-syne text-gray-500 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:sheeaditya12@gmail.com" className="text-white font-body text-lg hover:text-aurora-teal transition-colors cursor-none">
                    sheeaditya12@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-aurora-purple flex items-center justify-center text-2xl group-hover:bg-aurora-purple group-hover:text-white transition-all duration-300 shadow-lg">
                  <FaPhone />
                </div>
                <div>
                  <p className="text-sm font-syne text-gray-500 uppercase tracking-widest mb-1">Phone</p>
                  <a href="tel:+918910384698" className="text-white font-body text-lg hover:text-aurora-purple transition-colors cursor-none">
                    +91 89103 84698
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-aurora-orange flex items-center justify-center text-2xl group-hover:bg-aurora-orange group-hover:text-obsidian transition-all duration-300 shadow-lg">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-sm font-syne text-gray-500 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-white font-body text-lg">South 24 Parganas, WB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 flex gap-4 flex-wrap">
            {[ 
              { icon: FaGithub, link: "https://github.com/AdityaShee12" },
              { icon: FaLinkedin, link: "https://linkedin.com" },
              { icon: FaWhatsapp, link: "https://wa.me/8910384698" },
              { icon: FaInstagram, link: "https://www.instagram.com/astrixio.digital" },
              { icon: FaXTwitter, link: "https://x.com" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-12 h-12 rounded-full bg-obsidian border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-aurora-teal hover:shadow-[0_0_15px_rgba(0,245,212,0.3)] transition-all duration-300 text-xl cursor-none"
              >
                <social.icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 relative z-10"
        >
          <div className="bg-obsidian/60 backdrop-blur-sm rounded-3xl p-8 lg:p-10 border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="text" id="name" name="name"
                    value={formData.name} onChange={handleChange} required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-aurora-teal transition-colors peer placeholder-transparent cursor-none"
                    placeholder="Name"
                  />
                  <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-500 text-sm font-syne transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-aurora-teal peer-focus:text-sm">
                    Your Name
                  </label>
                </div>
                
                <div className="relative group">
                  <input
                    type="email" id="email" name="email"
                    value={formData.email} onChange={handleChange} required
                    className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-aurora-teal transition-colors peer placeholder-transparent cursor-none"
                    placeholder="Email"
                  />
                  <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-500 text-sm font-syne transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-aurora-teal peer-focus:text-sm">
                    Your Email
                  </label>
                </div>
              </div>

              <div className="relative group mt-10">
                <input
                  type="text" id="subject" name="subject"
                  value={formData.subject} onChange={handleChange} required
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-aurora-teal transition-colors peer placeholder-transparent cursor-none"
                  placeholder="Subject"
                />
                <label htmlFor="subject" className="absolute left-0 -top-3.5 text-gray-500 text-sm font-syne transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-aurora-teal peer-focus:text-sm">
                  Subject
                </label>
              </div>

              <div className="relative group mt-10">
                <textarea
                  id="message" name="message"
                  value={formData.message} onChange={handleChange} required rows="4"
                  className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-aurora-teal transition-colors peer placeholder-transparent resize-none cursor-none"
                  placeholder="Message"
                ></textarea>
                <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-500 text-sm font-syne transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-aurora-teal peer-focus:text-sm">
                  Your Message
                </label>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full py-4 mt-8 rounded-full text-obsidian font-syne font-bold text-lg transition-all duration-300 cursor-none relative overflow-hidden group ${
                  status === "sending" ? "bg-aurora-teal/50 cursor-not-allowed" : 
                  status === "success" ? "bg-green-400" : 
                  status === "error" ? "bg-red-400" : 
                  "bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:-translate-y-1"
                }`}
              >
                {status === "sending" ? "Sending..." : status === "success" ? "Message Sent!" : status === "error" ? "Failed to Send" : "Send Message"}
              </button>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
