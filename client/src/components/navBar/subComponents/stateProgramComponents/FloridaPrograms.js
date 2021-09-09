import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function FloridaPrograms() {

  return (
      <div>
        <MachenFlorida/>
        <FSUPCPromise/>
    </div>
  );
}

function MachenFlorida() {
    const MachenFloridaInfo = "https://www.sfa.ufl.edu/mfos/"
    return (
        <div>
            <h2>University of Florida: Machen Florida Opportunity Scholarship</h2>
            <p>This program allows students with a household income under $40,000 and household assets (not including their home) under $25,000 to attend the University of Florida tuition free.
                Students must be first-year college students and a Florida resident.
            </p>
            <p>The full program details are <a href={MachenFloridaInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function FSUPCPromise() {
    const FSUPCPromiseInfo = "https://pc.fsu.edu/promise-scholarship"
    return (
        <div>
            <h2>Florida State University at Panama City Promise</h2>
            <p>This program allows students with a household income under $50,000 to attend FSU PC tuition free.
                Students must be northwest Florida residents and complete 30 hours of community service each semester.
            </p>
            <p>The full program details are <a href={FSUPCPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>
  
        </div>
    )
  }

export default FloridaPrograms;