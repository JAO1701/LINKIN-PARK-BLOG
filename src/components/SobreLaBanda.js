import React from 'react';
import Header from './Header'; 
import '../App.css'
import Banda1 from '../assets/Imagenes/imagen-1.jpg';
import Banda2 from '../assets/Imagenes/imagen-2.jpg';
import Banda3 from '../assets/Imagenes/imagen-3.jpg';


const SobreLaBanda = () => {
  return (
    <section id="sobre-la-banda">
      <Header />
      
      <div className='la-banda-container'>
        <h1 className='LaBandaTitulo'>La Banda</h1>  
        <h2 id='LaBanda1'>Los inicios</h2>
        <div id='LaBandaFila1'>
          
          <img src={Banda1} alt="Linkin Park - Banda1" id="imagen-banda1" />

          <p id='laBanda-parrafo1'>La historia de Linkin Park comenzó en 1996 en los pasillos de la escuela secundaria de Agoura Hills, California. Mike Shinoda, Brad Delson y Rob Bourdon, tres amigos con una pasión compartida por la música, decidieron unir fuerzas y formar una banda. Pronto se les unieron Joe Hahn, un DJ y amigo de Shinoda, y Dave "Phoenix" Farrell, quien completó la alineación inicial. Originalmente conocidos como "Xero", la banda luchó por encontrar su sonido distintivo mientras navegaban por la escena musical local. Fue entonces cuando Chester Bennington, un vocalista con una voz poderosa y emotiva, se unió al grupo, cambiando su nombre a "Hybrid Theory". <br/><br/>

          Tras años de arduo trabajo en clubes locales y refinando su sonido, Linkin Park lanzó su EP debut en 1999, titulado "Hybrid Theory". A pesar de las dificultades iniciales para conseguir un contrato discográfico, la banda finalmente firmó con Warner Bros. Records y lanzó su álbum debut homónimo, "Hybrid Theory", en 2000. Este álbum marcó el comienzo de una nueva era en la música, fusionando el rap y el metal de una manera fresca y emocionante. Con éxitos como "One Step Closer" y "Crawling", Linkin Park capturó la atención del mundo y sentó las bases para su ascenso meteórico a la fama.</p>
        </div>
        
        <div id='LaBandaFila2'>
          <h2 id='LaBanda2'>El salto al estrellato</h2>
          <img src={Banda2} alt="Linkin Park - Banda2" id="imagen-banda2" />

          <p id='laBanda-parrafo2'>Después del éxito arrollador de "Hybrid Theory", Linkin Park se encontró en la cima del mundo musical. El álbum vendió millones de copias en todo el mundo, alcanzando el estatus de disco de diamante en los Estados Unidos, y generando una serie de sencillos que dominaron las listas de éxitos. La mezcla única de rap, rock y electrónica de la banda resonó con una amplia audiencia, desde adolescentes hasta adultos, estableciendo a Linkin Park como una de las bandas más influyentes de la década.<br/><br/>

          En 2003, Linkin Park lanzó su segundo álbum de estudio, "Meteora", que debutó en el número uno en las listas de álbumes de varios países y solidificó aún más su estatus como superestrellas de la música. Canciones como "Numb" y "Faint" se convirtieron en himnos generacionales y ampliaron el alcance de la banda a nivel mundial. Linkin Park se embarcó en giras internacionales agotadoras, llenando estadios y dejando una impresión indeleble en cada ciudad que visitaban. A lo largo de los años, la banda continuó innovando y experimentando con su sonido, manteniendo a los fanáticos cautivados y acumulando una base de seguidores leales en todo el mundo.</p>
          </div>

          <div id='LaBandaFila3'>
          <h2 id='LaBanda3'>En la actualidad</h2>
          <img src={Banda3} alt="Linkin Park - Banda3" id="imagen-banda3" />
          
          <p id='laBanda-parrafo3'>En julio de 2017, el mundo recibió una noticia devastadora: Chester Bennington, el carismático y talentoso vocalista de Linkin Park, había fallecido trágicamente. La noticia sacudió a la comunidad musical y dejó a los fanáticos de la banda en estado de shock y con el corazón roto. La muerte de Bennington dejó un vacío imposible de llenar, y la banda y sus seguidores se encontraron en medio de una profunda tristeza y dolor.<br/><br/>

          A pesar de la pérdida abrumadora, los miembros restantes de Linkin Park han encontrado formas de honrar el legado de Bennington y seguir adelante con su música. Mike Shinoda ha lanzado música en solitario, explorando nuevos territorios creativos y compartiendo su proceso de duelo a través de sus letras. Los otros miembros de la banda también han estado involucrados en proyectos paralelos, colaborando con otros artistas y explorando diferentes géneros musicales.

          Aunque el futuro de Linkin Park como banda completa sigue siendo incierto, su impacto perdura y su música sigue siendo una fuente de inspiración y consuelo para millones de fanáticos en todo el mundo. A través de su música, su mensaje de esperanza y perseverancia continúa resonando, recordándonos que, aunque las personas y las circunstancias cambien, el poder de la música para sanar y conectar nunca desaparecerá.</p>
          </div>

        </div>

        
        
      
    </section>
  );
};

export default SobreLaBanda;
