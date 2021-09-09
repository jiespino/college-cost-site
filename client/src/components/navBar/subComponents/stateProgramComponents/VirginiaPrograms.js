import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function VirginiaPrograms() {

  return (
      <div>
        <G3Program/>
        <VirginiaGrants/>

    </div>
  );
}

function G3Program() {
    const G3ProgramInfo = "https://www.vccs.edu/wp-content/uploads/2021/07/G3FAQ-July12021.pdf"

    return (
        <div>
            <h2>G3 Program</h2>
            <p>This program covers community college tuition costs for Virginia residents who are below a certain income threshold. For example, a student from a family of four
                with a household income less than $100,000 would be covered under this program. These programs are eligible for coverage:
                Early Childhood Education, Healthcare, Information Technology, Public Safety and Skilled Trades.
            </p>

            <p>To review all details please look at the program <a href={G3ProgramInfo} target={_blank} rel={_noreferrer}>FAQs</a>.</p>

        </div>
    )
}

function VirginiaGrants() {
    const VirginiaGrantsInfo = "http://www.collegescholarships.org/grants/states/virginia.htm"

    return (
        <div>
            <h2>Virginia Grants</h2>

            <p>A list of Virginia grants can be found <a href={VirginiaGrantsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default VirginiaPrograms;