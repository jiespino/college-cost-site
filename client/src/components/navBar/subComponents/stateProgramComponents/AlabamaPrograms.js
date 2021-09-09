import React from 'react'

function AlabamaPrograms() {
  const _blank = "_blank"
  const _noreferrer = "noreferrer"
  const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
  const ALStudentAid = "https://ache.edu/ACHE_Reports/Forms/Grants/AL-Financial-Aid-Prog.pdf"

  return (
    <div>
      The financial aid programs for Alabama students can be found <a href={ALStudentAid} target={_blank} rel={_noreferrer}>here</a>
    </div>
  );
}

export default AlabamaPrograms;
