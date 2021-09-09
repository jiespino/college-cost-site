import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function OhioPrograms() {

  return (
      <div>
        <OhioOpportunityGrant/>
        <AkronZips/>
        <NurseLoanAssistance/>
    </div>
  );
}

function OhioOpportunityGrant() {
    const OhioOpportunityGrantInfo = "https://www.ohiohighered.org/ocog"


    return (
        <div>
            <h2>Ohio Opportunity Grant</h2>

            <p>This program gives grants to Ohio resident low-income students to help play for college.
            </p>

            <p>The details can be found <a href={OhioOpportunityGrantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function AkronZips() {
    const AkronZipsInfo = "https://www.uakron.edu/finaid/scholarship-programs/zips-affordability-scholarship"


    return (
        <div>
            <h2>University of Akron: Zips Affordability Scholarship</h2>

            <p>This program covers tuition to low-income students that attend the University of Akron.
               Students must be eligible for a <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> and also live in one of 6 Ohio counties (Cuyahoga, Medina, Portage, Stark, Summit or Wayne).
            </p>

            <p>The program details/eligibility requirements can be found <a href={AkronZipsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


function NurseLoanAssistance() {
    const NurseLoanAssistanceInfo = "https://www.ohiohighered.org/nealp"


    return (
        <div>
            <h2>Nurse Education Assistance Loan Program</h2>

            <p>This program provides loans to nursing students enrolled in an approved Ohio pre-licensure nurse education program.
               The award amount is currently $1,620 per year. The loans are forgiveable if the student works as a full-time nurse in Ohio for five years after graduation.
            </p>

            <p>The program details/eligibility requirements can be found <a href={NurseLoanAssistanceInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default OhioPrograms;