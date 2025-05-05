const mongoose = require('mongoose');

const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

const CorreoElectronico = mongoose.model('CorreosElectrónicos', emailSchema);

module.exports = CorreoElectronico;
