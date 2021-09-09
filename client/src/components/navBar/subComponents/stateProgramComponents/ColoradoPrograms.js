import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"



function ColoradoPrograms() {



  return (
    <div>
        <StudentShareTuitionDef/>
        <CUPromiseBoulder/>
        <CUPromiseDenver/>
        <CSUTuitionAssistance/>
    </div>
  );
}

function StudentShareTuitionDef() {

    return (
    <div>
        <p>The "student's share of tuition" is a commonly used phrase in the programs below. Some of the programs below are said to cover the "student's share of tuition". Here is a definition:</p>
        <p>The student share of tuition = total tuition cost - the amount the student is expected to be able to contribute.</p>
        <p>For example if the tuiton cost for a university is $12,000/year and the expected amount a student should be able to contribute is $3,000/year,
        then the student share of tuition is $9,000/year and the program will award you this amount per year.</p>
    </div>
    )
}

function CUPromiseBoulder() {
    const CUPromiseFAQs = "https://www.colorado.edu/financialaid/cu-promise/cu-promise-frequently-asked-questions"
    const CUPromiseInfo = "https://www.colorado.edu/financialaid/types-aid/cupromise"

    return (
    <div>
      <h2>University of Colorado Boulder: CU Promise</h2>
      <p>This program at CU Boulder helps low-income students pay their tuition/fees. For qualifying students, it will pay the student share of tuition.
          Please visit this <a href={CUPromiseFAQs} target={_blank} rel={_noreferrer}>page</a> to view answers to FAQs for the program.
          These are the eligibility requirements:
      </p>

      <ul>
          <li>Colorado resident</li>
          <li>U.S. Citizen or eligible non-citizen</li>
          <li>Federal Pell Grant eligible</li>
          <li>Demonstrated financial need (determined through FAFSA/ASSET Financial Aid Application & additional information requested by their office)</li>
          <li>First-time freshman or a new student transferring from any CU campus or Colorado community college</li>
          <li>Admitted into an undergraduate degree program</li>
          <li>Working on first bachelor's degree</li>
          <li>Enrolled full time (12 hours per semester) on the Boulder campus</li>
      </ul>

      <p>Here is the official program <a href={CUPromiseInfo} target={_blank} rel={_noreferrer}>page</a>.</p>
    </div>
    )
}

function CUPromiseDenver() {
    const CUPromiseDenverInfo = "https://www.colorado.edu/financialaid/types-aid/cupromise"

    return (
    <div>
      <h2>University of Colorado Denver: CU Promise</h2>
      <p>This program at CU Denver helps low-income students pay their tuition/fees.
          If a student qualifies, it will cover their share of tuition costs.
          Please visit the official page <a href={CUPromiseDenverInfo} target={_blank} rel={_noreferrer}>link</a> for more information.
          These are the eligibility requirements:
      </p>

      <ul>
          <li>Have a family income <a href={povertyGuidelines} target={_blank} rel={_noreferrer}>at or below 100% of the federally-established poverty level</a></li>
          <li>Colorado resident</li>
          <li>Begin attendance as a first-time freshman or new transfer student from a Colorado community college</li>
          <li>Complete their financial aid application process, including the <a href={fafsaLink}>Free Application for Federal Student Aid (FAFSA)</a> by April 1</li>
          <li>Be eligible to receive a Federal Pell Grant award</li>
          <li>Be enrolled each term for 12 credit hours or more</li>
      </ul>

      <p>Here is the official program <a href={CUPromiseDenverInfo} target={_blank} rel={_noreferrer}>page</a>.</p>
    </div>
    )
}

function CSUTuitionAssistance() {
    const CSUTuitionAssistanceInfo = "https://financialaid.colostate.edu/csu-tag/"

    return (
    <div>
      <h2>Colorado State University Tuition Assistance Grant</h2>
      <p>This program at Colorado State University helps low-income students pay their tuition/fees.
          It can cover anywhere from 50 - 100% of a student's share of tuition.
          These are the eligibility requirements:
      </p>

      <ul>
          <li>Demonstrate financial need via the CSU institutional aid application (one time application)</li>
          <ul>
              <li>If your parents are divorced, separated, or never married, the parent not included on your FAFSA may be required to complete the Noncustodial Parent Aid Application</li>
          </ul>
          <li>Be a Colorado resident for tuition classification purposes</li>
          <li>Be enrolled through the CSU Main Campus (excludes students admitted to online programs) pursuing their first bachelor’s degree</li>
          <li>Complete their financial aid application process, including the <a href={fafsaLink}>Free Application for Federal Student Aid (FAFSA)</a> by:</li>
          <ul>
              <li>September 9th for students enrolling fall (fall/spring)</li>
              <li>February 3rd for students entering in the spring semester</li>
          </ul>
      </ul>

      <p>Here is the official program <a href={CSUTuitionAssistanceInfo} target={_blank} rel={_noreferrer}>page</a>.</p>
    </div>
    )
}

export default ColoradoPrograms;
