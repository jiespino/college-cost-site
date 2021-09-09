import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function WashingtonPrograms() {

  return (
      <div>
        <WACollegeGrant/>
        <SeattlePromise/>
        <HuskyPromise/>
        <CougarCommitment/>

    </div>
  );
}

function WACollegeGrant() {
    const WACollegeGrantInfo = "https://wsac.wa.gov/wcg"
    const WAGrantEligibleColleges = "https://wsac.wa.gov/sfa-institutions"
    const WAGrantCalculator = "https://portal.wsac.wa.gov/a/aid-calculator/"

    return (
        <div>
            <h2>Washington College Grant</h2>
            <p>This Washington program covers tuition and fees for low-income students <a href={WAGrantEligibleColleges} target={_blank} rel={_noreferrer}>at select in-state colleges/universities</a>.
                Here are the eligibility criteria:
            </p>
            <li>Be a Washington Resident</li>
            <li>Have a low-to-middle household income. For example a student from a family of four with a household income less than $56,000 would receive the full grant amount (full tuition coverage).
                People with higher incomes than this can still be eligible but the reward amounts are lower. You can estimate your aid <a href={WAGrantCalculator} target={_blank} rel={_noreferrer}>here</a>.
            </li>

            <p>To review all details please look at the program <a href={WACollegeGrantInfo} target={_blank} rel={_noreferrer}>page</a>.</p>

        </div>
    )
}

function SeattlePromise() {
    const SeattlePromiseInfo = "https://www.seattlecolleges.edu/promise/about"
    const NorthSeattle = "https://northseattle.edu/"
    const CentralSeattle = "https://seattlecentral.edu/"
    const SouthSeattle = "https://southseattle.edu/"
 

    return (
        <div>
            <h2>Seattle High School Graduates: Seattle Promise</h2>
            <p>This program can cover tuition and fees (up to 90 credits) at a Seattle community college. 
                Only Seattle public high school graduates are eligible, but there is no income or GPA requirement.

                A student can attend either <a href={NorthSeattle} target={_blank} rel={_noreferrer}>North</a>
                , <a href={SouthSeattle} target={_blank} rel={_noreferrer}>South</a>
                , or <a href={CentralSeattle} target={_blank} rel={_noreferrer}>Central</a> Seattle College.
            </p>

            <p>To review all details please look at the program <a href={SeattlePromiseInfo} target={_blank} rel={_noreferrer}>page</a>.</p>

        </div>
    )
}


function HuskyPromise() {
    const HuskyPromiseInfo = "https://www.washington.edu/huskypromise/"
    const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

    return (
        <div>
            <h2>University of Washington Campuses: Husky Promise</h2>
            <p>This Washington program covers tuition and fees for low-income students (those eligible for <a href={PellGrant} target={_blank} rel={_noreferrer}>a Pell Grant</a>). 
            Three University of Washington campuses (Bothell, Seattle, and Tacoma) are covered under this program.
            </p>

            <p>Please review the program <a href={HuskyPromiseInfo} target={_blank} rel={_noreferrer}>page</a> for all the program details.</p>

        </div>
    )
}

function CougarCommitment() {
    const CougarCommitmentInfo = "https://admission.wsu.edu/scholarships/scholarship-awards/cougar-commitment/"

    return (
        <div>
            <h2>Washington State University: Cougar Commitment</h2>
            <p>This program covers tuition costs for low-income students that are residents of Washington. 
                For example a student from a family of four with a household income of less than $46,000 would be eligible for tuition coverage under this program.
            </p>

            <p>Please review the program <a href={CougarCommitmentInfo} target={_blank} rel={_noreferrer}>page</a> for all the program details.</p>

        </div>
    )
}



export default WashingtonPrograms;