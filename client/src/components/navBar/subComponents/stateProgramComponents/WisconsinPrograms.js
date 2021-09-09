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
        <WIBuckyTuitionPromise/>
        <WIBadgerPromise/>
        <LakeLandPromise/>
        <MTACPromise/>
        <WIBanner/>
    
    </div>
  );
}

function WIBuckyTuitionPromise() {
    const WIBuckyProgramInfo = "https://financialaid.wisc.edu/types-of-aid/tuition-promise/"
    return (
        <div>
            <h2>University of Wisconsin Madison: Bucky Tuition Promise</h2>
            <p>The University of Wisconsin offers free tuition to low-income students.
               Incoming freshment will receive 8 consecutive semesters of free tuition and transfer students will receive four semesters of free tuition.
               These are the eligibility criteria:
            </p>
            <ul>
                <li>Have a household <a href={AGIDef} target={_blank} rel={_noreferrer}>adjusted gross income</a> of $60,000 or less</li>
                <li>Be a Wisconsin resident</li>
            </ul>
            <p>Please review the program <a href={WIBuckyProgramInfo} target={_blank} rel={_noreferrer}>page</a> for more information.</p>
        </div>
    )
}

function WIBadgerPromise() {
    const WIBadgerPromiseInfo = "https://financialaid.wisc.edu/types-of-aid/badger-promise/"
    return (
        <div>
            <h2>University of Wisconsin Madison: Badger Promise</h2>
            <p>The University of Wisconsin offers free tuition to first-generation Wisconsin residents who transfer into UW Madison from
                a qualifying 2 year college. Students will receive free tuition for up to 2 years. These are the eligibility criteria:
            </p>
            <ul>
                <li>Be a Wisconsin resident</li>
                <li>Have parents who did not graduate from a 4 year university</li>
                <li>Transfer from a 2 year college that is eligibe for this program</li>
            </ul>
            <p>The program <a href={WIBadgerPromiseInfo} target={_blank} rel={_noreferrer}>page</a> has the list of eligible 2 year colleges for this program.</p>
        </div>
    )
}

function LakeLandPromise() {
    const LakelandPromiseInfo = "https://lakeland.edu/traditional-undergraduate-financial-aid/lakeland-promise"
    return (
        <div>
            <h2>Lakeland University: Lakeland Promise</h2>
            <p>Lakeland University offers this free tuition program to low-income students. Qualifying students have their tuition covered by grants/scholarship programs:
            </p>
            <ul>
                <li>For dependent students, have a household income less than $40,000 and for independent students have an income less than $15,000</li>
                <li>Be a Wisconsin resident</li>
                <li>Be enrolled in Lakeland's undergraduate program</li>
                <li>Have a minimum GPA of 2.75. Applies to students both entering from high school or transferring from a community college</li>
            </ul>
            <p>Please review the program <a href={LakelandPromiseInfo} target={_blank} rel={_noreferrer}>page</a> for all the program details.</p>
        </div>
    )
}

function MTACPromise() {
    const MTACPromiseInfo = "https://www.matc.edu/promise/high-school.html"
    const MTACDistrictInfo = "https://en.wikipedia.org/wiki/Milwaukee_Area_Technical_College"
    return (
        <div>
            <h2>Milwaukee Area Technical College: MTAC Promise</h2>
            <p>Milwaukee Area Technical College offers this free tuition program to low-income students who live in the <a href={MTACDistrictInfo} target={_blank} rel={_noreferrer}>MTAC District</a>. Qualifying students can have up to 75 credits of free tuiton:
            </p>
            <ul>
                <li>Graduate as part of the 2022 class from a high school in the MATC district or live in the MATC District.</li>
                <li>Be eligible for a Federal Pell Grant</li>
                <li>Be a Wisconsin resident</li>
                <li>Have a minimum GPA of 2.0</li>
            </ul>
            <p>Please review the program <a href={MTACPromiseInfo} target={_blank} rel={_noreferrer}>page</a> for all the program details.</p>
        </div>
    )
}

function WIBanner() {
    const WIBannerInfo = "https://financialaid.wisc.edu/types-of-aid/banner/"
    const firstWaveInfo = "https://omai.wisc.edu/first-wave-scholarship-program/"
    const POSSEInfo = "https://www.possefoundation.org/"
    const ChicagoScholarsInfo = "https://chicagoscholars.org/"
    return (
        <div>
            <h2>University of Wisconsin Madison: Badger Aid for Nonresidents</h2>
            <p>The University of Wisconsin offers aid to low-income students who are either in specific diversity programs are meet other very specific criteria.
               Incoming freshment will receive 8 consecutive semesters of free tuition and transfer students will receive four semesters of free tuition.
               These are the eligibility criteria:
            </p>
            <ul>
                <li>Students in <a href={firstWaveInfo} target={_blank} rel={_noreferrer}>First Wave</a>, <a href={POSSEInfo} target={_blank} rel={_noreferrer}>POSSE</a>, or <a href={ChicagoScholarsInfo} target={_blank} rel={_noreferrer}>Chicago Scholars</a></li>
                <li>Minnesota students whose family receives public assistance</li>
                <li>Nonresident students that are either homeless or a ward of the court</li>
            </ul>
            <p>Please review the program <a href={WIBannerInfo} target={_blank} rel={_noreferrer}>page</a> for more information.</p>
        </div>
    )
}

export default WisconsinPrograms;