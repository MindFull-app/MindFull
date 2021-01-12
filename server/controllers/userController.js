const { User } = require('../models/UserModels');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const {
      first_name, last_name, email, password, patient, therapist,
    } = req.body;
    await User.create({
      first_name, last_name, email, password, patient, therapist,
    });
    return next();
  } catch (error) {
    return next({
      log: `userController.createUser: ERROR: ${error}`,
      message: 'Error creating new user',
    });
  }
};

module.exports = userController;
