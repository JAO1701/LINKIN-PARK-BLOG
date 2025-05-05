import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import '../App.css';

const ContactoYSuscripcion = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault();
    console.log('Enviando solicitud de suscripción con email:', email); // Registro del email capturado
    try {
      const response = await axios.post('http://localhost:5000/api/subscribe', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error al enviar correo electrónico:', error);
      setMessage('Error al suscribirse. Inténtalo de nuevo.');
      
    }
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    console.log('Enviando solicitud de desuscripción con email:', email);
    try {
      const response = await axios.post('http://localhost:5000/api/unsubscribe', { email });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error al desuscribirse:', error);
      setMessage('Error al desuscribirse. Inténtalo de nuevo.');
    }
  };

  return (
    <section id="Suscripción">
      <Header />
      <div id="Suscripción-container">
        <h3 id="Suscripción-subtítulo">¿Quieres que te mantengamos al tanto de las últimas novedades del Blog y de la Banda?</h3>
        <h1 id="Suscripción-Título">Suscríbete  <br/>👇 <br/></h1>
        <div className="subscription-form">
          <form>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="button-group">
              <button type="submit" onClick={handleSubscribe}>Suscribirse</button>
              <button type="button" onClick={handleUnsubscribe}>Desuscribirse</button>
            </div>
          </form>
          {message && <p>{message}</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactoYSuscripcion;
