import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function MichiganPrograms() {

  return (
      <div>
        <GoBlueGuarantee/>
        <GrandValleyPledge/>
        <AlbionCollegePromise/>
        <AlmaDetroitFuture/>
        <CMUTraditionsProgram/>
        <EasternMichiganUniversity/>
        <SpartanAdvantageProgram/>
        <GoldenGrizzliesTuitionGuarantee/>
        <SVSUCardinalCommitment/>
        <HeartOfDetroit/>
        <FlintPromise/>
        <GrandRapidsPromiseZone/>
    </div>
  );
}

function GoBlueGuarantee() {
    const GoBlueGuaranteeInfo = "https://goblueguarantee.umich.edu/"


    return (
        <div>
            <h2>University of Michigan: Go Blue Guarantee</h2>
            <p>Students who have a household income at or below $65,000 and family assets under $50,000 are eligible to attend 
                any University of Michigan campus tuition free. The three campuses are Ann Arbor, Dearborn, and Flint.
               Students must be Michigan residents.
            </p>

            <p>Please review all the program details <a href={GoBlueGuaranteeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function GrandValleyPledge() {
    const GrandValleyPledgeInfo = "https://www.gvsu.edu/gvpledge/"


    return (
        <div>
            <h2>Grand Valley State University: Grand Valley Pledge</h2>
            <p>Students who have a household income at or below $50,000 and family assets under $50,000 are eligible to attend 
                Grand Valley State University tuition free. Students must be Michigan residents.
            </p>

            <p>Please review all the program details <a href={GrandValleyPledgeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function AlbionCollegePromise() {
    const AlbionCollegePromiseInfo = "https://www.albion.edu/admission/cost-financial-aid/albion-college-promise/"


    return (
        <div>
            <h2>Albion College Promise</h2>
            <p>Students who have a household income at or below $65,000 are eligible to attend Albion College tuition free.
               Students must be Michigan residents.
            </p>

            <p>Please review all the program details <a href={AlbionCollegePromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function AlmaDetroitFuture() {
    const AlmaDetroitFutureInfo = "https://www.alma.edu/live/news/2402-alma-college-expands-detroit-future-program"


    return (
        <div>
            <h2>Alma College: Detroit Future Program</h2>
            <p>Detroit high school students who have a household income at or below $65,000 are eligible to attend Alma College tuition free.
               Students must be Michigan residents.
            </p>

            <p>Please review all the program details <a href={AlmaDetroitFutureInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


function CMUTraditionsProgram() {
    const CMUTraditionsProgramInfo = "https://www.cmich.edu/ess/OSFA/Documents/CMU_Traditions_FAQ.pdf"


    return (
        <div>
            <h2>Central Michigan University: CMU Traditions Program</h2>
            <p>Students who have a household income at or below $50,000 and family assets under $50,000 are eligible to attend 
                Central Michigan University tuition free. Students must be Michigan residents.
            </p>

            <p>Please review all the program details <a href={CMUTraditionsProgramInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}




function EasternMichiganUniversity() {
    const EasternMichiganUniversityInfo = "https://www.emich.edu/education-first-opportunity-scholarship/index.php"


    return (
        <div>
            <h2>Eastern Michigan University: Education First Opportunity Scholarship</h2>
            <p>Students who have a high school GPA of 3.0+ and are <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> eligible can attend
                Eastern Michigan University tuition free. Students must be Michigan residents.
            </p>

            <p>Please review all the program details <a href={EasternMichiganUniversityInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function SpartanAdvantageProgram() {
    const SpartanAdvantageProgramInfo = "https://finaid.msu.edu/spad.asp"


    return (
        <div>
            <h2>Michigan State University: Spartan Advantage Program</h2>
            <p>Students who are eligible for a maximum <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> award can attend
                Michigan State University tuition free. For a maximum reward Pell Grant, a student's family income would likely need to be under $26,000.
                Students must be Michigan residents.
            </p>

            <p>Please review all the program details <a href={SpartanAdvantageProgramInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function GoldenGrizzliesTuitionGuarantee() {
    const GoldenGrizzliesTuitionGuaranteeInfo = "https://oakland.edu/tuition-guarantee/"


    return (
        <div>
            <h2>Oakland University: Golden Grizzlies Guarantee</h2>
            <p>Students who are have an <a href={EFCNeedInfo} target={_blank} rel={_noreferrer}>Expected Family Contribution</a> under $8,000 are eligible for free tuition at Oakland University.
            For additional context, the average household income of a recipient for this award was $41,000. Students must be Michigan residents.
            </p>

            <p>Please review all the program details <a href={GoldenGrizzliesTuitionGuaranteeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function SVSUCardinalCommitment() {
    const SVSUCardinalCommitmentInfo = "https://www.svsu.edu/cardinalcommitment/"


    return (
        <div>
            <h2>Saginaw Valley State University: Cardinal Commitment</h2>
            <p>Students with a household income under $50,000 are eligible for free tuition at Saginaw Valley State University.
                Students must be Michigan residents.
            </p>

            <p>Please review all the program details <a href={SVSUCardinalCommitmentInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function HeartOfDetroit() {
    const HeartOfDetroitInfo = "https://wayne.edu/heart-of-detroit/"


    return (
        <div>
            <h2>Wayne State University: Heart of Detroit Tuition Pledge</h2>
            <p>Detroit residents or graduates of a Detroit high school are eligible for free tuition at Wayne State University.
            </p>

            <p>Please review all the program details <a href={HeartOfDetroitInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


function FlintPromise() {
    const FlintPromiseInfo = "https://theflintpromise.org/faq/"


    return (
        <div>
            <h2>Flint Promise</h2>
            <p>Graduates of a Flint high school are eligible for free tuition at either Kettering University, Mott Community College or the University of Michigan-Flint.
                Students must have a high school GPA of 1.8+ and be age 24 or younger.
            </p>

            <p>Please review all the program details <a href={FlintPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function GrandRapidsPromiseZone() {
    const GrandRapidsPromiseZoneInfo = "https://grpromisezone.com/"


    return (
        <div>
            <h2>Grand Rapids Promise Zone</h2>
            <p>Students that graduate from a Grand Rapids high school are eligible to attend Grand Rapids Community College tuition free
            </p>

            <p>Please review all the program details <a href={GrandRapidsPromiseZoneInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default MichiganPrograms;