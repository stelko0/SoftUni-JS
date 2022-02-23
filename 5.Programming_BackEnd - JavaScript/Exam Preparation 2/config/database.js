const mongoose = require('mongoose');
require('../models/User');
require('../models/Trips');
//TODO change database name
const dbName = 'sharedtrips'
const connectionString = `mongodb://localhost:27017/${dbName}`;

module.exports = async (app) => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected');

        mongoose.connection.on('error', (err) => {
            console.log('Database error!');
            console.log(error);
        })
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}