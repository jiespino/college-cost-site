import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function UtahPrograms() {

  return (
      <div>
        <ForUtah/>
        <UtahStateAid/>

    </div>
  );
}

function ForUtah() {
    const ForUtahInfo = "https://admissions.utah.edu/ForUtah/"
    const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"


    return (
        <div>
            <h2>The University of Utah: For Utah</h2>
            <p>This program covers tuition costs for low income students at the University of Utah. 
                To qualify students must a family income low enough to qualify for a <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a>.
            </p>

            <p>To review all of the program details, please look <a href={ForUtahInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function UtahStateAid() {
    const UtahStateAidInfo = "https://ushe.edu/initiatives/state-aid-programs/"

    return (
        <div>
            <h2>Utah State Aid</h2>

            <p>A list of Utah State Aid programs can be found <a href={UtahStateAidInfo} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}


export default UtahPrograms;