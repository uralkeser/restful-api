/**
This code is written for V-Count Coding Assignment
@author Osman Ural Keser  
*/

const mongoose = require('mongoose');
const config = require('../config/db_config');

const connection = mongoose.connect(config.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, 
  (error,db) => {
    if(error){
      throw error;
    }
    console.log('DB connection successful.');
  }
);

module.exports = connection; 