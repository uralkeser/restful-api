const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
  name: {type:String, require:true},
  region: {type:String, require:true}
});

module.exports = mongoose.model('Country', CountrySchema);