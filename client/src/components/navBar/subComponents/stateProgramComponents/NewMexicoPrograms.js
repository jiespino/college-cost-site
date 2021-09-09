import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function NewMexicoPrograms() {

  return (
      <div>
        <FirstYearPromise/>
        <CollegeAffordabilityGrant/>
    </div>
  );
}

function FirstYearPromise() {
    const FirstYearPromiseInfo = "https://promise.unm.edu/"


    return (
        <div>
            <h2>University of New Mexico: Lobo First-Year Promise</h2>
            <p>Students with a household income under $50,000 a year are eligible to attend the University of New Mexico tuition-free for their freshman year.
            </p>

            <p>The program details can be found <a href={FirstYearPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function CollegeAffordabilityGrant() {
    const CollegeAffordabilityGrantInfo = "https://hed.state.nm.us/financial-aid/grants/college-affordability"


    return (
        <div>
            <h2>College Affordability Grant</h2>
            <p>Students with a high financial need can receive this grant.
                Students must be New Mexico residents and attend a New Mexico college for at least half-time to be eligible.
                The maximum reward is $1,500 per semester and can be awarded annually.
            </p>

            <p>The program details can be found <a href={CollegeAffordabilityGrantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}



export default NewMexicoPrograms;