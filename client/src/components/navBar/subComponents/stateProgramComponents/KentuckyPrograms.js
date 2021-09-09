import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function KentuckyPrograms() {

  return (
      <div>
        <WorkReady/>
        <BereaCollege/>
        <AliceLloydCollege/>
    </div>
  );
}

function WorkReady() {
    const WorkReadyInfo = "https://www.kheaa.com/website/kheaa/work_ready?main=1"
    const WorkApprovedPrograms = "https://www.kheaa.com/pdf/wrks_approved_programs.pdf"

    return (
        <div>
            <h2>Work Ready Kentucky Scholarship Program</h2>
            <p>Students in Kentucky can attend communitiy college tuition free.
                Students must be Kentucky residents and enroll in an <a href={WorkApprovedPrograms} target={_blank} rel={_noreferrer}>approved program of study</a> at an approved college.
                Also students must not have already completed an associates's/higher degree beforehand.
            </p>
            <p>To see all the program details, please look <a href={WorkReadyInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


function BereaCollege() {
    const BereaCollegeInfo = "https://www.berea.edu/admissions/no-tuition/"

    return (
        <div>
            <h2>Berea College</h2>
            <p>Students accepted at Berea College do not pay tuition. The college awards each student $1,000 that can go towards their housing, meals, or books.
            </p>
            <p>To see all the program details, please look <a href={BereaCollegeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function AliceLloydCollege() {
    const AliceLloydCollegeInfo = "https://www.alc.edu/admissions/financial-aid/appalachian-leaders-college-scholarship/"
    const AliceWorkProgram = "https://www.alc.edu/admissions/financial-aid/student-work-program/"

    return (
        <div>
            <h2>Alice Lloyd College</h2>
            <p>Students accepted at Alice Lloyd College do not pay tuition, however the college does have a required <a href={AliceWorkProgram} target={_blank} rel={_noreferrer}>work program</a> for students.
                The program requires students work a minimum of 10 hours per week at an on-campus or off-campus job.
            </p>
            <p>To see all the program details, please look <a href={AliceLloydCollegeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default KentuckyPrograms;