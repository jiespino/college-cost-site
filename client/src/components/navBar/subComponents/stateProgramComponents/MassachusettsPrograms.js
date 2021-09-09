import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function MassachusettsPrograms() {

  return (
      <div>
        <TuitionFreeCCPlan/>
    </div>
  );
}

function TuitionFreeCCPlan() {
    const TuitionFreeCCPlanInfo = "https://owd.boston.gov/tfcc/"
    const incomeLimits = "https://s20289.pcdn.co/wp-content/uploads/2021/06/HUD-Limits-2021.pdf"


    return (
        <div>
            <h2>City of Boston: Tuition-Free Community College Plan</h2>
            <p>Boston students who are eligible for a <a>Pell Grant</a> can attend one of 6 Boston community colleges tuition free.
            The eligibly criteria are below.
            </p>
            <ul>
                <li>Be a Boston resident</li>
                <li>Have a high school GPA of 2.0+</li>
                <li>Start the program within 18 months of graduating high school</li>
                <li>Not have a household income higher than specified. The income limits are <a href={incomeLimits} target={_blank} rel={_noreferrer}>here</a>.</li>
            </ul>

            <p>To see the participating colleges and other program details, please look <a href={TuitionFreeCCPlanInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}



export default MassachusettsPrograms;