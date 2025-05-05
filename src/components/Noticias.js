
import React from 'react';
import Header from './Header'; 
import '../App.css';


const noticiasData = [
  {
    id: 1,
    title: 'Filtran pistas sobre un posible regreso de Linkin Park',
    summary: 'Rumores indican que Linkin Park podría estar trabajando en un regreso, aunque no hay confirmación oficial.',
    image: 'https://fmrockandpop.com/media/k2/items/cache/8f125d468c0984de617aeab4d9f403fa_L.webp?t=20240403_141206',
    link: 'https://fmrockandpop.com/noticias/actualidad/filtran-pistas-sobre-un-posible-regreso-de-linkin-park',
  },
  {
    id: 2,
    title: 'Linkin Park vuelve con una cantante femenina',
    summary: 'Se especula que Linkin Park podría regresar con una nueva vocalista femenina, cambiando así la dinámica de la banda.',
    image: 'https://estacionk2.com/wp-content/uploads/2024/04/Linkin-Park.jpg',
    link: 'https://estacionk2.com/linkin-park-vuelve-con-una-cantante-femenina/',
  },
  {
    id: 3,
    title: '¿Está Linkin Park buscando fichar a un nuevo cantante? Los rumores apuntan a una elección sorprendente',
    summary: 'Nuevas fuentes sugieren que Linkin Park podría estar en búsqueda de un nuevo cantante, con una opción inesperada en mente.',
    image: 'https://rockfm-cdnmed.rockfm.fm/resources/jpg/6/7/1712220539476.jpg',
    link: 'https://www.rockfm.fm/al-dia/noticias/esta-linkin-park-buscando-fichar-nuevo-cantante-los-rumores-apuntan-una-eleccion-sorprendente-20240404_3228907',
  },
  {
    id: 4,
    title: 'Linkin Park podría hacer una gira de reunión en 2025 con un nuevo vocalista',
    summary: 'Se rumorea que Linkin Park podría planear una gira de reunión para 2025, presentando a un nuevo vocalista.',
    image: 'https://cdn-ijfed.nitrocdn.com/DtYdoFkTGLHFYfuSCOprrunYCajuUVPb/assets/images/optimized/rev-eec3d62/mariskalrock.com/wp-content/uploads/2017/07/Chester-Bennington-Linkin-Park-Download-2017-Alfonso-D%C3%A1vila.jpg',
    link: 'https://mariskalrock.com/general/linkin-park-podria-hacer-una-gira-de-reunion-en-2025-con-un-nuevo-vocalista/',
  },
  {
    id: 5,
    title: '¿Habrá reunión de Linkin Park con una nueva vocalista?',
    summary: 'Se está discutiendo la posibilidad de una reunión de Linkin Park con una nueva vocalista, lo que podría cambiar el rumbo de la banda.',
    image: 'https://es.rollingstone.com/wp-content/uploads/2024/05/Habra-reunion-de-Linkin-Park-con-una-nueva-vocalista.jpg',
    link: 'https://es.rollingstone.com/habra-reunion-de-linkin-park-con-una-nueva-vocalista/',
  },
];

const Noticias = () => {
  return (
    <section id="noticias">
      <Header />
      <div className='Noticias-Container'>
        <h1 className='Noticias-título'>Noticias</h1>
        {noticiasData.map((noticia) => (
          <div key={noticia.id} className="noticia">
            <img src={noticia.image} alt={noticia.title} className="noticia-image" />
            <div className="noticia-content">
              <h3>{noticia.title}</h3>
              <p>{noticia.summary}</p>
              <a href={noticia.link} target="_blank" rel="noopener noreferrer">Leer más</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Noticias;
