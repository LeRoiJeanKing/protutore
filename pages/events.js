// pages/events.js
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import EventDetail from '../components/EventDetail';
import Sidebar from '../components/Sidebar';
import Link from 'next/link'; // Import de Link

const EventsPage = () => {
  // ... (le reste du code reste inchangé)

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
      </div>
    </div>
  );
};

export default EventsPage;
