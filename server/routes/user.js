const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

// customer signs up
router.post('/signup', userController.createUser, (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
