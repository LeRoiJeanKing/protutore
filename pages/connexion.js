// pages/connexion.js
import React, { useState } from 'react';
import LoginModal from '../components/LoginModal';
import Sidebar from '../components/Sidebar';

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
      <LoginModal isOpen={isRegistrationModalOpen} onClose={closeRegistrationModal}>
        {/* Contenu de la fenêtre modale d'inscription */}
        <h2>Inscription</h2>
        {/* Ajoute les champs pour le pseudo, le mot de passe, etc. ici */}
        <button onClick={closeRegistrationModal}>Fermer</button>
      </LoginModal>
    </div>
  );
};

export default ConnexionPage;
