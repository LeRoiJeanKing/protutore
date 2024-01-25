// pages/events.js
import React, { useState } from 'react';
import EventCard from '../components/EventCard';
import EventDetail from '../components/EventDetail';
import Sidebar from '../components/Sidebar';

const EventsPage = () => {
  const [eventsData, setEventsData] = useState([
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
  ]);

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({
    id: null,
    name: '',
    date: '',
    time: '',
    description: '',
    location: '',
  });

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleNewEventChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = () => {
    if (newEvent.name && newEvent.date && newEvent.time && newEvent.description && newEvent.location) {
      setEventsData([...eventsData, { ...newEvent, id: eventsData.length + 1 }]);
      setNewEvent({
        id: null,
        name: '',
        date: '',
        time: '',
        description: '',
        location: '',
      });
    }
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
        <div style={{ marginTop: '20px' }}>
          <h2>Ajouter un nouvel événement</h2>
          <form>
            <label>
              Nom:
              <input type="text" name="name" value={newEvent.name} onChange={handleNewEventChange} />
            </label>
            <br />
            <label>
              Date:
              <input type="text" name="date" value={newEvent.date} onChange={handleNewEventChange} />
            </label>
            <br />
            <label>
              Heure:
              <input type="text" name="time" value={newEvent.time} onChange={handleNewEventChange} />
            </label>
            <br />
            <label>
              Description:
              <input type="text" name="description" value={newEvent.description} onChange={handleNewEventChange} />
            </label>
            <br />
            <label>
              Lieu:
              <input type="text" name="location" value={newEvent.location} onChange={handleNewEventChange} />
            </label>
            <br />
            <button type="button" onClick={handleAddEvent}>
              Ajouter
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
