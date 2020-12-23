const express = require('express');
const router = express.Router();

const sportsRouter = require('./sports');
const athletesRouter = require('./athletes');

router.use('/athletes', athletesRouter);
router.use('/sports', sportsRouter);

module.exports = router;