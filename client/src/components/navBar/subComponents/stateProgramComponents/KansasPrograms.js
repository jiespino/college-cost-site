import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function KansasPrograms() {

  return (
      <div>
        <KansasGrants/>
    </div>
  );
}

function KansasGrants() {
    const KansasGrantsInfo = "https://www.kansasregents.org/scholarships_and_grants"

    return (
        <div>
            <h2>Kansas Aid</h2>
            <p>A list of Kansas grants and scholarships can be found <a href={KansasGrantsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default KansasPrograms;