// Import des modules nécessaires
import React from 'react';
import { eventsData } from '../data';
import EventCard from '../components/EventCard';

// Page d'accueil
const HomePage = () => {
  // Utilisation des données simulées
  const upcomingEvents = eventsData;

  return (
    <div>
      <h1>Événements à venir</h1>
      {upcomingEvents.map((event) => (
        // Utiliser le composant EventCard pour chaque événement
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default HomePage;

