const express = require('express');
const router = express.Router();

const Sport = require('../models/sport');

router.get('/', (req, res) => {
  res.send('Obteniendo el recurso de deportes!');
});

router.post('/', async (req, res, next) => {
  const sport = new Sport(req.body);
  try {
    const savedSport = await sport.save();
    res.status(201).json(savedSport);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

router.put('/', (req, res) => {
  res.send('Modificar un recurso de deportes.');
});

router.delete('/', (req, res) => {
  res.send('Eliminar un recurso de deportes.');
});

module.exports = router;