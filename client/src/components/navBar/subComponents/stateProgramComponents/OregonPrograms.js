import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function OregonPrograms() {

  return (
      <div>
        <OregonPromise/>
        <PSU/>
        <OregonOpportunityGrant/>
    </div>
  );
}

function OregonPromise() {
    const OregonPromiseInfo = "https://oregonstudentaid.gov/oregon-promise.aspx"


    return (
        <div>
            <h2>Oregon Promise</h2>

            <p>This program provides need-based aid to students so they can attend community college in Oregon.
                Students must have at least a 2.5 GPA in high school and be Oregon residents for at least a year.
                For eligible full-time students, aid can be anywhere from $1,000 - $4,131 per year.
                Funding for this program varies by year so hard limits on household income to determine eligibility aren't given.

            </p>

            <p>Please view the program <a href={OregonPromiseInfo} target={_blank} rel={_noreferrer}>here</a> to review all the eligibility/application details.</p>

        </div>
    )
}

function PSU() {
    const PSUInfo = "https://www.pdx.edu/student-finance/four-years-free"


    return (
        <div>
            <h2>Portland State University: Four Years Free</h2>

            <p>This program provides free tuition/fees to low-income students who are eligible for a <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a>.
               Students must be Oregon residents and graduate from an Oregon high school.
            </p>

            <p>Please view the program <a href={PSUInfo} target={_blank} rel={_noreferrer}>here</a> to review all the eligibility/application details.</p>

        </div>
    )
}

function OregonOpportunityGrant() {
    const OregonOpportunityGrant = "https://oregonstudentaid.gov/oregon-opportunity-grant.aspx"


    return (
        <div>
            <h2>Oregon Opportunity Grant</h2>

            <p>Oregon awards need-based grants to qualifying students.
               For community colleges, the award amount is $2,778.
               For 4 year colleges, the award amount is $3,612.
            </p>

            <p>Please view the program <a href={OregonOpportunityGrant} target={_blank} rel={_noreferrer}>here</a> to review all the eligibility/application details.</p>

        </div>
    )
}


export default OregonPrograms;