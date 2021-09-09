import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function NewJerseyPrograms() {

  return (
      <div>
        <CommunityCollegeOpportunityGrant/>
        <StocktonPromise/>
        <ScarletPromiseGrants/>
        <DebtFreePromiseProgram/>
        <GatewayTuitionProgram/>
    </div>
  );
}

function CommunityCollegeOpportunityGrant() {
    const CommunityCollegeOpportunityGrantInfo = "https://www.hesaa.org/pages/ccog.aspx"


    return (
        <div>
            <h2>Community College Opportunity Grant</h2>
            <p>Students with a household income under $65,000 a year are eligible to attend a New Jersey community college tuition free.
            </p>

            <p>The program details can be found <a href={CommunityCollegeOpportunityGrantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function StocktonPromise() {
    const StocktonPromise = "https://stockton.edu/admissions/promise.html"


    return (
        <div>
            <h2>Stockton Promise</h2>
            <p>Students with a household income under $65,000 a year and an <a href={EFCNeedInfo} target={_blank} rel={_noreferrer}>Expected Family Contribution</a> of $15,000 or less 
                are eligible to attend Stockton University tuition free.
            </p>

            <p>The program details can be found <a href={StocktonPromise} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function ScarletPromiseGrants() {
    const ScarlettPromiseGrantsInfo = "https://support.rutgers.edu/explore-causes/scholarships-student-support/scarlet-promise-grants/"


    return (
        <div>
            <h2>Rutgers University: Scarlet Promise Grants</h2>
            <p>Students with a household income under $60,000 a year and an <a href={EFCNeedInfo} target={_blank} rel={_noreferrer}>Expected Family Contribution</a> of $10,000 or less 
                are eligible to receive these grants to attend Rutgers University.
                The award ranges from $500 - $5,000 per academic year.
            </p>

            <p>The program details can be found <a href={ScarlettPromiseGrantsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


function DebtFreePromiseProgram() {
    const DebtFreePromiseProgramInfo = "https://www.njcu.edu/admissions-aid/undergraduate-admissions/debt-free-promise-program"


    return (
        <div>
            <h2>New Jersey City University: Debt-Free Promise Program</h2>
            <p>Students with a household income under $65,000 that attend New Jersey City University full-time are offered a scholarship to cover tuition/fees.
            </p>

            <p>The program details can be found <a href={DebtFreePromiseProgramInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function GatewayTuitionProgram() {
    const GatewayTuitionProgramInfo = "https://www.saintpeters.edu/gateway/"


    return (
        <div>
            <h2>Saint Peter's University: Gateway Tuition Program</h2>
            <p>Students with with an <a href={EFCNeedInfo} target={_blank} rel={_noreferrer}>Expected Family Contribution</a> of $5,846 or less 
                are eligible to attend Saint Peter's University tuition free.
            </p>

            <p>The program details can be found here <a href={GatewayTuitionProgramInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default NewJerseyPrograms;