const mongoose = require('mongoose');
require('../models/User');

const dbName = 'sharedtrip';
const connectionString = `mongodb://localhost:27017/${dbName}`;

module.exports = async (app) => {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected');

    mongoose.connection.on('error', (err) => {
      console.log('Database error!');
      console.log(error);
    });
  } catch (err) {
    console.error('Error connecting to database!');
    process.exit(1);
  }
};
