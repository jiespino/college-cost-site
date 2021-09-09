
var mongoose = require('mongoose');

var collegeSchema = mongoose.Schema({
    name: String,
    _id: Number,
    tuition: String,
    SAT25: String,
    SAT75: String,
    ACT25: String,
    ACT75: String,
    admRate: String,
    gradRate: String,
    city: String,
    state: String,
    zip: String,
    pop: String,
    medDebt30: String,
    medDebt75: String,
    medDebt_75: String,
    carnegieBasic: String,
    carnegieUndergrad: String,
    carnegieSize: String,

    pubCost: String,
    pubCostNPT41: String,
    pubCostNPT42: String,
    pubCostNPT43: String,
    pubCostNPT44: String,
    pubCostNPT45: String,
    
    privCost: String,
    privCostNPT41: String,
    privCostNPT42: String,
    privCostNPT43: String,
    privCostNPT44: String,
    privCostNPT45: String,

    othCost: String,
    othCostNPT41: String,
    othCostNPT42: String,
    othCostNPT43: String,
    othCostNPT44: String,
    othCostNPT45: String,

    progCost: String,
    progCostNPT41: String,
    progCostNPT42: String,
    progCostNPT43: String,
    progCostNPT44: String,
    progCostNPT45: String,

    latitude: String,
    longitude: String,
    meanSalary: String,
    medianSalary: String,
    favorite: Boolean
});

//Export model
module.exports = mongoose.model('colleges', collegeSchema);
