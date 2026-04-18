import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#01030b] border-t border-white/10 py-8 px-6 lg:px-16 pointer-events-auto relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-gray-400 text-sm font-medium">
          &copy; {new Date().getFullYear()} <span className="text-blue-400">Aditya Shee</span>. All Rights Reserved.
        </div>
        
        <div className="flex items-center gap-2 text-sm text-gray-400">
          Built with <FaHeart className="text-blue-500 mx-1 animate-pulse" /> using React & Tailwind
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
            <FaTwitter size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
