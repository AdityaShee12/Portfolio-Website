// src/components/ProjectCard.js
import React, { useState } from 'react';
import Modal from './Modal';

const ProjectCard = ({ title, description, techStack, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={openModal}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        <p className="text-sm text-gray-500 mt-4">{techStack}</p>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={image}
        imageAlt={title}
      />
    </div>
  );
};

export default ProjectCard;