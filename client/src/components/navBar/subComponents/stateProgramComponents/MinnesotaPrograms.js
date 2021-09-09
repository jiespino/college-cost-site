import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function MinnesotaPrograms() {

  return (
      <div>
        <UMinnPromisePlus/>
        <UMinnUPromise/>
    </div>
  );
}

function UMinnPromisePlus() {
    const UMinnPromisePlusInfo = "https://system.umn.edu/u-promise-and-promise-plus"


    return (
        <div>
            <h2>University of Minnesota: Promise Plus</h2>
            <p>New Minnesota freshman students who have a household income at or below $50,000 are eligible to 
                attend any University of Minnesota college tuition free.
               Students must be Minnesota residents.
            </p>

            <p>Please review all the program details <a href={UMinnPromisePlusInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function UMinnUPromise() {
    const UMinnUpromiseInfo = "https://system.umn.edu/u-promise-and-promise-plus"


    return (
        <div>
            <h2>University of Minnesota: U Promise Scholarship</h2>
            <p>New Minnesota freshman students who have a household income at or below $120,000 are eligible to 
                recieve aid while attending a University of Minnesota college.
                For new freshmen the award ranges from $300 - $4,000 annually.
                For transfer students the award ranges from $300 to $2,000 annually (limited to 2 years).
               Students must be Minnesota residents.
            </p>

            <p>Please review all the program details <a href={UMinnUpromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default MinnesotaPrograms;