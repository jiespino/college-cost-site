import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function TexasPrograms() {

  return (
      <div>
        <UTAustin/>
        <WTAMU/>
        <TexasAM/>
        <TexasTech/>
        <UnivHouston/>
        <MSU/>
        <UTSanAntonio/>
        <AngeloStateUniversity/>
        <TexasStateUniversity/>
        <SamHoustonStateUniversity/>
        <StephenFAustinUniv/>
        <UTDallas/>
        <LamarUniversity/>
        <DallasCountyPromise/>
        <HarrisCountyPromise/>
        <AlamoPromise/>
        <TexasGrants/>
    </div>
  );
}

function UTAustin() {
    const UTAustinInfo = "https://texasadvance.utexas.edu/"


    return (
        <div>
            <h2>The University of Texas at Austin: Texas Advance Commitment</h2>
            <p>This program covers tuition/fee costs for low income students at UT Austin.
                You must be a Texas resident to qualify.
                For students with a family income under $65,000 all tuition is covered;
                For students with a family income between $65,000 and $125,000 there is partial tuition coverage.
            </p>

            <p>To review all of the program/application details, please look <a href={UTAustinInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function WTAMU() {
    const WTAMUInfo = "https://www.wtamu.edu/student-support/financial-aid/buff-promise/index.html"


    return (
        <div>
            <h2>West Texas A&M University: Buff Promise</h2>
            <p>This program covers tuition/fee costs for low income students at WTAMU.
                You must be a Texas resident to qualify.
                For students with a family income under $80,000 all tuition is covered.
            </p>

            <p>To review all of the program/application details, please look <a href={WTAMUInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function TexasAM() {
    const TexasAMInfo = "https://financialaid.tamu.edu/Aggie-Assurance"


    return (
        <div>
            <h2>Texas A&M University: Aggie Assurance</h2>
            <p>This program covers tuition/fee costs for low income students at Texas A&M University.
                You must be a Texas resident to qualify.
                For students with a family income under $60,000 all tuition is covered;
                For students with a family income between $60,000 and $130,000 there is partial tuition coverage.
            </p>

            <p>To review all of the program/application details, please look <a href={TexasAMInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function TexasTech() {
    const TexasTechInfo = "https://www.depts.ttu.edu/financialaid/guarantee/"


    return (
        <div>
            <h2>Texas Tech University: Red Raider Guarantee</h2>
            <p>This program covers tuition/fee costs for low income students at Texas Tech University.
                You must be a Texas resident to qualify.
                For students with a family income under $65,000 all tuition is covered.
            </p>

            <p>To review all of the program/application details, please look <a href={TexasTechInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function UnivHouston() {
    const UnivHoustonInfo = "https://uh.edu/financial/undergraduate/types-aid/incentives/cougar-promise/"


    return (
        <div>
            <h2>University of Houston: Cougar Promise</h2>
            <p>This program covers tuition/fee costs for low income students at the University of Houston.
                You must be a Texas resident to qualify.
                For students with a family income under $65,000 all tuition is covered;
                For students with a family income between $65,000 and $125,000 there is partial tuition coverage.
            </p>

            <p>To review all of the program/application details, please look <a href={UnivHoustonInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function MSU() {
    const MSUInfo = "https://msutexas.edu/finaid/m-guarantee.php"


    return (
        <div>
            <h2>Midwestern State University: Mustangs Guarantree</h2>
            <p>This program covers tuition/fee costs for low income students at Midwestern State University.
                You must be a Texas resident to qualify.
                For students with a family income under $65,000 all tuition is covered.
            </p>

            <p>To review all of the program/application details, please look <a href={MSUInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function UTSanAntonio() {
    const UTSanAntonioInfo = "https://future.utsa.edu/promise/"


    return (
        <div>
            <h2>University of Texas San Antonio: Bold Promise</h2>
            <p>This UT San Antonio program covers tuition/fee costs for low income students that also ranked highly in their high school class.
                You must be a Texas resident and, be in the top 25% of your high school class to qualify, and also have a family income under $50,500.
            </p>

            <p>To review all of the program/application details, please look <a href={UTSanAntonioInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function AngeloStateUniversity() {
    const AngeloStateUniversityInfo = "https://www.angelo.edu/admissions-and-aid/paying-for-college/tuition-and-fees/blue-and-gold-guarantee/"


    return (
        <div>
            <h2>Angelo State University: Blue and Gold Guarantee</h2>
            <p>This program covers tuition/fee costs for low income students at Angelo State University.
                You must be a Texas resident to qualify.
                For students with a family income under $50,000 all tuition is covered.
            </p>

            <p>To review all of the program/application details, please look <a href={AngeloStateUniversityInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


function TexasStateUniversity() {
    const TexasStateUniversityInfo = "https://www.finaid.txstate.edu/undergraduate/freshman-aid-programs/bobcatpromise.html"


    return (
        <div>
            <h2>Texas State University: Bobcat Promise</h2>
            <p>This program covers tuition/fee costs for low income students at Texas State University.
                You must be a Texas resident to qualify.
                For students with a family income under $50,000 all tuition is covered.
            </p>

            <p>To review all of the program/application details, please look <a href={TexasStateUniversityInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function SamHoustonStateUniversity() {
    const SamHoustonStateUniversityInfo = "https://www.shsu.edu/dept/financial-aid/aid/bearkatpromise"


    return (
        <div>
            <h2>Sam Houston State University: Bearkat Promise</h2>
            <p>This program covers tuition/fee costs for low income students at SHSU.
                You must be a Texas resident to qualify.
                For students with a family income under $40,000 all tuition is covered.
            </p>

            <p>To review all of the program/application details, please look <a href={SamHoustonStateUniversityInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


function UTDallas() {
    const UTDallasInfo = "https://www.utdallas.edu/costs-scholarships-aid/costs/tuition/promise/"


    return (
        <div>
            <h2>University of Texas at Dallas: Tuition Promise</h2>
            <p>This program covers tuition/fee costs for low income students at UT Dallas.
                You must be a Texas resident to qualify.
                For students with a family income under $25,000 all tuition is covered.
            </p>

            <p>To review all of the program/application details, please look <a href={UTDallasInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function LamarUniversity() {
    const LamarUniversityInfo = "https://www.lamar.edu/financial-aid/types-of-aid/grants/lamar-promise.html"


    return (
        <div>
            <h2>Lamar University: Lamar Promise</h2>
            <p>This program covers tuition/fee costs for low income students at Lamar University.
                You must be a Texas resident to qualify.
                For students with a family income under $25,000 all tuition is covered.
            </p>

            <p>To review all of the program/application details, please look <a href={LamarUniversityInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function StephenFAustinUniv() {
    const StephenFAustinUnivInfo = "https://www.sfasu.edu/admissions-and-aid/financial-aid/types-of-aid/grants"


    return (
        <div>
            <h2>Stephen F. Austin University: Purple Promise</h2>
            <p>This program covers tuition/fee costs for low income students at Stephen F Austin University.
                You must be a Texas resident to qualify.
                For students with a family income under $30,000 all tuition is covered.
            </p>

            <p>To review all of the program/application details, please look <a href={StephenFAustinUnivInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function DallasCountyPromise() {
    const DallasCountyPromiseInfo = "https://dallascountypromise.org/students"
    const DallasPromiseParterColleges = "https://dallascountypromise.org/students/college-partners"
    const DallasHighSchools = "https://dallascountypromise.org/students/highschools"


    return (
        <div>
            <h2>Dallas Country Promise</h2>
            <p>This program covers tuition/fees for Dallas high school students who graduate from one of <a href={DallasHighSchools} target={_blank} rel={_noreferrer}>57 eligible high schools</a>.
                The program will cover any remaining tuition/fees that exist for a student after all other student aid they receive is used.
                Students can attend any of <a href={DallasPromiseParterColleges} target={_blank} rel={_noreferrer}>these partner colleges</a>.
                There is no GPA or income requirement.
            </p>

            <p>To review all of the program/application details, please look <a href={DallasCountyPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function HarrisCountyPromise() {
    const HarrisCountyPromiseInfo = "https://harriscountypromise.org/students/"

    const AliefDistrict = <a href="https://www.aliefisd.net/" target={_blank} rel={_noreferrer}>Alief ISD</a>
    const PasadenaDistrict = <a href="https://www1.pasadenaisd.org/" target={_blank} rel={_noreferrer}>Pasadena ISD</a>
    const AldineDistrict = <a href="https://www1.pasadenaisd.org/" target={_blank} rel={_noreferrer}>Aldine ISD</a>


    const HouCommCollege = <a href="https://www.hccs.edu/" target={_blank} rel={_noreferrer}>Houston Community College</a>
    const SanJacCollege = <a href="https://www.sanjac.edu/" target={_blank} rel={_noreferrer}>San Jacinto College</a>
    const LoneStarCollege = <a href="https://www.lonestar.edu/" target={_blank} rel={_noreferrer}>Lone Star College</a>

    return (
        <div>
            <h2>Harris County Promise</h2>
            <p>This program covers tuition/fees at an Alamo community college for Harris county high school students who graduate from a high school
                in either {AliefDistrict}, {PasadenaDistrict}, or {AldineDistrict}.
                The program will cover tuition fees at {HouCommCollege}, {SanJacCollege}, or {LoneStarCollege}.
                There is no GPA or income requirement.
            </p>

            <p>To review all of the program/application details, please look <a href={HarrisCountyPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function AlamoPromise() {
    const AlamoPromiseInfo = "https://www.alamo.edu/promise/about/"
    const AlamoColleges = "https://www.alamo.edu/"

    return (
        <div>
            <h2>Alamo Promise</h2>
            <p>This program covers tuition/fees at an Alamo community college for San Antonio high school students who graduate from one of <a href={AlamoPromiseInfo} target={_blank} rel={_noreferrer}>25 eligible high schools</a>.
                The program will cover tuition fees at any one of the <a href={AlamoColleges} target={_blank} rel={_noreferrer}>five Alamo colleges</a>.
                There is no GPA or income requirement.
            </p>

            <p>To review all of the program/application details, please look <a href={AlamoPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function TexasGrants() {
    const TexasGrantsInfo = "http://www.collegescholarships.org/grants/states/texas.htm"

    return (
        <div>
            <h2>Texas Grants</h2>
            <p>A list of other Texas student grants can be found <a href={TexasGrantsInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

export default TexasPrograms;