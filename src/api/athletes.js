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

router.put('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const modifiedAthlete = await Athlete.findByIdAndUpdate(id, req.body);
    res.status(200).json(modifiedAthlete);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedAthlete = await Athlete.findByIdAndDelete(id);
    res.status(200).json(deletedAthlete);
  } catch (error) {
    res.status(400);
    next(error);
  }
});

module.exports = router;