/**
This code is written for V-Count Coding Assignment
@author Osman Ural Keser  
*/

const express = require('express');
const app = express();
const config = require('./config/env_config');

// Include country router
require('./routes/country_router.js')(app);

app.listen( config.PORTNUMBER, () => {
  console.log(`Server start on port ${config.PORTNUMBER}`)
});
