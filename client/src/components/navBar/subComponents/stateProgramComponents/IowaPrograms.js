import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function IowaPrograms() {

  return (
      <div>
        <FutureReadyIowa/>
        <SimpsonPromise/>
    </div>
  );
}

function FutureReadyIowa() {
  const FutureReadyIowaInfo = "https://iowacollegeaid.gov/LastDollar"
  const FutureReadyPrograms = "https://www.futurereadyiowa.gov/college-list"

  return (
      <div>
          <h2>Future Ready Iowa Last-Dollar Scholarship</h2>
          <p>Students who enroll in <a href={FutureReadyPrograms} target={_blank} rel={_noreferrer}>eligible high demand programs</a> at a community college/trade school can attend the school tuition free.
          Students must apply for federal/state aid and be Iowa residents. Both high school students and adult learners (age 20+) are eligible for this program.</p>

          <p>All the program details can be found <a href={FutureReadyIowaInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

      </div>
  )
}

function SimpsonPromise() {
    const SimpsonPromiseInfo = "https://simpson.edu/admission-aid/tuition-aid/simpson-promise"

    return (
        <div>
            <h2>Simpson College: Simpson Promise</h2>
            <p>Students with a household income under $60,000 can attend Simpson college tuition free.</p>

            <p>The program details can be found <a href={SimpsonPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default IowaPrograms;