import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function GeorgiaPrograms() {

  return (
      <div>
        <HopeGrant/>
        <GWayneClough/>
    </div>
  );
}

function HopeGrant() {
    const HopeGrantInfo = "https://www.tcsg.edu/free-tuition/"
    const HopeColleges = "https://www.tcsg.edu/find-a-college/"
    return (
        <div>
            <h2>Technical College System of Georgia: Hope Grant</h2>
            <p>This program allows students to attend a trade school in the Technical College System of Georgia wihout having to pay tuition, if they enter a high-need-field program.
                A map of the available colleges is <a href={HopeColleges} target={_blank} rel={_noreferrer}>here</a>
            </p>
            <p>The full program requirements and all high need fields are listed <a href={HopeGrantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>
  
        </div>
    )
  }

function GWayneClough() {
    const GWayneCloughInfo = "https://finaid.gatech.edu/g-wayne-clough-georgia-tech-promise-program-overview-criteria"
    return (
        <div>
            <h2>Georgia Tech: G. Wayne Clough Promise</h2>
            <p>This program allows students with a household income under $33,300 to attend Georgia Tech tuition free.
                Students must be Georgia residents, must enter as a first-year freshman, and complete their <a href={fafsaLink} target={_blank} rel={_noreferrer}>Free Federal Application for Student Aid (Fafsa)</a>
            </p>
            <p>The full program details are <a href={GWayneCloughInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default GeorgiaPrograms;