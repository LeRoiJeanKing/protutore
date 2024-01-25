// components/RegistrationModal.js
import React from 'react';
import Modal from './Modal';

const RegistrationModal = ({ isOpen, onClose }) => {
  // Ajoute la logique d'inscription ici

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Vérifie si la fenêtre modale d'inscription est ouverte avant de rendre le contenu */}
      {isOpen && (
        <>
          <h2>Inscription</h2>
          {/* Ajoute les champs pour l'inscription ici */}
          <button onClick={onClose}>Fermer</button>
        </>
      )}
    </Modal>
  );
};

export default RegistrationModal;
