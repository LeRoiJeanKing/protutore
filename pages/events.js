// pages/events.js
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import EventDetail from '../components/EventDetail';
import Sidebar from '../components/Sidebar';
import Link from 'next/link'; // Import de Link

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Nouveau state pour la fenêtre modale

  // Déclaration de eventsData ici
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
      speakers: ['Équipe de Football'],
      location: 'Stade Universitaire',
    },
    // Ajoute d'autres événements
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flexGrow: 1 }}>
        <h1 style={{ marginBottom: '20px' }}>Liste des Événements</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '20px', flexBasis: '300px' }}>
            {eventsData.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => handleEventClick(event)}
              />
            ))}
          </div>
          <div style={{ flexGrow: 1 }}>
            {selectedEvent && <EventDetail event={selectedEvent} />}
          </div>
        </div>

        {/* Bouton pour ouvrir la fenêtre modale de login */}
        <Link href="/connexion">
          <a
            style={{
              marginTop: '20px',
              padding: '8px 16px',
              cursor: 'pointer',
              textDecoration: 'none', // Ajoute le style pour enlever le soulignement du lien
            }}
          >
            Login
          </a>
        </Link>

        {/* Fenêtre modale de login */}
        <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
      </div>
    </div>
  );
};

export default EventsPage;
