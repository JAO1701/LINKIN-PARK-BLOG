const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para la página de inicio
app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend del sitio web de Linkin Park!');
});

// Conexión a la base de datos
mongoose.connect('mongodb://localhost:27017/linkin-park-blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('error', (err) => {
  console.error('Error de conexión:', err);
});

mongoose.connection.once('open', () => {
  console.log('Conexión establecida correctamente');
});

// Definición del esquema y modelo de Mongoose
const emailSchema = new mongoose.Schema({
  email: { type: String, required: true },
});

const Email = mongoose.model('CorreosElectrónicos', emailSchema);

// Ruta para suscribirse
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email es requerido' });
  }

  const existingEmail = await Email.findOne({ email });
  if (existingEmail) {
    return res.status(400).json({ message: 'El correo electrónico ya está suscrito' });
  }

  try {
    const newEmail = new Email({ email });
    await newEmail.save();
    res.status(200).json({ message: 'Suscripción exitosa' });
  } catch (error) {
    console.error('Error al guardar el correo electrónico:', error);
    res.status(500).json({ message: 'Error al suscribirse', error: error.message });
  }
});

// Ruta para desuscribirse
app.post('/api/unsubscribe', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email es requerido' });
  }

  try {
    await Email.deleteOne({ email });
    res.status(200).json({ message: 'Desuscripción exitosa' });
  } catch (error) {
    console.error('Error al desuscribirse:', error);
    res.status(500).json({ message: 'Error al desuscribirse', error: error.message });
  }
});

// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
