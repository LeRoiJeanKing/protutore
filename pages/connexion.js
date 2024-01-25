// pages/connexion.js
import React, { useState } from 'react';
import LoginModal from '../components/LoginModal';
import Sidebar from '../components/Sidebar';

const ConnexionPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div>
      <h1>Page de Connexion</h1>

      {/* Bouton pour ouvrir la fenêtre modale de login */}
      <button
        style={{
          marginTop: '20px',
          padding: '8px 16px',
          cursor: 'pointer',
        }}
        onClick={openLoginModal}
      >
        Login
      </button>

      {/* Fenêtre modale de login */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    </div>
  );
};

export default ConnexionPage;
