const express = require('express');
var router = express.Router();
const Alumnos = require('../models/alumnos');
const bcript = require('bcryptjs');
var users;

router.get('/home', async (req, res) => {
  const listaRegistro = await Alumnos.find({});
  console.log(`los registros son ${listaRegistro}`);
  res.render('index', {
    listaRegistro
  });
});

router.get('/formulario', async (req, res) => {
  res.render('formulario', { mensaje: '' });
});


router.get('/', async (req, res) => {
  res.render('login', {
    mensaje: ''
  });
});


router.post('/add', async (req, res) => {
  const listaRegistro = await Alumnos.findOne({ user: req.body.user });
  console.log(listaRegistro);
  if (listaRegistro) {
    res.render('formulario', { mensaje: 'Este usuario ya existe' });
  }
  else {
    console.log(new Alumnos(req.body));
    const objAlumnos = new Alumnos(req.body);
    await objAlumnos.save();
    res.render('formulario', { mensaje: 'datos guardados correctamente' });
  }

});


router.get('/edit', async (req, res) => {
  const listaRegistro = await Alumnos.find();
  res.render('edit', {
    listaRegistro
  });
});

router.get('/edit/:id', async (req, res) => {
  const { id } = req.params;
  const listaRegistro = await Alumnos.find();
  const Alumno = await Alumnos.findById({ _id: id });
  res.render('updateForm', {
    Alumno
  });
});


router.post('/edit/:id', async (req, res) => {
  const { id } = req.params;
  await Alumnos.updateOne({ _id: id }, req.body);
  res.redirect('/edit');
});

//callback para eliminar (1)
router.get('/delete', async (req, res) => {
  const listaRegistro = await Alumnos.find();
  res.render('delete', {
    listaRegistro
  });
});

//callback para eliminar (2)
router.get('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Alumnos.remove({ _id: id });
  res.redirect('/delete');
});


router.post('/user', async (req, res) => {
  users = await Alumnos.findOne({ user: req.body.user });
  if (users) {


  }
  else {
    res.render('login', { mensaje: 'usuario invalido' });
  }

});


router.post('/password', async (req, res) => {

  if (users.password !== req.body.password[0]) {
    res.render('login', { mensaje: 'contraseña invalida' });
  }
  else {
    res.redirect('/home');
  }

});

module.exports = router;
