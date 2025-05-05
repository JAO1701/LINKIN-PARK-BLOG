import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import SobreLaBanda from './components/SobreLaBanda';
import Noticias from './components/Noticias';
import GaleriaDeFotos from './components/GaleriaDeFotos';
import VideosDeCovers from './components/VideosDeCovers';
import ContactoYSuscripcion from './components/ContactoYSuscripcion';
import ChesterTribute from './components/ChesterTribute';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route path="/sobre-la-banda" element={<SobreLaBanda />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/galeria-de-fotos" element={<GaleriaDeFotos />} />
        <Route path="/videos-de-covers" element={<VideosDeCovers />} />
        <Route path="/contacto-y-suscripcion" element={<ContactoYSuscripcion />} />
        <Route path="/chester-tribute" element={<ChesterTribute />} />
      </Routes>
    </Router>
  );
}

export default App;
