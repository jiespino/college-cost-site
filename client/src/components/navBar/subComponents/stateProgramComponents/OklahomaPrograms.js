import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function OklahomaPrograms() {

  return (
      <div>
        <OklahomaPromise/>
    </div>
  );
}

function OklahomaPromise() {
    const OklahomaPromiseInfo = "https://www.okhighered.org/okpromise/"


    return (
        <div>
            <h2>Oklahoma Promise</h2>

            <p>This program covers tuition for low-income students in Oklahoma.
               The student must an Oklahoma resident and their household income must not exceed $60,000 per year.

            </p>

            <p>The program details can be found <a href={OklahomaPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default OklahomaPrograms;