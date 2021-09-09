import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function SouthDakotaPrograms() {

  return (
      <div>
        <SDGrants/>

    </div>
  );
}

function SDGrants() {
    const SDGrantsInfo = "https://www.collegegrants.org/south-dakota-college-grants-where-does-the-money-go.html"


    return (
        <div>
            <h2>South Dakota Grants</h2>

            <p>A list of South Dakota grants/scholarships can be found <a href={SDGrantsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}




export default SouthDakotaPrograms;