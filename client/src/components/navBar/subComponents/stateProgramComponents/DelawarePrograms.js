import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const ALStudentAid = "https://ache.edu/ACHE_Reports/Forms/Grants/AL-Financial-Aid-Prog.pdf"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"

function DelawarePrograms() {

  return (
      <div>
        <DENursingIncentiveProgram/>
        <DETeacherCorps/>
        <DEHealthProfLoanRepay/>
    </div>
  );
}

function DENursingIncentiveProgram() {
    const DENursingIncentiveInfo = "https://www.doe.k12.de.us/Page/1050"
    return (
      <div>
            <h2>Delaware Nursing Incentive Program</h2>
            <p>This program is open to undergraduate students enrolled full time in accredited program leading to certification as a licensed RN or LPN.
                Eligible students will receive a loan amount of up to $5,000 per year (not exceeding tuition/fee costs). This loan is renewable for up to three years.
                That loan will be eligible for forgiveness following graduation at a rate of one years employment in a state hospital for one year of loan moneys received.
                These are the criteria:</p>
            <ul>
                <li>Legal residents of Delaware</li>
                <li>U.S. citizens or eligible non-citizens</li>
                <li>Full-time students enrolled in an accredited program leading to certification as an RN or LPN</li>
                <li>High school seniors with at least a 2.5 cumulative, unweighted GPA</li>
                <li>Undergraduates must have at least a cumulative 2.5 GPA</li>
                <li>Current state employees do not have to be Delaware residents and may be considered for prorated awards if enrolled part-time</li>
                <li>RNs with five or more years of state service may enroll in a BSN program on a full- or part-time basis</li>
            </ul>

            <p>The program page is <a href={DENursingIncentiveInfo} target={_blank} rel={_noreferrer}>here</a>.</p>
      </div>
    )
}

function DETeacherCorps() {
    const DETeacherCorpsInfo = "https://www.doe.k12.de.us/Page/1054"
    return (
      <div>
            <h2>Delaware Teacher Corps Program</h2>
            <p>This program provides full tuition forgivable loans to students pursuing careers as teachers and educators.
                One year of teaching at a Delaware public school will forgive one year of your loan and it renewable for up to three years.
                Participants in the program must agree to teach a critical need subject at a state middle school or high school. 
                Critical area subjects are listed in the program page linked below.
                These are the eligibility criteria:</p>
            <ul>
                <li>Legal residents of Delaware</li>
                <li>U.S. citizens or eligible non-citizens</li>
                <li>High school seniors must have a combined score of at least 1140 on the SAT</li>
                <li>All applicants must have at least a 2.75 cumulative GPA</li>
                <li>Enrollment at a Delaware college in an undergraduate or graduate program leading to teacher certification  in a critical need area as defined by the Delaware Department of Education</li>
                <li>Priority is given to students who intend to teach Special Education</li>
            </ul>

            <p>The program page is <a href={DETeacherCorpsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>
      </div>
    )
}

function DEHealthProfLoanRepay() {
    const DEHealthProfLoanRepayInfo = "https://dhss.delaware.gov/dhss/dhcc/slrp.html"
    const HPSAInfo = "https://data.hrsa.gov/"
    return (
      <div>
            <h2>Delaware State Loan Repayment Program for Health Professionals</h2>
            <p>The purpose of this program is to recruit and retain talented healthcare professionals within Delaware. 
                The program is open to advanced healthcare professionals within the state who have outstanding federal and state loans. 
                Eligible professionals include primary care physician, oncologists, general practice dentists, nurse practitioners, physician’s assistants, and clinical psychologists. 
                Participants may be eligible to receive between $30,000 and $100,000 in loan forgiveness in exchange for two years of service at a federally designated <a href={HPSAInfo} target={_blank} rel={_noreferrer}>Health Professional Shortage Area (HPSA)</a>.
                The eligibility criteria and program information are <a href={DEHealthProfLoanRepayInfo} target={_blank} rel={_noreferrer}>here</a>.</p>
      </div>
    )
}

export default DelawarePrograms;
