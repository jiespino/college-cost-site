import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function LouisianaPrograms() {

  return (
      <div>
        <LouisianaPromise/>
        <PrivateerPledge/>
    </div>
  );
}

function LouisianaPromise() {
    const LouisianaPromiseInfo = "https://admission.tulane.edu/louisiana-promise"

    return (
        <div>
            <h2>Tulane University: Louisiana Promise</h2>
            <p>Louisiana students who have a household income under $100,000 are eligible for full financial aid (no loans) covering the cost of attendance to Tulane University.
                Students with household incomes higher than this do recieve aid but at a sliding scale.
            </p>
            <p>To see all the program details, please look <a href={LouisianaPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function PrivateerPledge() {
    const PrivateerPledgeInfo = "https://www.uno.edu/pledge"

    return (
        <div>
            <h2>Universtiy of New Orleans: Privateer Pledge</h2>
            <p>Low income high school students in Orleans Parish or Jefferson Parish are eligible for free tuition at the University of New Orleans.
                Students must have a household income below $60,000 to be eligible.
            </p>
            <p>To see all the program details, please look <a href={PrivateerPledgeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default LouisianaPrograms;