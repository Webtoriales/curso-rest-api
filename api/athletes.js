const express = require('express');
const router = express.Router();

const Athlete = require('../models/athlete');

router.get('/', async (req, res, next) => {
  try {
    const athletes = await Athlete.find().populate('sports');
    res.status(200).json(athletes);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const athlete = await Athlete.findById(id).populate('sports');
    res.status(200).json(athlete);
  } catch (error) {
    res.status(400);
    next(error);
  }
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