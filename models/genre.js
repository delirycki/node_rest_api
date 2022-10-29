const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GenereSchema = new Schema({
  name: { type: String, minlength: 3, maxlength: 100 },
});

// Virtual for bookinstance's URL
GenereSchema.virtual('url').get(function () {
  // We don't use an arrow function as we'll need the this object
  return `/catalog/genereschemainstance/${this._id}`;
});

// Export model
module.exports = mongoose.model('Genere', GenereSchema);
