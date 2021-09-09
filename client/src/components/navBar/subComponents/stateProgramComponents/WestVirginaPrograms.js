import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function WisconsinPrograms() {

  return (
      <div>
        <WVInvests/>
        <WVGrants/>

    </div>
  );
}

function WVInvests() {
    const WVInvestsInfo = "https://www.collegeforwv.com/programs/invest-grant/how-it-works/"
    const WVColleges = "https://www.collegeforwv.com/programs/invest-grant/find-a-college/"
    return (
        <div>
            <h2>West Virginia Invests</h2>
            <p>West Virginia Invests is a state funded program pays student tuition/fees for select community colleges and 4 year universities in the state.
                The colleges covered under this program are <a href={WVColleges} target={_blank} rel={_noreferrer}>here</a>,
                and the qualifying criteria are listed below:
            </p>
            <ul>
                <li>Be a West Virginia Resident 1 year before applying</li>
                <li>Are willing to make a commitment to improving the state by living in West Virginia for at least two years after graduation or 
                    dropping below part-time enrollment and completing at least 2 hours of unpaid community service each academic term.</li>
                <li>Pay for and take a drug screening during the 60 days before the start of the first term you are enrolled and eligible for an award in each academic year. 
                    Depending on results, you may be required to take another drug screening during the academic year and/or complete other requirements to continue eligiblity. 
                    Review full details of this requirement by visiting the Drug Screening page</li>
                <li>Be a U.S. citizen or eligible non-citizen for federal financial aid</li>
                <li>Are a graduate of a public, private or homeschool program, or have successfully passed a high school equivalency test</li>
                <li>Have not already earned a college degree (associate level or higher) or have attempted 90 or more college credit hours</li>
                <li>Be in compliance with the college’s Satisfactory Academic Progress policy; for renewal you must also have a 2.0 cumulative grade point average</li>
                <li>Have completed the <a href={fafsaLink} target={_blank} rel={_noreferrer}>Free Application for Federal Student Aid (FAFSA)</a></li>
                <li>Not be in default on a federal student loan</li>
                <li>Meet the minimum admissions requirements at and eligible institution and register for at least 6 credit hours; and</li>
            </ul>
            <p>Please review the program <a href={WVInvestsInfo} target={_blank} rel={_noreferrer}>page</a> for more information.</p>
        </div>
    )
}

function WVGrants() {
    const WVGrantsInfo = "http://www.collegescholarships.org/grants/states/west-virginia.htm"
    return (
        <div>
            <h2>Other West Virginia Grants</h2>
            <p>Please review West Virginia grants <a href={WVGrantsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>
        </div>
    )
}

export default WisconsinPrograms;