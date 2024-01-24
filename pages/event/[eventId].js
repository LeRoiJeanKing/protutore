// Import des modules nécessaires
import React from 'react';
import { useRouter } from 'next/router';
import { eventsData } from '../../data';

// Page de détails de l'événement
const EventDetailPage = () => {
  // Récupérer l'ID de l'événement à partir de l'URL
  const router = useRouter();
  const { eventId } = router.query;

  // Utilisation des données simulées
  const eventDetails = eventsData.find((event) => event.id === eventId);

  return (
    <div>
      <h1>Détails de l'événement</h1>
      <h2>{eventDetails.name}</h2>
      <p>Date: {eventDetails.date}</p>
      <p>Heure: {eventDetails.time}</p>
      <p>Description: {eventDetails.description}</p>
      <p>Intervenants: {eventDetails.speakers}</p>
      <p>Emplacement: {eventDetails.location}</p>
      {/* Afficher d'autres informations et médias associés */}
    </div>
  );
};

export default EventDetailPage;
