import React from 'react'
const _blank = "_blank"
const _noreferrer = "noreferrer"
const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
const wasfaLink = "https://wsac.wa.gov/wasfa"
const povertyGuidelines = "https://aspe.hhs.gov/topics/poverty-economic-mobility/poverty-guidelines"
const EFCNeedInfo = "https://studentaid.gov/complete-aid-process/how-calculated#need-based"
const AGIDef = "https://www.investopedia.com/terms/a/agi.asp"

function VermontPrograms() {

  return (
      <div>
        <Opportunity802/>
        <CatamountCommitment/>

    </div>
  );
}

function Opportunity802() {
    const Opportunity802Info = "https://www.vsac.org/free-tuition-ccv-yes-really"

    return (
        <div>
            <h2>Community College of Vermont: 802 Opportunity</h2>
            <p>This program covers tuition costs at the Community College of Vermont for students with a family income of $50,000 or less.
                The student must be a Vermont resident.
            </p>

            <p>To review all of the program details, please look <a href={Opportunity802Info} target={_blank} rel={_noreferrer}>here</a>.</p>

        </div>
    )
}

function CatamountCommitment() {
    const CatamountCommitmentInfo = "https://www.uvm.edu/studentfinancialservices/catamount_commitment"
    const PellGrant = "https://studentaid.gov/understand-aid/types/grants/pell"


    return (
        <div>
            <h2>The University of Vermont: Catamount Commitment</h2>
            <p>This program cover tuition costs at UVM for low income students (specifically students eligible for a <a href={PellGrant} target={_blank} rel={_noreferrer}>Pell Grant</a>).
               Only Vermont residents are eligible.
            </p>

            <p>Please review the program <a href={CatamountCommitmentInfo} target={_blank} rel={_noreferrer}>here</a> to see all of the details.</p>

        </div>
    )
}


export default VermontPrograms;