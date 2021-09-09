import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function MarylandPrograms() {

  return (
      <div>
        <CCPromise/>
        <HPRawlingsGAGrant/>
    </div>
  );
}

function CCPromise() {
    const CCPromiseInfo = "https://mdacc.org/promise-program/"

    return (
        <div>
            <h2>Maryland Community College Promise</h2>
            <p>Maryland students who have a household income under $100,000 in single parent household or under $150,000 in a two parent household
                are eligible to attend a Maryland community college tuition free.
                Students must have a high school GPA of 2.3+.
            </p>
            <p>To see all the program details, please look <a href={CCPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function HPRawlingsGAGrant() {
    const HPRawlingsGAGrantInfo = "https://mhec.maryland.gov/preparing/Pages/FinancialAid/ProgramDescriptions/prog_gagrant.aspx"

    return (
        <div>
            <h2>Howard P. Rawlings Guaranteed Access (GA) Grant</h2>
            <p>Maryland students who have a very high financial need are eligible for this grant. It will cover 100% of the student's financial need while attending college.
            </p>
            <p>The program details and income limits are <a href={HPRawlingsGAGrantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}




export default MarylandPrograms;