import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function MontanaPrograms() {

  return (
      <div>
        <MontanaPromiseGrant/>
    </div>
  );
}

function MontanaPromiseGrant() {
    const MontanaPromiseGrantInfo = "https://leg.mt.gov/bills/mca/title_0200/chapter_0260/part_0060/section_0230/0200-0260-0060-0230.html"


    return (
        <div>
            <h2>Montana Promise Grant</h2>
            <p>Students who have a high school GPA of 2.5+ are eligible to attend a Montana community college tuition free.
                Students must be Montana residents and also maintain a 2.7 GPA throughout the program to maintain eligibility.
            </p>

            <p>Please review all program details <a href={MontanaPromiseGrantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default MontanaPrograms;