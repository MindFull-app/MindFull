const {models} = require('../../db/db');

userController = {};

userController.createUser = async (req, res, next) => {
  try {
    let {first_name, last_name, email, address, zip} = req.body
    await models.User.create({
      first_name, last_name, email, address, zip
    })
    return next();
  } catch (error) {
    return next({
      log: `userController.createUser: ERROR: ${error}`,
      message: 'Error creating new user'
    })
  }
}

module.exports = userController;