import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function NewYorkPrograms() {

  return (
      <div>
        <ExcelsiorScholarship/>
    </div>
  );
}

function ExcelsiorScholarship() {
    const ExcelsiorScholarshipInfo = "https://www.ny.gov/programs/tuition-free-degree-program-excelsior-scholarship"


    return (
        <div>
            <h2>Excelsior Scholarship</h2>
            <p>New York students with a household income at or below $125,000 are eligible to attend any State University of New York (SUNY)
                or City University of New York (CUNY) college at no tuition cost.
            </p>

            <p>Students must be New York residents, take 30 credit hours of college courses per year, and live in New York for the duration of their college studies under this program..
                The program details/application information can be found <a href={ExcelsiorScholarshipInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default NewYorkPrograms;