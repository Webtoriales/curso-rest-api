const express = require('express');
const router = express.Router();

const Sport = require('../models/sport');

router.get('/', async (req, res, next) => {
  try {
    const sports = await Sport.find();
    res.status(200).json(sports);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;

  try {
    const sport = await Sport.findById(id);
    res.status(200).json(sport);
  } catch (error) {
    res.status(400);
    next(error);
  }
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

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const modifiedSport = await Sport.findByIdAndUpdate(id, req.body);
    res.status(200).json(modifiedSport);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

router.delete('/', (req, res) => {
  res.send('Eliminar un recurso de deportes.');
});

module.exports = router;