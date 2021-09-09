import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function SouthCarolinaPrograms() {

  return (
      <div>
        <GamecockGuarantee/>
        <SpartanburgCC/>
        <SouthCarolinaGrants/>

    </div>
  );
}

function GamecockGuarantee() {
    const GamecockGuaranteeInfo = "https://sc.edu/about/offices_and_divisions/financial_aid/grants/gamecock_guarantee/index.php"


    return (
        <div>
            <h2>University of South Carolina: Gamecock Guarantee</h2>

            <p>This program awards $4,500 year to low income, first generation students at the University of South Carolina.
                You must be a South Carolina resident to qualify and have a household income not exceeding <a href={povertyGuidelines} target={_blank} rel={_noreferrer}>150% of the federal poverty level</a>.
            </p>

            <p>More details on the program can be found <a href={GamecockGuaranteeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function SpartanburgCC() {
    const SpartanburgCCInfo = "https://www.sccsc.edu/financial-aid/tuition/free.php"


    return (
        <div>
            <h2>Spartanburg Community College</h2>

            <p>This community college is offering tuition-covering scholarships to all college eligible students for the 2021-2022 school year.
               Students must be South Carolina residents or work full-time in South Carolina.
            </p>

            <p>The full program details are available <a href={SpartanburgCCInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function SouthCarolinaGrants() {
    const SouthCarolinaGrantsInfo = "http://www.collegescholarships.org/grants/states/south-carolina.htm"


    return (
        <div>
            <h2>South Carolina Grants</h2>

            <p>A list of South Carolina Grants can be found <a href={SouthCarolinaGrantsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}





export default SouthCarolinaPrograms;