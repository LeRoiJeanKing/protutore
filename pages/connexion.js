// pages/connexion.js
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

const ConnexionPage = () => {
  const eventsData = [
    {
      id: 1,
      name: 'Connexion',

    },
    {
    id: 2,
      name: 'Inscription',
   
    },
    // Ajoute d'autres événements
  ];

  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registrationData, setRegistrationData] = useState({ username: '', password: '' });

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegistrationChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Ajoute la logique de connexion ici
    console.log('Login Data:', loginData);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    // Ajoute la logique d'inscription ici
    console.log('Registration Data:', registrationData);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flexGrow: 1 }}>
        <h1 style={{ marginBottom: '20px' }}>Connexion / Inscription</h1>
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
                <h3>{selectedEvent.name}</h3>
      
                {selectedEvent.name === 'Connexion' && (
                  <form onSubmit={handleLoginSubmit}>
                    <label>
                      Nom d'utilisateur:
                      <input type="text" name="username" value={loginData.username} onChange={handleLoginChange} />
                    </label>
                    <br />
                    <label>
                      Mot de passe:
                      <input type="password" name="password" value={loginData.password} onChange={handleLoginChange} />
                    </label>
                    <br />
                    <button type="submit">Se connecter</button>
                  </form>
                )}
                {selectedEvent.name === 'Inscription' && (
                  <form onSubmit={handleRegistrationSubmit}>
                    <label>
                      Nom d'utilisateur:
                      <input type="text" name="username" value={registrationData.username} onChange={handleRegistrationChange} />
                    </label>
                    <br />
                    <label>
                      Mot de passe:
                      <input type="password" name="password" value={registrationData.password} onChange={handleRegistrationChange} />
                    </label>
                    <br />
                    <button type="submit">S'inscrire</button>
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
