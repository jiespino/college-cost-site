import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"

function IllinoisPrograms() {
  return (

    <div>
        <IllinoisCommitment/>
        <ChancellorFellows/>
        <AimHigh/>
        <SalukiCommitment/>
    </div>
  );
}

function IllinoisCommitment() {
    const urbanaChampaignLink = "https://osfa.illinois.edu/illinois-commitment/"

    return (
        <div>
            <h2>University of Illinois Urbana Champaign: Illinois Commitment</h2>
            <p>The University of Illinois Urbana Champaign offers free tuition to low-income students who meet certain criteria. This program doesn't cover room and board.
                These are the criteria students must meet:</p>
            <ul>
                <li>You must be a U.S. citizen or eligible non-citizen (use link below for more details)</li>
                <li>You're an Illinois resident</li>
                <li>Your family income is under $67,100</li>
                <li>Your family's assets must be under $50,000</li>
                <li>You must be under the age of 24</li>
                <li>You must be a freshman or transfer student</li>
                <li>You attended or graduated from an Illinois high school</li>
                <li>You must enroll for at least 12 hours for fall or spring semesters</li>
            </ul>
            <p>The official site for the Illinois Commitment program is <a href={urbanaChampaignLink} target={_blank} rel={_noreferrer}> here</a>.</p>

        </div>
    )
}

function ChancellorFellows() {
    const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
    const UICChancellorLink = "https://admissions.uic.edu/chancellors-fellows-faq"
    const illResident = "https://admissions.uic.edu/undergraduate/tuition-financial-aid/residency"
    const stateRequirements = "https://www.isac.org/students/during-college/types-of-financial-aid/grants/aim-high.html#Eligibility"
    return (
        <div>
            <h2>University of Illinois at Chicago Chancellor's Fellows Program</h2>
            <p>The University of Illinois at Chicago (UIC) offers aid of up to $10,000 per year for low-income and high achieving students.
                Here are a the criteria students must meet (please use the link below to view all details):</p>
            <ul>
                <li>You must be <a href={illResident} target={_blank} rel={_noreferrer}>an Illinois resident</a></li>
                <li>You must meet <a href={stateRequirements} target={_blank} rel={_noreferrer}>additional State Requirements</a></li>
                <li>You must be a graduating 2021 senior from an Illinois High school and
                    <ul>
                        <li>Rank 1st in your graduating class <b>OR</b> qualify for either of the two options below</li>
                        <ul>
                            <li>Have an unweighted GPA of 3.8+ and have a ACT score of 33+ or SAT score of 1450+ <b>OR</b></li>
                            <li>Have an unweighted GPA of 3.8+ and have a total of 10 Honors, AP, or IC classes in 11th/12th grade in core subject areas (math, science, English/language arts, social sciences/humanities, foreign languages)</li>
                        </ul>
                    </ul>
                </li>
                <li>You must complete your application to UIC by Dec. 1, 2021</li>
                <li>Your family income must not exceed <a href={povertyGuidelines} target={_blank} rel={_noreferrer}>6 times the federal poverity level</a></li>
            </ul>

            <p>The official site for the Chancellor's Fellows program is <a href={UICChancellorLink} target={_blank} rel={_noreferrer}> here</a>.</p>
        </div>
    )
}

function AimHigh() {
    
    const EIUAimHighLink = "https://www.eiu.edu/aimhigh/"
    const EIUAimHighDetailsFAQLink = "https://www.eiu.edu/scholarships/eiu-promise.php"
    const illOtherProgramsLink = "https://thecollegeinvestor.com/student-loan-financial-aid-by-state/illinois/"

    return (
        <div>
            <h2>Eastern Illinois University Aim High Program</h2>
            <p>Eastern Illinois University (EIU) offers free tuition for low income students.
                Here are a the criteria students must meet (please use the link below to view all details):</p>
            <ul>
                <li>You must be a current high school student and an Illinois resident</li>
                <li>Your family income must be at or under $63,575</li>
                <li>You must have at least a 3.0 GPA (4.0 scale) in high school</li>
                <li>You must have your EIU financial aid completed by April 1st</li>
                <li>You must meet <a href={EIUAimHighDetailsFAQLink} target={_blank} rel={_noreferrer}>all other Aim High requirements</a></li>
            </ul>

            <p>The official site for the EIU Aim High program is here <a href={EIUAimHighLink} target={_blank} rel={_noreferrer}> here</a>.</p>

            <p>Other Illinois student programs can be found <a href={illOtherProgramsLink} target={_blank} rel={_noreferrer}>here</a>.</p>
        </div>
    )
}

function SalukiCommitment() {
    
    const SalukiCommitmentInfo = "https://fao.siu.edu/types/saluki-commitment.php"

    return (
        <div>
            <h2>Southern Illinois University: Saluki Commitment</h2>
            <p>Southern Illinois University (SIU) offers free tuition for lower income students.
                Here are a the criteria students must meet (please use the link below to view all details):</p>
            <ul>
                <li>You must be a current high school student and an Illinois resident</li>
                <li>Your family income must be at or under $63,575 and your family assets must be under $50,000</li>
                <li>You must have at least a 2.75 GPA (4.0 scale) in high school</li>
                <li>You must be a dependent student under age 24</li>
            </ul>

            <p>The official site for the Saluki Commitment is <a href={SalukiCommitmentInfo} target={_blank} rel={_noreferrer}> here</a>.</p>
        </div>
    )
}

export default IllinoisPrograms;
