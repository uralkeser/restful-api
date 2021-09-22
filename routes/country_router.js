/**
This code is written for V-Count Coding Assignment
@author Osman Ural Keser  
*/

module.exports = app =>{
  
  const countryController = require('../controllers/country_controller.js');
  
  //GET All Countries
  app.get('/countries', countryController.getAllCountries);

  //GET All Countries By Region
  app.get('/countries/:region', countryController.getAllCountriesByRegion);
}