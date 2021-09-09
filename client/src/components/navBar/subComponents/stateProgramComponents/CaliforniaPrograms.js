import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function CaliforniaPrograms() {

  return (
      <div>
        <UCBlueAndGoldOpportunityPlan/>
        <USCAffordabilityInitiative/>
        <CaliforniaPromiseGrant/>
    </div>
  );
}

function UCBlueAndGoldOpportunityPlan() {
    const UCBlueAndGoldOpportunityPlanInfo = "https://admission.universityofcalifornia.edu/tuition-financial-aid/types-of-aid/blue-and-gold-opportunity-plan.html"
    return (
        <div>
            <h2>University of California System: Blue and Gold Opportunity Plan</h2>
            <p>This program allows students with a household income under $80,000 to attend any University of California campus tuition free.
                Students must be California residents.
            </p>
            <p>The official program page is <a href={UCBlueAndGoldOpportunityPlanInfo} target={_blank} rel={_noreferrer}>here</a></p>

        </div>
    )
}

function USCAffordabilityInitiative() {
    const USCAffordabilityInitiativeInfo = "https://affordability.usc.edu/"
    const typicalAssetsInfo = "https://ask.usc.edu/app/answers/detail/a_id/892/~/my-family-makes-less-than-%2480%2C000-per-year.-do-i-qualify-for-free-tuition%3F"
    return (
        <div>
            <h2>University of Southern California: Affordability Initiative</h2>
            <p>This program allows students with a household income under $80,000 and typical assets to attend USC tuition free.
                "Typical assets" is <a href={typicalAssetsInfo} target={_blank} rel={_noreferrer}>not defined concretely</a>, so please contact the university's
                financial aid office if you are concerned you may not qualify.
            </p>
            <p>The official program page is <a href={USCAffordabilityInitiativeInfo} target={_blank} rel={_noreferrer}>here</a></p>

        </div>
    )
}



function CaliforniaPromiseGrant() {
    const CaliforniaPromiseGrantPage = "https://www.cccapply.org/en/money/california-college-promise-grant"
    const CaliforniaPromiseGrantInfo = "https://www.canyons.edu/studentservices/financialaid/types/bogw.php"
    return (
        <div>
            <h2>California Promise Grant</h2>
            <p>This program allows low-income California students to attend community college tuition free.
                There are several requirements and different methods of qualifying-- please view the links below for all the program details.
            </p>
            <p>The eligibility requirements for the program are <a href={CaliforniaPromiseGrantInfo} target={_blank} rel={_noreferrer}>here</a>.
            The official program page is <a href={CaliforniaPromiseGrantPage} target={_blank} rel={_noreferrer}>here</a></p>

        </div>
    )
}


export default CaliforniaPrograms;