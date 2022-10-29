const express = require('express');
const mongoose = require('mongoose');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const catalogRouter = require('./routes/catalog'); //Import routes for "catalog" area of site

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
require('dotenv').config();

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter); // Add catalog routes to middleware chain.

const mongoString = process.env.URL_MONGO;

mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
