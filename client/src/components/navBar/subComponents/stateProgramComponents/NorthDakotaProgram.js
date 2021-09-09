import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function NorthDakotaPrograms() {

  return (
      <div>
        <NDStateGrant/>
        <NDGrants/>
    </div>
  );
}

function NDStateGrant() {
    const NDStateGrantsInfo = "https://ndus.edu/paying-for-college/paying-for-college-ndopportunities/"


    return (
        <div>
            <h2>North Dakota State Grant</h2>
            <p>North Dakota provides need-based grants to first-time undergraduate students who are residents of the state.
               The reward amount is up to $1,100 per semester or $733 per quarter.
            </p>

            <p>The program details and eligibility requirements can be found <a href={NDStateGrantsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function NDGrants() {
    const NDGrantsInfo = "https://ndus.edu/paying-for-college/"


    return (
        <div>
            <h2>North Dakota Grants</h2>

            <p>A list of North Dakota grants can be found <a href={NDGrantsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default NorthDakotaPrograms;