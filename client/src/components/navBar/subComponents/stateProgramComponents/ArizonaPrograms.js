import React from 'react'

const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const EFCInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"




function ArizonaPrograms() {
  return (
    <div>
        <AZAssurance/>
        <ASUCollegeAttainment/>
        <ASUObamaScholar/>
        <AZLeap/>
    </div>
  );
}

function AZAssurance() {
    const AZAssuranceInfo = "https://financialaid.arizona.edu/types-of-aid/arizona-assurance/high-school-seniors"
    const dependAndIndepenStudentInfo = "https://studentaid.gov/apply-for-aid/fafsa/filling-out/dependency"
    const AZResidency = "https://registrar.arizona.edu/support-services/residency-classification-tuition-purposes"

    return (
        <div>
            <h2>Arizona Assurance Program</h2>
            <p>The Arizona Assurance program provides financial aid to low-income students. It is for students entering the University of Arizona (UA).
                Your eligibility is determined based in your financial need and your high school grades. 
                If you qualify based on your <a href={fafsaLink} target={_blank} rel={_noreferrer}>FAFSA</a> and University of Arizona application information you will be notified
                via email. Here are the eligibility criteria:</p>
                <ul>
                    <li>Have a total parental income of $27,000 or less if a dependent student or have a personal income of 27,000 or less if an independent student. <a href={dependAndIndepenStudentInfo} target={_blank} rel={_noreferrer}>Here's information on the difference between an dependent and independent student</a></li>
                    <li>Submit your FAFSA by January 31</li>
                    <li>Have an <a href={EFCInfo} target={_blank} rel={_noreferrer}>Expected Family Contribution (EFC)</a> of 0 on your FAFSA</li>
                    <li>Be admitted to the University of Arizona (main campus) for the upcoming fall semester by Jan 31</li>
                    <li>Be a confirmed as a <a href={AZResidency} target={_blank} rel={_noreferrer}>Resident of Arizona for tuition purposes</a></li>
                </ul>
                <p>The official program page is <a href={AZAssuranceInfo}>here</a>. Please review it for the full details.</p>
        </div>
    );
}

function ASUCollegeAttainment() {
    const ASUCollegeAttainInfo = "https://students.asu.edu/asu-college-attainment-grant-program"
    return (
        <div>
            <h2>Arizona State University: College Attainment Program</h2>
            <p>This program provides full funding for tuition and fees for Arizona State University students who qualify for the eligibilty criteria.
                There is no additional application for this program, you will automatically be considered when you complete your FAFSA and ASU application.
                The eligibility criteria are:</p>
            <ul>
                <h4>Initial Criteria</h4>
                <li>Open to Arizona residents who are pursuing their first undergraduate degree</li>
                <li>The student must enroll immediately beginning the the fall semester after they graduate from high school. If the student doesn't enroll in ASU at this time they forfeit their eligibility for future participation.</li>
                <li>Must be eligible to receive the Federal Pell Grant</li>
                <li>You must submit your FAFSA by July 1st</li>
                <li>You must submit all requested ASU documents for financial aid verification by August 1st</li>

                <h4>Renewal Criteria</h4>
                <li>You must complete a minimum of 12 credit hours every semester in university</li>
                <li>A minimum GPA of 2.5 must be maintained by the end of each spring semester</li>
                <li>You must remain eligible for federal aid to participate in this program each year</li>
                <li>File your FAFSA early and complete it without errors by March 1st each year</li>
                <li>Verify your financial aid information with ASU by July 1st of each year</li>
            </ul>
            <p>ASU online degrees are not eligible for this program. The full program details are <a href={ASUCollegeAttainInfo} target={_blank} rel={_noreferrer}>here</a></p>
        </div>
    );
}

function ASUObamaScholar() {
    const firstYearReqs = "https://admission.asu.edu/first-year/apply"
    const ASUObama = "https://students.asu.edu/obama"

    return (
        <div>
            <h2>Arizona State University: Obama Scholars Program</h2>
            <p>Arizona State University provides tuition/fees and a stipend for housing/meals/book supplies for qualifying low-income students.
                It will cover estimated direct costs minus the student's <a href={EFCNeedInfo} target={_blank} rel={_noreferrer}>Expected Family Contribution</a>.
                There is no additional application for this program, you will be considered when you complete your FAFSA and ASU application.
                The eligibility criteria are:
            </p>
            <ul>
                <li>You must have a family income less than $42,400</li>
                <li>You must be an first year full-time student who is an Arizona resident</li>
                <li>You must meet all of the first-year admission requirements listed <a href={firstYearReqs} target={_blank} rel={_noreferrer}>here</a></li>
                <li>You must be eligible for a Federal Pell Grant</li>
                <li>You must complete your FAFSA and ASU application by January 15th</li>
                <li>You must submit all financial aid documents requested by ASU by July 1st</li>
            </ul>
            <p>ASU online degrees are not eligible for this program. The program details are <a href={ASUObama} target={_blank} rel={_noreferrer}>here</a></p>
        </div>
    )
}

function AZLeap() {

    const AZLeapInfo = "https://azgrants.az.gov/arizona-leveraging-educational-assistance-partnership-azleap"

    return (
        <div>
            <h2>Arizona Leveraging Education Assistance Partnership</h2>
            <p>This Arizona grant provides assistance to students low-income undergraduate students. It has a max reward of $2,500/year and the average award is $1,000/year.
                These are the eligibility criteria:
            </p>
            <ul>
                <li>Must be a U.S. Citizen or an eligible noncitizen</li>
                <li>Must be a resident of Arizona</li>
                <li>Must be enrolled at least half-time as an undergraduate student in a regionally or nationally accredited Arizona postsecondary institution</li>
                <li>Must have substantial financial need (be eligible for the Federal Pell Grant) as determined by the Free Application for Federal Student Aid (FAFSA)</li>
                <li>Must maintain satisfactory academic progress as determined by the institution</li>
            </ul>
            <p>The program details and list of participating institutions are <a href={AZLeapInfo} target={_blank} rel={_noreferrer}>here</a></p>
        </div>
    )
}

export default ArizonaPrograms;
