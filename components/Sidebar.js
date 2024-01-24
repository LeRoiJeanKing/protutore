
// components/Sidebar.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Modal from './Modal';

const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        width: '200px',
        backgroundColor: '#333',
        padding: '10px',
        height: '100vh',
        boxShadow: '2px 0 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ color: '#fff', marginBottom: '20px' }}>Menu</h2>
      <button
        style={{
          display: 'block',
          marginBottom: '10px',
          color: '#fff',
          backgroundColor: '#555',
          border: 'none',
          padding: '8px 16px',
          cursor: 'pointer',
          width: '100%',
        }}
        onClick={() => handleNavigation('/')}
      >
        Accueil
      </button>
      <button
        style={{
          display: 'block',
          marginBottom: '10px',
          color: '#fff',
          backgroundColor: '#555',
          border: 'none',
          padding: '8px 16px',
          cursor: 'pointer',
          width: '100%',
        }}
        onClick={() => handleNavigation('/events')}
      >
        Événements
      </button>

      {/* Bouton pour ouvrir la fenêtre modale de login */}
      <button
        style={{
          display: 'block',
          marginBottom: '10px',
          color: '#fff',
          backgroundColor: '#555',
          border: 'none',
          padding: '8px 16px',
          cursor: 'pointer',
          width: '100%',
        }}
        onClick={openModal}
      >
        Login
      </button>

      {/* Fenêtre modale pour le login */}
      {isModalOpen && (
        <Modal onClose={closeModal}>
          {/* Contenu de la fenêtre modale */}
          <h2>Login</h2>
          {/* Ajoute les champs pour le pseudo et le mot de passe ici */}
        </Modal>
      )}
    </div>
  );
};

export default Sidebar;
