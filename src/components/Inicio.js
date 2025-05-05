import React from 'react';
import Header from './Header'; 
import '../App.css';

const Inicio = () => {
  return (
    <section id="inicio">
      <Header />
      <h1 className='Bienvenida'>¡Bienvenidos al Blog de Covers de Linkin Park!
</h1>
      <p>Si eres un verdadero fan de Linkin Park, este es el espacio que estabas buscando. Nuestro blog es un tributo a todo lo que representa esta legendaria banda. Aquí encontrarás los mejores cover’s de fans, que con su talento y pasión, nos recuerdan por qué amamos cada nota de sus canciones.<br/><br/>
      Pero eso no es todo. Mantente al tanto de las últimas noticias y actualizaciones sobre Linkin Park, desde lanzamientos inéditos hasta emocionantes eventos. Este es más que un blog; es una comunidad de seguidores unidos por la admiración y el respeto hacia una de las bandas más influyentes de los últimos tiempos.<br/><br/>
      Únete a nosotros, suscríbete y sé parte de esta experiencia única. Comparte, comenta y celebra junto a otros fans como tú. <br/><br/>
      ¡Hagamos que el eco del legado de Linkin Park siga resonando en cada rincón del mundo!
      <br/><br/>
      ¡Suscríbete ahora y forma parte de la leyenda!
</p>
    </section>
  );
};

export default Inicio;

