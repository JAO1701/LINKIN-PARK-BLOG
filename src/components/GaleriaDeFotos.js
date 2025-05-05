import React from 'react';
import Header from './Header';
import '../App.css';

const GaleriaDeFotos = () => {
  const images = Array(27)
    .fill(0)
    .map((_, index) => require(`../assets/Imagenes/imagen-${index + 1}.jpg`));

  return (
    <section id="galeria-de-fotos">
      <Header />
      <div className="gallery-container">
        <h1 className='GaleriaDeFotos'>Galería de Imágenes</h1>
        <div className="gallery-grid">
          {images.map((image, index) => (
            <a key={index} href={image} target="_blank" rel="noopener noreferrer">
              <img
                className="gallery-item"
                src={image}
                alt={`Imagen ${index + 1}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GaleriaDeFotos;
