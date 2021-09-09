import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function PennsylvaniaPrograms() {

  return (
      <div>
        <WilliamsonCOT/>
        <USciences/>
        <PAStateGrant/>

    </div>
  );
}

function WilliamsonCOT() {
    const WilliamsonCOTInfo = "https://www.williamson.edu/admissions/financial-aid/cost-of-attendance/"


    return (
        <div>
            <h2>Williamson College of the Trades: Williamson Scholarship</h2>

            <p>This trade school covers tuition, room, board, and book costs for all of its students.
            </p>

            <p>More details on the program can be found <a href={WilliamsonCOTInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function USciences() {
    const USciences = "https://www.usciences.edu/admission/cost-financial-aid/opportunity-scholarship.html"
    const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"


    return (
        <div>
            <h2>University of the Sciences: USciences Opportunity Scholarship</h2>

            <p>This scholarship is awarded to low-income students (<a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant eligible</a>) that are Pennsylvania residents. An application is required (it is free).
            </p>

            <p>All the program details can be found <a href={USciences} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function PAStateGrant() {
    const PAStateGrantInfo = "https://www.pheaa.org/grants/state-grant-program/prepare.shtml"
    const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"


    return (
        <div>
            <h2>Pennsylvania State Grant</h2>

            <p>Pennsylvania awards need-based grants to qualifying students. The award ranges from $500 - $4,525 per year.
            </p>

            <p>More information on eligibility/application requirements can be found here <a href={PAStateGrantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}



export default PennsylvaniaPrograms;