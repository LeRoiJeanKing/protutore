// pages/connexion.js
import React, { useState } from 'react';
import LoginModal from '../components/LoginModal';
import RegistrationModal from '../components/RegistrationModal'; // Ajout de l'import

const ConnexionPage = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const closeRegistrationModal = () => {
    setIsRegistrationModalOpen(false);
  };

  return (
    <div>
      <h1>Page de Connexion</h1>

      {/* Bouton pour ouvrir la fenêtre modale de login */}
      <button
        style={{
          marginTop: '20px',
          marginRight: '10px',
          padding: '8px 16px',
          cursor: 'pointer',
        }}
        onClick={openLoginModal}
      >
        Login
      </button>

      {/* Bouton pour ouvrir la fenêtre modale d'inscription */}
      <button
        style={{
          marginTop: '20px',
          padding: '8px 16px',
          cursor: 'pointer',
        }}
        onClick={openRegistrationModal}
      >
        Inscription
      </button>

      {/* Fenêtre modale de login */}
      <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />

      {/* Fenêtre modale d'inscription */}
      <RegistrationModal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal} />
    </div>
  );
};

export default ConnexionPage;
