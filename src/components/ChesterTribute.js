import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import '../App.css';
import soundFile from '../assets/Chester-Tribute/In The End - Linkin Park.mp3'; // Ruta al archivo de audio MP3

// Función para cargar todas las imágenes JPG desde una carpeta
const importAll = (r) => {
  return r.keys().map(r);
}

const images = importAll(require.context('../assets/Chester-Tribute', false, /\.jpg$/));

const ChesterTribute = () => {
  const location = useLocation();
  const [isSoundPlaying, setIsSoundPlaying] = useState(false); // Estado para controlar si el sonido está reproduciéndose o no

  // Función para alternar la reproducción del sonido
  const toggleSound = () => {
    setIsSoundPlaying(prevState => !prevState);
  };

  // Efecto para reproducir o detener el audio según el estado de isSoundPlaying
  useEffect(() => {
    const audioRef = document.getElementById("audio"); // Obtener la referencia al elemento de audio
    if (isSoundPlaying) {
      audioRef.play();
    } else {
      audioRef.pause();
    }
  }, [isSoundPlaying]); // Dependencia de isSoundPlaying

  // Efecto para iniciar la reproducción del audio cuando el componente se monta
  useEffect(() => {
    // Iniciar la reproducción del audio solo si la ubicación actual es "/chester-tribute"
    if (location.pathname === "/chester-tribute") {
      setIsSoundPlaying(true);
    }
  }, [location.pathname]);

  // Slider
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="chester-tribute">
      <Header />
      <h1 id='ChesterTribute'>Chester Charles Bennington - "The Legend"</h1>
      <h2 id='ChesterTributeSubt'>20/03/1976 - Forever</h2>
      
      {/* Slider */}
      <div className='Slider-container'>
        <div className="carousel">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === activeIndex ? 'active' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
      </div>

        {/* Icono de audio */}
        <button onClick={toggleSound} className="sound-icon" style={{ position: 'absolute', top: '110px', right: '10px', fontSize: '1.5rem' }}>
        {isSoundPlaying ? '🔊' : '🔇'}
      </button>

      {/* Audio */}
      <audio id="audio" loop={true} style={{ display: 'none' }}>
        <source src={soundFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default ChesterTribute;
