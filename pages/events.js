// Import des modules nécessaires
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import EventDetail from '../components/EventDetail';

// Page Events
const EventsPage = () => {
  // Exemple de liste d'événements
  const eventsData = [
    {
      id: 1,
      name: 'Conférence sur la Technologie',
      date: '2024-02-10',
      time: '15:00',
      description: 'Une conférence passionnante sur les dernières avancées technologiques.',
      speakers: ['John Doe', 'Jane Smith'],
      location: 'Salle de conférence A',
    },
    {
      id: 2,
      name: 'Tournoi de Football Universitaire',
      date: '2024-02-15',
      time: '18:00',
      description: 'Un tournoi de football entre différentes universités.',
      speakers: ['Patrick Sébastien'],
      location: 'Stade Universitaire',
    },
    // Ajoute d'autres événements
  ];

  // État pour suivre l'événement sélectionné pour afficher les détails
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Gestionnaire de clic pour afficher les détails d'un événement
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div>
      <h1>Liste des Événements</h1>
      <div style={{ display: 'flex' }}>
        {/* Affichage de la liste d'événements */}
        <div style={{ marginRight: '20px' }}>
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => handleEventClick(event)} />
          ))}
        </div>
        {/* Affichage des détails de l'événement sélectionné */}
        <div>
          {selectedEvent && <EventDetail event={selectedEvent} />}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
