import React from 'react';

const Modal = ({ isOpen, onClose, imageSrc, imageAlt, projectLink }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg max-w-screen-md mx-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imageSrc} alt={imageAlt} className="w-full h-auto" />
        <button
          className="absolute top-2 right-2 text-white text-xl font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <a href={projectLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition">
          View Project
        </a>
      </div>
    </div>
  );
};

export default Modal;