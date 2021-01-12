const mongoose = require('mongoose');

// eslint-disable-next-line prefer-destructuring
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, {
  useFindAndModify: false,
  // options for the connect method to parse the URI
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'mindfull',
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const { Schema } = mongoose;

// sets a schema for the 'species' collection
const userSchema = new Schema({
  first_name: String,
  last_name: String,
  email: String,
  password: String,
  patient: Boolean,
  therapist: Boolean,
  age: Number,
  orientation: String,
  relationship_status: String,
  years_experience: Number,
  gender: String,
  therapist_preference: String,
  imposter_syndrome: Boolean,
  lgbtqia_issues: Boolean,
  marriage_counseling: Boolean,
  childhood_trauma: Boolean,
  substance_abuse: Boolean,
  mental_health: Boolean,
  online: Boolean,
});

// creates a model for the 'species' collection that will be part of the export
const User = mongoose.model('user', userSchema);

module.exports = {
  User,
};
