/* eslint-disable camelcase */
const { User } = require('../models/UserModels');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const {
      first_name, last_name, email, password, patient, therapist,
    } = req.body;
    const user = await User.create({
      first_name, last_name, email, password, patient, therapist,
    });
    res.locals.user = user;
    return next();
  } catch (error) {
    return next({
      log: `userController.createUser: ERROR: ${error}`,
      message: 'Error creating new user',
    });
  }
};

userController.userInfo = async (req, res, next) => {
  console.log(req.body);
  try {
    const {
      _id,
      age,
      orientation,
      relationship_status,
      years_experience,
      gender,
      pronouns,
      therapy_before,
      gender_preference,
      imposter_syndrome,
      lgbtqia_issues,
      marriage_counseling,
      childhood_trauma,
      substance_abuse,
      mental_health,
    } = req.body;
    const updateUser = await User.findOneAndUpdate({
      _id,
    },
    {
      $set: {
        age,
        orientation,
        relationship_status,
        years_experience,
        gender,
        pronouns,
        therapy_before,
        gender_preference,
        imposter_syndrome,
        lgbtqia_issues,
        marriage_counseling,
        childhood_trauma,
        substance_abuse,
        mental_health,
      },
    },
    { upsert: true });
    console.log(updateUser);
    return next();
  } catch (error) {
    return next({
      log: `userController.userInfo: ERROR: ${error}`,
      message: 'Error inserting user info',
    });
  }
};

module.exports = userController;

// User.aggregate([
//   {
//     $match: {
//       therapist: true,
//       gender: 'female',
//       mental_health: true,
//       lgbtqia_issues: true,
//     },
//   }, {},
// ]);
