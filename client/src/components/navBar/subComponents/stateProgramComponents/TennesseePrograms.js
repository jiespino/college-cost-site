import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function TennesseePrograms() {

  return (
      <div>
        <UTPromise/>
        <TenneseePromise/>
        <TenneseeAid/>

    </div>
  );
}

function UTPromise() {
    const UTPromiseInfo = "https://tennessee.edu/ut-promise/"


    return (
        <div>
            <h2>University of Tennessee Promise</h2>
            <p>This program covers tuition costs for low income students in Tennessee.
               For this program a student must have a household income less than $50,000 and family assets totaling less than $75,000.
               Students can then attend any University of Tennessee campus (Knoxville, Chattanooga, Martin, or Memphis). 
            </p>

            <p>To review all of the program details, please look <a href={UTPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function TenneseePromise() {
    const TenneseePromiseInfo = "https://www.tn.gov/tnpromise/about.html"
    const TenneseePromiseColleges = "https://issuu.com/thec-tsac/docs/tnp_eligibleinstitutions2020?fr=sODIxNDM3MDQ1MQ"


    return (
        <div>
            <h2>Tennessee Promise</h2>
            <p>This program covers covers 2 years of tuition costs at a community or technical college in Tennessee.
               Students must be Tennesee residents, complete 8 hours of community service per term, and maintain a 2.0 GPA while in college.
               The eligible colleges are listed <a href={TenneseePromiseColleges} target={_blank} rel={_noreferrer}>here</a>.
            </p>

            <p>To review all of the program details, please look <a href={TenneseePromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function TenneseeAid() {
    const TenneseeAidInfo = "https://www.tn.gov/collegepays/money-for-college.html"

    return (
        <div>
            <h2>Tennessee Aid</h2>

            <p>To see other Tennesee aid programs, please look <a href={TenneseeAidInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}



export default TennesseePrograms;