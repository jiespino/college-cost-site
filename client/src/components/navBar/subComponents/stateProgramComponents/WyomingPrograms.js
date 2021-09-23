import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"

function WyomingPrograms() {

  return (
      <div>
        <CowboyCommitment/>
        <WyomingWorks/>
        <WyomingGrants/>

    </div>
  );
}

function CowboyCommitment() {
    const CowboyCommitInfo = "https://www.uwyo.edu/admissions/scholarships/residents/cowboycommitment.html"
    return (
        <div>
            <h2>University of Wyoming: Cowboy Commitment (merit based)</h2>
            <p>This program provides aid to student based on their college aptitude test scores and high school GPA.
               The reward can be as low as $500 per year and as high as $6,500 per year for qualifying students.
               Please view the program information <a href={CowboyCommitInfo} target={_blank} rel={_noreferrer}>here</a> for
               qualifying criteria and cutoffs for the different grant amounts.
            </p>
      </div>
    );
}

function WyomingWorks() {
    const WyomingWorksInfo = "https://2ky701279qlou23p6256zftv-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/2019-1009-WyomingWorks-2.pdf"
    return (
        <div>
            <h2>Wyoming Works (not for high school students)</h2>
            <p>Wyoming Works is a state need-based grant program for adult students at a Wyoming community college.
               The award amount depends on student financial need. There are two tiers of grants, the Standard Grant awards up to $1,680 per year, and the
               Critical Grant awards up to $3,360 per year. The eligible programs and participating Wyoming community colleges are listed in the link below.
            </p>
          <ul>
              <li>Must complete the FAFSA (Free Application for Federal Student Aid) form, showing financial need</li>
              <li>Must be a US citizen or a permanent US resident who meets the definition of an eligible noncitizen under federal financial aid requirements</li>
              <li>Must be a Wyoming resident</li>
              <li>As required, must be registered with the selective service</li>
              <li>Must maintain satisfactory academic progress</li>
              <li>Must be a new program participant starting Fall 2019 or later</li>
              <li>Must maintain continuous enrollment in an eligible program</li>
              <li>A student may be eligible for this grant for no more than six semesters</li>
              <li>Must not be enrolled in high school</li>
          </ul>
            <p>For the official program link, please look <a href={WyomingWorksInfo} target={_blank} rel={_noreferrer}>here</a>.</p>
      </div>
    );
}

function WyomingGrants() {
  const WyomingGrantInfo = "http://www.collegescholarships.org/grants/states/wyoming.htm"
  return (
      <div>
        <h2>Wyoming Student Grants</h2>
        A list of Wyoming student grants can be found <a href={WyomingGrantInfo} target={_blank} rel={_noreferrer}>here</a>.
    </div>
  );
}


export default WyomingPrograms;
