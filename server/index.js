
require('dotenv').config()
const express = require("express");
const bodyParser = require('body-parser');

var stateColleges = require('./models/stateColleges')
var college = require('./models/college')
console.log(process.env)


//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}.bfrtw.mongodb.net/college_data?retryWrites=true&w=majority`;
mongoose.connect(mongoDB, { useFindAndModify: false, useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 3001;

const app = express();
app.use(bodyParser.json());

// Get all colleges from a single state from database
app.get("/api", (req, res) => {
  stateColleges.find({ state: req.query.state}, function (err, docs) {
    res.send(docs[0]["colleges"]);
  });
});


// Get single college from database
app.get("/apiSingle", (req, res) => {
  college.find({ _id: req.query.id}, function (err, docs) {
    res.send(docs[0]);
  });
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});