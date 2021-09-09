import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#efc"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"
const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"

function MainePrograms() {

  return (
      <div>
        <UMPI/>
        <FortKentPromiseProgram/>
        <PineTreePledge/>
        <DowneastPromise/>
    </div>
  );
}

function UMPI() {
    const UMPIInfo = "https://www.umpi.edu/way-it-should-be/"

    return (
        <div>
            <h2>University of Maine at Presque Isle</h2>
            <p>Maine students who are <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> eligible can attend the University of Maine at Presque Isle tuition free.
            Students must be Maine residents.
            </p>
            <p>To see all the program details, please look <a href={UMPIInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function FortKentPromiseProgram() {
    const FortKentPromiseProgramInfo = "https://www.umfk.edu/promise-program/"

    return (
        <div>
            <h2>University of Maine at Fort Kent: Fort Kent Promise Program</h2>
            <p>Maine students who are <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> eligible can attend the University of Maine at Fort Kent tuition free.
            Students must be Maine residents.
            </p>
            <p>To see all the program details, please look <a href={FortKentPromiseProgramInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function PineTreePledge() {
    const PineTreePledgeInfo = "https://www.uma.edu/financial/scholarships/pine-tree-state-pledge/"

    return (
        <div>
            <h2>University of Maine at Augusta: Pine Tree Pledge</h2>
            <p>Maine students who are <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> eligible can attend the University of Maine at Augusta tuition free.
            Students must be Maine residents.
            </p>
            <p>To see all the program details, please look <a href={PineTreePledgeInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


function DowneastPromise() {
    const DowneastPromiseInfo = "https://machias.edu/admissions/downeast-promise/"

    return (
        <div>
            <h2>University of Maine at Machias: Downeast Promise</h2>
            <p>Maine students who are <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a> eligible can attend the University of Maine at Machias tuition free.
            Students must be Maine residents.
            </p>
            <p>To see all the program details, please look <a href={DowneastPromiseInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default MainePrograms;