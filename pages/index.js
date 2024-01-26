// pages/index.js
import React from 'react';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flexGrow: 1 }}>
        <h1 style={{ marginBottom: '20px' }}>Page d'Accueil</h1>
        <img src="https://www.efrei.fr/wp-content/uploads/2024/01/Capture-decran-2024-01-16-a-14.43.19.png" alt="Efrei en sah" />
        
      </div>
    </div>
  );
};

export default HomePage;
