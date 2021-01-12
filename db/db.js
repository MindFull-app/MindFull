const Sequelize = require('sequelize');
const user = require('./models/User');
const patient = require('./models/Patient');
const therapist = require('./models/Therapist');

const PG_URI = process.env.PG_URI

const instance = new Sequelize(PG_URI);

const models = {
  User: user(instance, Sequelize),
  Patient: patient(instance, Sequelize),
  Therapist: therapist(instance, Sequelize),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

module.exports = { instance, models };
