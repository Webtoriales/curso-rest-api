const express = require('express');
const router = express.Router();

const Athlete = require('../models/athlete');

router.get('/', (req, res) => {
  res.send('Obteniendo el recurso de atletas desde un router!');
});

router.post('/', async (req, res) => {
  const athlete = new Athlete(req.body);
  try {
    const savedAthlete = await athlete.save();
    res.status(201).json(savedAthlete);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

router.put('/', (req, res) => {
  res.send('Modificar un recurso de atletas.');
});

router.delete('/', (req, res) => {
  res.send('Eliminar un recurso de atletas.');
});

module.exports = router;