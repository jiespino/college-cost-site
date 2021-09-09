import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function IndianaPrograms() {

  return (
      <div>
        <CenturyScholar/>
        <LowIncomePlan/>
    </div>
  );
}

function CenturyScholar() {
    const CenturyScholarInfo = "https://learnmoreindiana.org/scholars/enroll"
    const CenturyColleges = "https://learnmoreindiana.org/scholars/resources/eligible-colleges/"
    return (
        <div>
            <h2>21st Century Scholar</h2>
            <p>This low-income student program offers up to four years of tuition at an <a href={CenturyColleges} target={_blank} rel={_noreferrer}>eligible university</a> with
             a requirement that they have to commit to the program in 7th or 8th grade.
            </p>
  
            <p>All the program details/eligibility requirements can be found <a href={CenturyScholarInfo} target={_blank} rel={_noreferrer}>here</a>.</p>
  
        </div>
    )
  }

function LowIncomePlan() {
  const LowIncomePlanInfo = "https://www.grace.edu/admissions/undergraduate/financial-aid-scholarships/scholarships-and-grants/"

  return (
      <div>
          <h2>Grace College: Indiana Low Income Plan</h2>
          <p>Students with an <a href={EFCNeedInfo} target={_blank} rel={_noreferrer}>Expected Family Contribution</a> under $1,500 are eligible for free tuition at Grace College.
              Generally students with a household income under $60,000 qualify. Students must be Indiana residents.
          </p>

          <p>All the program details can be found <a href={LowIncomePlanInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

      </div>
  )
}



export default IndianaPrograms;