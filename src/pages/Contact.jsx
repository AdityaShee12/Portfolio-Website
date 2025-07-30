import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/send", formData);
      alert("Message sent successfully!");
    } catch (err) {
      alert("Failed to send message.");
    }
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white flex flex-row"
      style={{ backgroundImage: "url('/Bg-image.jpeg')" }}>
      <div className="text-white pt-[5rem] pl-[5.2rem] md:w-1/2">
        <div className="text-2xl font-bold">Get in Touch</div>
        <div className="pt-[2rem]">
          <div className="flex gap-5 text-xl pb-[0.5rem]">
            <strong>Email:</strong>
            <p className="flex gap-3">
              <a href="mailto:sheeaditya12@gmail.com">
                <FaEnvelope />
              </a>
              sheeaditya12@gmail.com
            </p>
          </div>
          <div className="flex gap-5 text-xl pb-[0.5rem]">
            <strong>Phone:</strong>
            <p className="flex gap-3">
              <a href="tel:+918910384698">
                <FaPhone />
              </a>
              +91 89103 84698
            </p>
          </div>
          <div className="flex gap-5 text-xl pb-[0.5rem]">
            <strong>Location:</strong>
            <p className="flex gap-3">
              <FaMapMarkerAlt />
              South 24 Parganas, WB
            </p>
          </div>
        </div>
        <div className="flex gap-[0.2rem]">
          <img
            src="/Github.png"
            className=" w-[2rem] h-[1.5rem] mt-[0.2rem] cursor-pointer"
            alt=""
          />
          <img
            src="/LinkedIn.png"
            className=" w-[2rem] h-[2rem] cursor-pointer"
            alt=""
          />
        </div>
      </div>

      {/* <div className="min-h-screen flex items-center justify-center px-4 md:w-1/2">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Contact Me
          </h2>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg resize-none"
            rows="5"></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded-lg transition">
            Send Message
          </button>
        </form>
      </div> */}
    </section>
  );
};

export default Contact;
