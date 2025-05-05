import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Iconos/Logo.png';
import '../App.css';

function Header() {
  return (
    <header>
      <nav>
        <div id='Menu'>
          <img src={logo} alt="Logo" className="logo" />
          <Link to="/" className="boton">Inicio</Link>
          <Link to="/sobre-la-banda" className="boton">Sobre la Banda</Link>
          <Link to="/videos-de-covers" className="boton">Videos de Covers</Link>
          <Link to="/noticias" className="boton">Noticias</Link>
          <Link to="/galeria-de-fotos" className="boton">Galería de Fotos</Link>
          <Link to="/chester-tribute" className="boton">Chester Tribute</Link>
          <Link to="/contacto-y-suscripcion" className="boton">Suscríbete</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
