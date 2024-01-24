// pages/_app.js
import React from 'react';
import App from 'next/app';
import Sidebar from '../components/Sidebar';

// Importe le fichier de styles spécifiques à la page events
import '../pages/events/styles.module.css';

// Surcharge du composant App de Next.js
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div style={{ display: 'flex' }}>
        {/* Affichage du menu latéral sur toutes les pages */}
        <Sidebar />

        {/* Affichage du composant de la page actuelle */}
        <Component {...pageProps} />
      </div>
    );
  }
}

export default MyApp;
