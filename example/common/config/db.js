const mongoose = require('mongoose');

// set up default mongoose connection
const mongoDB= 'mongodb://root:example@localhost:27017'

mongoose.connect(mongoDB,{useNewUrlParser:true, useUnifiedTopology:true});

const mongoConection = mongoose.connection;

mongoConection.on('Error', console.error.bind(console, "MongoDB connection error"));

module.exports = mongoConection;