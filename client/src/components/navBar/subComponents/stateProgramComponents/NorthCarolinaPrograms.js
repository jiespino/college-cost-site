import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function NorthCarolinaPrograms() {

  return (
      <div>
        <NCPromise/>
        <CarolinaCovenant/>
        <FixedTuition/>
        <LongleafCommitmentGrant/>
    </div>
  );
}

function NCPromise() {
    const NCPromiseInfo = "https://www.nccommunitycolleges.edu/student-services/north-carolina-longleaf-commitment-grant/"


    return (
        <div>
            <h2>North Carolina Promise</h2>
            <p>North Carolina students can attend Elizabeth City State University, the University of North Carolina at Pembroke, or Western Carolina University
               at a tuition cost of $500 per semester. For out-of-state students, tuition costs are $2,500 a semester.
            </p>

            <p>The program details can be found <a href={NCPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function CarolinaCovenant() {
    const CarolinaCovenantInfo = "https://studentaid.unc.edu/incoming/what-aid-is-available/carolina-covenant/"


    return (
        <div>
            <h2>University of North Carolina at Chapel Hill: Carolina Covenant</h2>
            <p>Students with an income at or below 200% of the federal poverty level can attend the University of North Carolina at Chapel Hill debt free.
               Students must be incoming first-year or transfer students.
            </p>

            <p>The program details/eligibility criteria can be found <a href={CarolinaCovenantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function FixedTuition() {
    const FixedTuitionInfo = "https://www.northcarolina.edu/impact/affordability-efficiency/fixed-tuition-program/"
    const UNCSystem = "https://www.northcarolina.edu/institutions/"


    return (
        <div>
            <h2>University of North Carolina System: Fixed Tuition Program</h2>
            <p>For students attending <a href={UNCSystem} target={_blank} rel={_noreferrer}>any of the University of North Carolina institutions</a>, those who continuously enroll will not see
                a tuition increase for the course of their four year degree program.
            </p>

            <p>The details can be found <a href={FixedTuitionInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


function LongleafCommitmentGrant() {
    const LongleafCommitmentGrantInfo = "https://www.cfnc.org/pay-for-college/apply-for-financial-aid/longleaf-commitment-grant/"


    return (
        <div>
            <h2>Longleaf Commitment Grant</h2>
            <p>This North Carolina program provides $700 - $2,800 per year for low income students to attend community college.
               Students must be North Carolina and have an <a href={EFCNeedInfo} target={_blank} rel={_noreferrer}>Expected Family Contribution
               </a> of $15,000 or less on their <a href={fafsaLink} target={_blank} rel={_noreferrer}>Free Application for Federal Aid (FAFSA)</a>
            </p>

            <p>The program details and eligibility requirements can be found <a href={LongleafCommitmentGrantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default NorthCarolinaPrograms;