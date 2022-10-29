// Require Mongoose
const mongoose = require('mongoose');

// Define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date,
});

const SomeModel = mongoose.model('SomeModel', SomeModelSchema);

const awesome_instance = new SomeModel({ name: 'awesome' });
