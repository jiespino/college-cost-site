import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const ALStudentAid = "https://ache.edu/ACHE_Reports/Forms/Grants/AL-Financial-Aid-Prog.pdf"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"

function ConnecticutPrograms() {

  return (
    <PACT/>
  );
}

function PACT() {
    const PACTInfo = "https://www.ct.edu/pact"
    return (
        <div>
        <h2>Pledge to Advance Connecticut</h2>
        <p>This program allows Connecticut (CT) students to attend community colleges without needing to pay for tuition/fees.
          Here are the eligibility criteria:
        </p>
        <ul>
            <li>Be a CT High School Graduate, GED and home schooled students qualify</li>
            <li>Be a first-time college student</li>
            <li>Complete the <a href={fafsaLink} target={_blank} rel={_noreferrer}>Free Application for Federal Student Aid (FAFSA)</a>, which is used to package federal, state and often institutional aid and accept all awards</li>
            <li>Attend community college full-time (12+ credits/semester)</li>
            <li>Participate in a degree or credit-bearing certificate program</li>
            <li>Once Enrolled, remain in good academic standing</li>
        </ul>
        <p>The official program page is <a href={PACTInfo} target={_blank} rel={_noreferrer}> here</a></p>
      </div>
    )
}

export default ConnecticutPrograms;
