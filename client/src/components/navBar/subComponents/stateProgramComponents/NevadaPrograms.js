import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function NevadaPrograms() {

  return (
      <div>
        <NevadaPromiseScholarship/>
        <NevadaGuarantee/>
        <UNLVTuitionAward/>
    </div>
  );
}

function NevadaPromiseScholarship() {
    const NevadaPromiseScholarshipInfo = "https://www.leg.state.nv.us/App/NELIS/REL/80th2019/ExhibitDocument/OpenExhibitDocument?exhibitId=44457&fileDownloadName=0227_Nevada%20Promise%20Scholarship.pdf"


    return (
        <div>
            <h2>Nevada Promise Scholarship</h2>
            <p>Students who are Nevada residents and under 20 years old are eligible to attend community college for 3 years tuition free.
            </p>

            <p>Please review all the eligibility requirements <a href={NevadaPromiseScholarshipInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function NevadaGuarantee() {
    const NevadaGuaranteeInfo = "https://www.unr.edu/nevada-guarantee"


    return (
        <div>
            <h2>University of Nevada at Reno: The Nevada Guarantee</h2>
            <p>Students with a household income of less than $50,000 are eligible to attend the University of Nevada at Reno tuition free.
                Students also must be Nevada residents and full-time students.
            </p>

            <p>The program details can be found <a href={NevadaGuaranteeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function UNLVTuitionAward() {
    const UNLVTuitionAwardInfo = "https://www.unlv.edu/finaid/scholarships-grants/tuitionplus"


    return (
        <div>
            <h2>University of Nevada at Las Vegas: Tuition+ Program</h2>
            <p>Students that are <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> eligible can attend
               the University of Nevada at Las Vegas at a substantially reduced tuition cost (the award covers 12 credit hours of tuition per semester). Students also
               receive $1,000 for books each year. Students must be Nevada residents.
            </p>

            <p>The program details can be found <a href={UNLVTuitionAwardInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default NevadaPrograms;