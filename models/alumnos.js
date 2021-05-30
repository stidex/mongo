const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//esquemas
const alumnos = new Schema({
  user: String,
  password: String,
  nombre: String,
  apellido: String,
  telefono: String,
  ciudad: String,
  pais: String
});

module.exports = mongoose.model('alumnos', alumnos);