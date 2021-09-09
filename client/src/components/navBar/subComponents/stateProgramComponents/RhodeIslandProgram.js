import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function RhodeIslandPrograms() {

  return (
      <div>
        <RIPromise/>

    </div>
  );
}

function RIPromise() {
    const RIPromiseInfo = "https://www.ccri.edu/ripromise/"


    return (
        <div>
            <h2>Community College of Rhode Island: Rhode Island Promise</h2>

            <p>This program allows high school graduates to attend the Community College of Rhode Island tuition free for 2 years.
                Only Rhode Island residents and students must enroll in the fall immediately after graduating high school or earning a GED.

            </p>

            <p>More details on the program can be found <a href={RIPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}




export default RhodeIslandPrograms;