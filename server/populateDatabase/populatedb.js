require('dotenv').config()
const express = require("express");
var stateColleges = require('../models/stateColleges')
var college = require('../models/college')

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}.bfrtw.mongodb.net/college_data?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Code to populate database
var json = require('../collegeFinData.json');

for (var USState in json) {
  let collegeArray = []

  for (var idx in json[USState]) {
    let SAT25Score
    let SAT75Score
    
    SATScore = json[USState][idx]['SATVR25']
    if (SATScore === "NULL") {
      SAT25Score = "NULL"
      SAT75Score = "NULL"
    }
    else {
      SAT25Score =  Number(json[USState][idx]['SATVR25']) + Number(json[USState][idx]['SATMT25'])
      SAT75Score =  Number(json[USState][idx]['SATVR75']) + Number(json[USState][idx]['SATMT75'])
    }
    
    var newDataCollege = new college({
      name: json[USState][idx]['INSTNM'],
      _id: json[USState][idx]['UNITID'],
      tuition: json[USState][idx]['TUITIONFEE_IN'],
      SAT25: SAT25Score,
      SAT75: SAT75Score,
      ACT25: json[USState][idx]['ACTCM25'],
      ACT75: json[USState][idx]['ACTCM75'],
      admRate: json[USState][idx]['ADM_RATE'],
      gradRate: json[USState][idx]['C150_4'],
      city: json[USState][idx]['CITY'],
      state: json[USState][idx]['STABBR'],
      zip: json[USState][idx]['ZIP'],
      pop: json[USState][idx]['UGDS'],
      medDebt30: json[USState][idx]['LO_INC_DEBT_MDN'],
      medDebt75: json[USState][idx]['MD_INC_DEBT_MDN'],
      medDebt_75: json[USState][idx]['HI_INC_DEBT_MDN'],
      carnegieBasic: json[USState][idx]['CCBASIC'],
      carnegieUndergrad: json[USState][idx]['CCUGPROF'],
      carnegieSize: json[USState][idx]['CCSIZSET'],

      pubCost: json[USState][idx]['NPT4_PUB'],
      pubCostNPT41: json[USState][idx]['NPT41_PUB'],
      pubCostNPT42: json[USState][idx]['NPT42_PUB'],
      pubCostNPT43: json[USState][idx]['NPT43_PUB'],
      pubCostNPT44: json[USState][idx]['NPT44_PUB'],
      pubCostNPT45: json[USState][idx]['NPT45_PUB'],
      
      privCost: json[USState][idx]['NPT4_PRIV'],
      privCostNPT41: json[USState][idx]['NPT41_PRIV'],
      privCostNPT42: json[USState][idx]['NPT42_PRIV'],
      privCostNPT43: json[USState][idx]['NPT43_PRIV'],
      privCostNPT44: json[USState][idx]['NPT44_PRIV'],
      privCostNPT45: json[USState][idx]['NPT45_PRIV'],

      othCost: json[USState][idx]['NPT4_OTHER'],
      othCostNPT41: json[USState][idx]['NPT41_OTHER'],
      othCostNPT42: json[USState][idx]['NPT42_OTHER'],
      othCostNPT43: json[USState][idx]['NPT43_OTHER'],
      othCostNPT44: json[USState][idx]['NPT44_OTHER'],
      othCostNPT45: json[USState][idx]['NPT45_OTHER'],

      progCost: json[USState][idx]['NPT4_PROG'],
      progCostNPT41: json[USState][idx]['NPT41_PROG'],
      progCostNPT42: json[USState][idx]['NPT42_PROG'],
      progCostNPT43: json[USState][idx]['NPT43_PROG'],
      progCostNPT44: json[USState][idx]['NPT44_PROG'],
      progCostNPT45: json[USState][idx]['NPT45_PROG'],

      latitude: json[USState][idx]['LATITUDE'],
      longitude: json[USState][idx]['LONGITUDE'],
      meanSalary: json[USState][idx]['MN_EARN_WNE_P10'],
      medianSalary: json[USState][idx]['MD_EARN_WNE_P10'],
      favorite: false
    })

    collegeArray.push(newDataCollege)

    newDataCollege.save(function(err){
    if (err) {
              throw err;
    }
    console.log('INSERTED!');
  });    

  }
  var newDataState = new stateColleges({
    state: USState,
    colleges: collegeArray
  })

  newDataState.save(function(err){
  if (err) {
            throw err;
  }
  console.log('INSERTED! DONE WITH STATE' + USState);
});
}

// Populate database code end

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});