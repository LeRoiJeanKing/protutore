// pages/connexion.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const ConnexionPage = () => {
  const eventsData = [
    {
      id: 1,
      name: 'Connexion',
      date: '2024-02-10',
      time: '15:00',
      description: 'Formulaire de connexion',
    },
    {
      id: 2,
      name: 'Inscription',
      date: '2024-02-15',
      time: '18:00',
      description: 'Formulaire d\'inscription',
    },
    // Ajoute d'autres événements
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flexGrow: 1 }}>
        <h1 style={{ marginBottom: '20px' }}>Liste des Événements</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '20px', flexBasis: '300px' }}>
            {eventsData.map((event) => (
              <div
                key={event.id}
                style={{
                  marginBottom: '10px',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  border: '1px solid #ccc',
                  borderRadius: '5px',
                }}
                onClick={() => handleEventClick(event)}
              >
                {event.name}
              </div>
            ))}
          </div>
          <div style={{ flexGrow: 1 }}>
            {selectedEvent && (
              <div>
                <h2>{selectedEvent.name}</h2>
                <p>Date: {selectedEvent.date}</p>
                <p>Heure: {selectedEvent.time}</p>
                <p>Description: {selectedEvent.description}</p>
                {/* Ajoute le formulaire de connexion ou d'inscription ici en fonction de l'événement sélectionné */}
                {selectedEvent.name === 'Connexion' && (
                  <form>
                    {/* Formulaire de connexion */}
                    {/* ... */}
                  </form>
                )}
                {selectedEvent.name === 'Inscription' && (
                  <form>
                    {/* Formulaire d'inscription */}
                    {/* ... */}
                  </form>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnexionPage;
