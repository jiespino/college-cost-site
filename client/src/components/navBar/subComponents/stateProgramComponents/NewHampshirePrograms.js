import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function NewHampshirePrograms() {

  return (
      <div>
        <GraniteGuarantee/>
        <PiercePromise/>
    </div>
  );
}

function GraniteGuarantee() {
    const GraniteGuaranteeInfo = "https://admissions.unh.edu/granite-guarantee"


    return (
        <div>
            <h2>Univesrity of New Hampshire: Granite Guarantee</h2>
            <p>Students that are eligible for a <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> can attend the University of New Hampshire tuition free.
               Students must be New Hampshire residents; Also they must be in their first year of college or a new transfer student to the university.
            </p>

            <p>The program details can be found <a href={GraniteGuaranteeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


function PiercePromise() {
    const PiercePromiseInfo = "https://www.franklinpierce.edu/piercepromise.htm"


    return (
        <div>
            <h2>Franklin Pierce University: Pierce Promise</h2>
            <p>Students with a high school GPA of 3.0+ and a household income under $100,000 are eligible for free tuition at Franklin Pierce University.
                Students also must be first time incoming freshman and New Hampshire residents.
            </p>

            <p>The program details can be found <a href={PiercePromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default NewHampshirePrograms;