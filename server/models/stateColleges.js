var mongoose = require('mongoose');

var stateCollegeSchema = mongoose.Schema({state : String, colleges: Array});

//Export model
module.exports = mongoose.model('college_costs', stateCollegeSchema);