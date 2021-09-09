import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function NebraskaPrograms() {

  return (
      <div>
        <NebraskaPromise/>
        <NebraskaStateCollegeGuarantee/>
        <AccessNWU/>
    </div>
  );
}

function NebraskaPromise() {
    const NebraskaPromiseInfo = "https://www.unomaha.edu/admissions/financial-support-and-scholarships/tools-and-resources/nebraska-promise.php"


    return (
        <div>
            <h2>University of Nebraska: Nebraska Promise</h2>
            <p>Students who have a household income under $60,000 are elibile to attend the University of Nebraska tuition free.
                Students must be Nebraska residents.
            </p>

            <p>Please review all program details <a href={NebraskaPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function NebraskaStateCollegeGuarantee() {
    const NebraskaStateCollegeGuaranteeInfo = "https://www.nscs.edu/information-for/students/financial-aid"
    const CSC = <a href="https://en.wikipedia.org/wiki/Chadron_State_College" target={_blank} rel={_noreferrer}>Chadron State College</a>
    const PSC = <a href="https://en.wikipedia.org/wiki/Peru_State_College" target={_blank} rel={_noreferrer}>Peru State College</a>
    const WSC = <a href="https://en.wikipedia.org/wiki/Wayne_State_College" target={_blank} rel={_noreferrer}>Wayne State College</a>


    return (
        <div>
            <h2>Nebraska State College Guarantee</h2>
            <p>Students who are <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> eligible can attend {CSC}, {PSC}, or {WSC} tuition free.
            Students must be Nebraska residents.
            </p>

            <p>The program page is <a href={NebraskaStateCollegeGuaranteeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function AccessNWU() {
    const AccessNWUInfo = "https://www.nebrwesleyan.edu/admissions/financial-aid-office/undergraduate-aid/fall-2021-first-year-scholarships/access-nwu"


    return (
        <div>
            <h2>Nebraska Wesleyan University: Access NWU Scholarship</h2>
            <p>Students who are <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> eligible can attend Nebraska Wesleyan University tuition free.
                Students must be Nebraska residents. As a rough guideline, students with a household income below $60,000 will likely be eligible.
            </p>

            <p>Please review all program details <a href={AccessNWUInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default NebraskaPrograms;