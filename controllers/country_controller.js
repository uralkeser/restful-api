/**
This code is written for V-Count Coding Assignment
@author Osman Ural Keser  
*/

const Country = require('../models/country');
const db = require("../lib/db.js");

// get all countries 
exports.getAllCountries = (req,res) =>{
  Country.find({},(err, countries) =>{
    if(err){
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving countries."
      });
    }
    else{
      res.json(countries);
    }
  });
}

// get all countries by given region
exports.getAllCountriesByRegion = (req,res) =>{
  const region = req.params.region;
  Country.find({region:region},(err, countries) =>{
    if(err){
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving countries by region."
      });
    }
    else{
      res.json(countries);
    }
  });
}

