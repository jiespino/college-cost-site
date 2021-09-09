import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function DistrictOfColumbiaPrograms() {

  return (
      <div>
        <DCTuitionAssistanceGrant/>
    </div>
  );
}

function DCTuitionAssistanceGrant() {
    const DCTuitionAssistanceGrantInfo = "https://blog.collegevine.com/dc-tuition-assistance-grant/"
    const DCOfficialPage = "https://osse.dc.gov/dctag"
    return (
        <div>
            <h2>DC Tuition Assistance Grant</h2>
            <p>This program allows DC high school students to more easily attend out-of-state universities.
                For public universities, this grant will cover the difference of in-state and out-of-state tuition by $10,000 per year (maximum of 6 years/$50,000).
                For Historically Black Colleges/Universities, the grant will award up to $2,500 per year (maximum of 6 years/$12,500).
                Students must be DC residents, age 26 or younger, and have a high school diploma/GED.
            </p>
            <p>More program details are <a href={DCTuitionAssistanceGrantInfo} target={_blank} rel={_noreferrer}>here</a>.
            The official program page is <a href={DCOfficialPage} target={_blank} rel={_noreferrer}>here</a></p>

        </div>
    )
}


export default DistrictOfColumbiaPrograms;