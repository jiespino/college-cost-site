import React from 'react'

const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsa = "https://studentaid.gov/h/apply-for-aid/fafsa"

function AlaskaPrograms() {

  return (

    <div>
        <AKEduGrant/>
        <AKSeaWolfScholarship/>
        <AKPerfScholarship/>
        <AKScholarsProg/>
    </div>
  );
}

function AKEduGrant() {
    const AKEduGrantInfo = "https://acpe.alaska.gov/FINANCIAL-AID/AK-Education-Grant"
    return ( 
        <div>
            <h2>Alaska Education Grant</h2>
            <p>The Alaskan legislature funds this need-based grant to help students attend college. The grant award can be between $500 - $4000 per school year.
            These are the criteria:</p>
            <ul>
                <li>Be an Alaskan resident and U.S. citizen/permanent resident</li>
                <li>Be an Alaska resident for 1 year prior to filling out your <a href={fafsa} target={_blank} rel={_noreferrer} >FAFSA</a></li>
                <li>Have a high school diploma or GED</li>
                <li>Be admitted to an Alaskan institution and pursue an undergraduate degree or vocational certificate program</li>
                <li>Be enrolled at least half-time status (at last 6 credit hours per semester)</li>
                <li>Not have earned a bachelor's degree previously</li>
                <li>Meet satisfactory academic progress according to the institution you attend</li>
            </ul>
            <p>The Free Application for Federal Student Aid (FAFSA) is the application for the AEG. You must select at least one qualifying Alaska Institution of higher education at the time of your FAFSA filing to be considered for the AEG.
                Students need to apply each year they wish to be considered for an award. ACPE encourages students to apply early for award prioritization.
                Qualifying students - those who have completed the upcoming academic year's FAFSA and meet the initial eligibility requirements - will be sent an AEG Intent Form during the summer months. The Intent Form notification is sent via email. 
                Students who receive the AEG Intent Form notification must complete and return the Form within the timeline specified in the email.</p>
            <p>A link to more information is <a href={AKEduGrantInfo} target={_blank} rel={_noreferrer}>here</a></p>
        </div>
    );
}

function AKSeaWolfScholarship() {
    const seaWolfScholarship = "https://alaska.academicworks.com/opportunities/15114"
    const UAAApply = "https://www.uaa.alaska.edu/admissions/apply/index.cshtml"

    return (
    <div>
        <h2>University of Alaska Anchorage Seawolf Opportunities Scholarship</h2>
        <p>The University of Alaska Anchorage (UAA) offers this scholarship to first-generation, first-time freshmen who demonstrate financial need. It provides a yearly $2000 award as long as the criteria are met throughout one's attendence.
        This scholarship doesn't require an additional application; your application information will be used to determine eligibility.
        </p>
        <ul>
            <li><a href={UAAApply} target={_blank} rel={_noreferrer}>Be admitted</a> as a student into UAA</li>
            <li>Maintain a minimum of a 2.0 GPA freshman year and a 2.5 GPA in your sophmore - senior years</li>
            <li>Be an Alaskan resident and U.S. citizen/permanent resident</li>
            <li>Have an expected family contribution (EFC) less than or equal 20% of the max EFC needed to receive any Federal Pell Grant during the time of the initial reward.</li>
            <li>Recipients must continuously enroll in every Fall/Spring semester. No leave of absences are permitted, except in the summer</li>
        </ul>
        <p>More information can be found <a href={seaWolfScholarship} target={_blank} rel={_noreferrer}>here</a></p>
    </div>
    );
}

function AKPerfScholarship() {
    const AKPerfChecklist = "https://acpe.alaska.gov/Portals/3/APS/Pubs/APS-Award-Checklist-2018.pdf"
    const AKPerfScholarshipInfo = "https://acpe.alaska.gov/FINANCIAL-AID/AK-Performance-Scholarship"
    return (
        <div>
            <h2>Alaska Performance Scholarship (merit based)</h2>

            <p>The Alaska Performance scholarship gives student a yearly grant based on high school performance. There are three levels of financial aid:</p>

            <ol>
                <li>Up to $4,755 per year</li>
                <ul>
                    <li>High School GPA 3.5</li>
                    <li>25 ACT or SAT 1210</li>
                    <li>Specified high school curriculum <a href={AKPerfChecklist} target={_blank} rel={_noreferrer}>(see here)</a></li>
                </ul>

                <li>Up to $3,566 per year</li>
                <ul>
                    <li>High School GPA 3.0</li>
                    <li>23 ACT or SAT 1130</li>
                    <li>Specified high school curriculum <a href={AKPerfChecklist} target={_blank} rel={_noreferrer}>(see here)</a></li>
                </ul>

                <li>Up to $2,378 per year</li>
                <ul>
                    <li>High School GPA 2.5</li>
                    <li>21 ACT or SAT 1060</li>
                    <li>Specified high school curriculum <a href={AKPerfChecklist} target={_blank} rel={_noreferrer}>(see here)</a></li>
                </ul>
            </ol>

            <p>More information on the Alaska Performance scholarship can be found <a href={AKPerfScholarshipInfo} target={_blank} rel={_noreferrer}>here</a>.</p>
        </div>
    );
}

function AKScholarsProg() {
    const UAScholars = "https://www.alaska.edu/scholars/program-overview/index.php"

    return (
        <div>
            <h2>University of Alaska Scholars Program (merit based)</h2>
            <p>This scholar provides $12,000 to Alaskan high school students who are in the top 10% of their class at the end of their junior year.
                The award is distributed in $1,500 increments for eight semesters.
            </p>

            <p>Visit the <a href={UAScholars} target={_blank} rel={_noreferrer}>page here</a> for more information.</p>
        </div>

    );

}

export default AlaskaPrograms;

