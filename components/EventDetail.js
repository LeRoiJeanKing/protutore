// Import des modules nécessaires
import React from 'react';

// Composant de détails de l'événement réutilisable
const EventDetail = ({ event }) => {
  return (
    <div>
      <h1>Détails de l'événement</h1>
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Heure: {event.time}</p>
      <p>Description: {event.description}</p>
      <p>Intervenants: {event.speakers.join(', ')}</p>
      <p>Emplacement: {event.location}</p>
      {/* Afficher d'autres informations et médias associés */}
    </div>
  );
};

export default EventDetail;
