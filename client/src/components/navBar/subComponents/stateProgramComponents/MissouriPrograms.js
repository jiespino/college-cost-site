import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function MissouriPrograms() {

  return (
      <div>
        <WashUPledge/>
        <MissouriLandGrant/>
        <AccessMissouri/>
    </div>
  );
}

function WashUPledge() {
    const WashUPledgeInfo = "https://admissions.wustl.edu/cost-aid/affordability/"


    return (
        <div>
            <h2>University of Washing at St. Louis: WashU Pledge</h2>
            <p>Students who have a household income at or below $75,000 are eligible to attend the University of Washing at St. Louis with their tuition and room/board covered.
                Students can be reside in Missouri or reside in one of 53 counties in Illinois to be eligible.
            </p>

            <p>Please review all the program details <a href={WashUPledgeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function MissouriLandGrant() {
    const MissouriLandGrantInfo = "https://financialaid.missouri.edu/types-of-aid/grants/missouri-land-grants.php"


    return (
        <div>
            <h2>Missouri Land Grant</h2>
            <p>Missouri students who are eligible for a <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> can attend the University of Missouri tuition free.
            Students must be Missouri residents.
            </p>

            <p>Please review all the program details <a href={MissouriLandGrantInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function AccessMissouri() {
    const AccessMissouriInfo = "https://dhewd.mo.gov/ppc/grants/accessmo.php"


    return (
        <div>
            <h2>Access Missouri Financial Assistance Program</h2>
            <p>Missouri students who have a high financial need are eligible for a state grant to attend college.
                For 2 year colleges, the award ranges from $300 - $1,300 annually and for 4 year colleges, the award ranges from $1,500 - $2,800 annually.
            </p>

            <p>Please review all the program details <a href={AccessMissouriInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default MissouriPrograms;