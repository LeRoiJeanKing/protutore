// Import des modules nécessaires
import React from 'react';
import { useRouter } from 'next/router';

// Composant de carte d'événement réutilisable
const EventCard = ({ event }) => {
  const router = useRouter();

  const handleDetailsClick = () => {
    // Utilisation du router pour naviguer vers la page de détails de l'événement
    router.push(`/event/${event.id}`);
  };

  return (
    <div>
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Heure: {event.time}</p>
      <p>{event.description}</p>
      {/* Gestion du clic pour naviguer vers la page de détails de l'événement */}
      <a onClick={handleDetailsClick}>Détails</a>
    </div>
  );
};

export default EventCard;
