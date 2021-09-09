import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function MississippiPrograms() {

  return (
      <div>
        <MSStatePromise/>
        <MSEminentScholarsGrant/>
    </div>
  );
}

function MSStatePromise() {
    const MSStatePromiseInfo = "https://www.sfa.msstate.edu/types-of-aid/promise-program/"


    return (
        <div>
            <h2>Mississippi State University: Mississippi State Promise</h2>
            <p>Students who have a household income at or below $32,000 are eligible to attend Mississippi State University tuition free.
               Students must be Mississippi residents.
               Also students must either have a 3.0+ GPA in high school along with an ACT of 19+, or be a community college transfer student with a GPA of 2.5+ and 48 credit hours completed.
            </p>

            <p>Please review all the program details <a href={MSStatePromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function MSEminentScholarsGrant() {
    const MSEminentScholarsGrantInfo = "https://www.msfinancialaid.org/mesg/"


    return (
        <div>
            <h2>Mississippi Eminent Scholars Grant</h2>
            <p>High achieving students in Missippi are eligible to receive $2,500 per year towards their education at a Mississippi college.
                Students must have a high school GPA of 3.5+ and either score a 29 on their ACT (1350 on the SAT) OR be a National Merit Finalist or Semifinalist.
                Students in college are also eligible but a cumulative GPA of 3.5+ in college is required.
                Students must be Mississippi residents.

            </p>

            <p>Please review all the program details <a href={MSEminentScholarsGrantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default MississippiPrograms;