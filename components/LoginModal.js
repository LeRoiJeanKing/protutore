// components/LoginModal.js
import React, { useState } from 'react';
import Modal from './Modal';

const LoginModal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState(''); // State pour le pseudo
  const [password, setPassword] = useState(''); // State pour le mot de passe

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Logique de traitement du login (à compléter selon les besoins)
    console.log('Login avec pseudo:', username, 'et mot de passe:', password);

    // Fermer la fenêtre modale après le login
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Contenu de la fenêtre modale de login */}
      <h2>Login</h2>
      <label>
        Pseudo:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Mot de passe:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button onClick={handleLogin}>Se connecter</button>
    </Modal>
  );
};

export default LoginModal;
