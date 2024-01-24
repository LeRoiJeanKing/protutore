// Import des modules nécessaires
import React from 'react';
import Link from 'next/link';

// Composant de menu latéral
const Sidebar = () => {
  return (
    <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px', height: '100vh' }}>
      <h2>Menu</h2>
      {/* Boutons pour accéder aux différentes sections */}
      <Link href="/">
        <a style={{ display: 'block', marginBottom: '10px', color: '#333' }}>Accueil</a>
      </Link>
      <Link href="/events">
        <a style={{ display: 'block', marginBottom: '10px', color: '#333' }}>Événements</a>
      </Link>
      {/* Ajoute d'autres boutons pour les sections supplémentaires */}
    </div>
  );
};

export default Sidebar;
