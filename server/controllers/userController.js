/* eslint-disable quotes */
/* eslint-disable quote-props */
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

userController.verifyUser = async (req, res, next) => {
  try {
    const {
      email,
      password,
    } = req.body;
    const user = await User.findOne({email, password});
    res.locals.user = user;
    return next();
  } catch (error) {
    return next({
      log: `userController.verify: ERROR: ${error}`,
      message: 'Error verifying user',
    });
  }
}

userController.userInfo = async (req, res, next) => {
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
    console.log('req.body usercontroller user info', req.body);
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
    { returnOriginal: false });
    return next();
  } catch (error) {
    return next({
      log: `userController.userInfo: ERROR: ${error}`,
      message: 'Error inserting user info',
    });
  }
};

userController.matchTherapist = async (req, res, next) => {
  try {
    const {
      gender_preference,
      imposter_syndrome,
      lgbtqia_issues,
      marriage_counseling,
      childhood_trauma,
      substance_abuse,
      mental_health,
    } = req.body;
    const filtered = Object.keys(req.body).filter((key) => req.body[key] === true);
    console.log('filtered matchterapist req.body', filtered);
    const obj = {
      "therapist": true,
      "gender": gender_preference.toLowerCase(),
    };
    filtered.forEach((e) => { obj[e] = true; });
    console.log('filtered object', obj);
    const matchTherapist = User.aggregate([
      {
        $match: obj,
      },
    ]);
    console.log('matchTherapist', matchTherapist);
    const matchResult = await matchTherapist.exec();
    console.log('therapist match result usercontroller', matchResult);
    res.locals.matchTherapist = matchResult;
    return next();
  } catch (error) {
    return next({
      log: `userController.matchTherapist: ERROR: ${error}`,
      message: 'Error with match aggregation in userController.matchTherapist',
    });
  }
};

module.exports = userController;
