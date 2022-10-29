const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
require('dotenv').config();

const mongoString = process.env.URL_MONGO;

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
