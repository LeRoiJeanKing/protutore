// Import des modules nécessaires
import React from 'react';
import Link from 'next/link';

// Composant de carte d'événement réutilisable
const EventCard = ({ event }) => {
  return (
    <div>
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Heure: {event.time}</p>
      <p>{event.description}</p>
      {/* Lien vers la page de détails de l'événement */}
      <Link href={`/event/${event.id}`}>
        <a>Détails</a>
      </Link>
    </div>
  );
};

export default EventCard;

