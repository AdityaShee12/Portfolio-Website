import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (EmailJS, backend API, etc.)
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Contact Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Get in Touch
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Have a project in mind or just want to say hello? Feel free to drop
            a message.
          </p>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <strong>Email:</strong>
              <p>sheeaditya12@gmail.com</p>
            </div>
            <div>
              <strong>Phone:</strong>
              <p>+91 89103 84698</p>
            </div>
            <div>
              <strong>Location:</strong>
              <p>South 24 Parganas, West Bengal, India</p>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2 text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-colors duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
