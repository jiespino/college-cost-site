import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function HawaiiPrograms() {

  return (
      <div>
        <HawaiiPromise/>
    </div>
  );
}

function HawaiiPromise() {
    const HawaiiPromiseInfo = "http://uhcc.hawaii.edu/ovpcc/removing-cost/promise"
    return (
        <div>
            <h2>University of Hawaii Community College: Hawaii Promise</h2>
            <p>This program allows students to attend the University of Hawaii Community College tuition free.
                Students must be Hawaii residents and complete the <a href={fafsaLink} target={_blank} rel={_noreferrer}>Free Application for Federal Student Aid (FAFSA)</a>.
            </p>
            <p>The program page is <a href={HawaiiPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>
  
        </div>
    )
  }


export default HawaiiPrograms;