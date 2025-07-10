import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-500 h-12 p-2">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-bold"></div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link to="/projects" className="text-gray-300 hover:text-white">Projects</Link>
          <Link to="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;