import React, { useState, useEffect } from 'react'
import './collegeCard.css'
import ReactTooltip from "react-tooltip";


// Create our number formatter.
var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0,

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});

function CollegeCard(props) {

  // Store if college is favorited or not
  const [favActive, setFavActive] = useState(false)

  // Find if college is favorited in database.
  // If so, change state
  useEffect(() => {
    if (localStorage.getItem(String(props.college._id))) {
      setFavActive(true)
    }
    else {
      setFavActive(false)
    }
  }, [props.college._id]);



  let costText = getCostText()

  function getCostText() {
    let parentalIncome = Number(props.PI)
    let costText;

    if (parentalIncome > 0 && parentalIncome < 30001) {
      costText = "Average Net Cost (per year, HI 0 - 30k): "
    }
    else if (parentalIncome > 30000 && parentalIncome < 48001) {
      costText = "Average Net Cost (per year, HI 30k - 48k): "
    }
    else if (parentalIncome > 48000 && parentalIncome < 75001) {
      costText = "Average Net Cost (per year, HI 48k - 75k): "

    }
    else if (parentalIncome > 75000 && parentalIncome < 110000) {
      costText = "Average Net Cost (per year, HI 75k - 110k): "

    }
    else if (parentalIncome > 110000) {
      costText = "Average Net Cost (per year, HI > 110k): "
    }

    if (!costText) {
      costText = "Average Net Cost (per year): "

    }
    return costText
  }

  // When college is favorited, 
  // update database to reflect updated status
  function updateFavorite() {

    setFavActive(!favActive)

    if (!favActive) {
      localStorage.setItem(String(props.college._id), true)
    }
    else {
      localStorage.removeItem(String(props.college._id))
    }
  }

  const collegeTitle = (props.college.collegeImgTitle) ? <img className="imgTitle" src={process.env.PUBLIC_URL + props.college.collegeImgTitle} alt={props.college.name}></img> : <p className="college-title">{props.college.name}</p>


  const address = <a className="address" href={`http://www.google.com/maps/place/${props.college.latitude},${props.college.longitude}`} target="_blank" rel="noreferrer">{props.college.city}, {props.college.state} {props.college.zip}</a>

  const undergradEnrollment = (Number(props.college.pop)) ? 
          <div>
            <p><span data-tip data-event='click' data-for="enrollmentTip">Undergraduate Enrollment: </span>{Number(props.college.pop).toLocaleString()}</p>
            <ReactTooltip id="enrollmentTip" place="top" effect="solid" globalEventOff='click'>Enrollment of undergraduate degree/certification seeking students.</ReactTooltip>
          </div>: null

  const acceptRate = (Number(props.college.admRate)) ? 
          <div>
            <p><span data-tip data-event='click' data-for="acceptRateTip">Acceptance rate: </span>{`${Math.floor(props.college.admRate * 100)}%`}</p>
            <ReactTooltip id="acceptRateTip" place="top" effect="solid" globalEventOff='click'>Percentage of students who applied to the university/college who were then accepted.</ReactTooltip>
          </div>: null

  const gradRate = (Number(props.college.gradRate)) ? 
          <div>
            <p><span data-tip data-event='click' data-for="gradRateTip">Graduation rate: </span>{`${Math.floor(props.college.gradRate * 100)}%`}</p>
            <ReactTooltip id="gradRateTip" place="top" effect="solid" globalEventOff='click'>Graduation rate is for first-time, full-time undergraduate students who graduated within 6 years. </ReactTooltip>
          </div>: null

  const netCost = (Number(props.college.totalCost)) ?
        <div>
          <p><span data-tip data-event='click' data-for="costTip">{costText}</span>{formatter.format(props.college.totalCost)}</p>
          <ReactTooltip className="toolTip" id="costTip" place="top" effect="solid" multiline={true} globalEventOff='click'>HI = household income. The average annual total cost of attendance, including tuition and fees, books, and living expenses,
            minus the average grant/scholarship aid. Household income factors into this number's calculation, as some universities provide more aid to students with a lower household income.</ReactTooltip>
        </div>: null

  const tuition = (Number(props.college.tuition)) ?
        <div>
          <p><span data-tip data-event='click' data-for="tuitionTip">Tuition (per year): </span>{formatter.format(props.college.tuition)}</p>
          <ReactTooltip id="tuitionTip" place="top" effect="solid" multiline={true} globalEventOff='click'>For public universities, yearly in-state tuiton. For private universities, their yearly tuition.</ReactTooltip>
        </div>: null

  const SATScore = (props.college.SAT25 !== "NULL" && props.college.SAT25) ?
        <div>
          <p><span data-tip data-event='click' data-for="satTip">SAT Range: </span>{props.college.SAT25} - {props.college.SAT75}</p>
          <ReactTooltip id="satTip" place="top" effect="solid" globalEventOff='click'>25th to 75th percentile of SAT scores for admitted undergraduate</ReactTooltip>
        </div>: null

  const ACTScore = (props.college.ACT25 !== "NULL" && props.college.ACT25) ?
        <div>
          <p><span data-tip data-event='click' data-for="actTip">ACT Range: </span>{props.college.ACT25} - {props.college.ACT75}</p>
          <ReactTooltip id="actTip" place="top" effect="solid" globalEventOff='click'>25th to 75th percentile of ACT scores for admitted undergraduates</ReactTooltip>
        </div>: null

  const avgSalary = (Number(props.college.meanSalary)) ?
        <div>
          <p><span data-tip data-event='click' data-for="salTip">Median Salary: </span>{formatter.format(props.college.medianSalary)}</p>
          <ReactTooltip id="salTip" place="top" effect="solid" globalEventOff='click'>Median salary for students 2 years after graduating from the university</ReactTooltip>
        </div>: null

  const favButton = <div className="favorite-container">
                      <button type="warning" className={favActive ? 'favorite-button-active' : 'favorite-button'} onClick={(e) => updateFavorite(e)}>
                        <svg className="star-icon" viewBox="0 0 24 24" width="1em" height="1em" >
                          <path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z">
                          </path>
                        </svg>
                        <span className="css-1km43m6-BtnContent e5i1odf0">Favorite</span>
                      </button>
                    </div>

  return (

    <div className="college-card">
      {collegeTitle}
      {address}
      {undergradEnrollment}
      {acceptRate}
      {gradRate}
      {netCost}
      {tuition}
      {SATScore}
      {ACTScore}
      {avgSalary}
      {favButton}
    </div>
  );
}

export default CollegeCard;
