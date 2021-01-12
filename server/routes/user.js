/* eslint-disable arrow-body-style */
const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

// customer signs up
router.post('/signup', userController.createUser, (req, res) => {
  return res.status(200).json(res.locals.user);
});

router.put('/form', userController.userInfo, (req, res) => {
  return res.sendStatus(200);
});

module.exports = router;
