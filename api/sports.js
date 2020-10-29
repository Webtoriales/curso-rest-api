const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Obteniendo el recurso de deportes!');
});

router.post('/', (req, res) => {
  res.send('Creando un nuevo recurso de deportes.');
});

router.put('/', (req, res) => {
  res.send('Modificar un recurso de deportes.');
});

router.delete('/', (req, res) => {
  res.send('Eliminar un recurso de deportes.');
});

module.exports = router;