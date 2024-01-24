// Import des modules nécessaires
import React from 'react';
import { eventsData } from '../data';

// Page d'accueil
const HomePage = () => {
  // Utilisation des données simulées
  const upcomingEvents = eventsData;

  return (
    <div>
      <h1>Événements à venir</h1>
      {upcomingEvents.map((event) => (
        // Afficher les informations clés de chaque événement
        <div key={event.id}>
          <h2>{event.name}</h2>
          <p>Date: {event.date}</p>
          <p>Heure: {event.time}</p>
          <p>{event.description}</p>
          {/* Lien vers la page de détails de l'événement */}
          <a href={`/event/${event.id}`}>Détails</a>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
