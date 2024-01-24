// Import des modules nécessaires
import React from 'react';
import { useRouter } from 'next/router';

// Composant de menu latéral
const Sidebar = () => {
  const router = useRouter();

  const handleNavigation = (path) => {
    // Utilisation du router pour naviguer vers le chemin spécifié
    router.push(path);
  };

  return (
    <div style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '10px', height: '100vh' }}>
      <h2>Menu</h2>
      {/* Boutons pour accéder aux différentes sections */}
      <button onClick={() => handleNavigation('/')}>Accueil</button>
      <button onClick={() => handleNavigation('/events')}>Événements</button>
      {/* Ajoute d'autres boutons pour les sections supplémentaires */}
    </div>
  );
};

export default Sidebar;
