import React from 'react'

function ArkansasPrograms() {
  const _blank = "_blank"
  const _noreferrer = "noreferrer"
  const fafsaLink = "https://studentaid.gov/h/apply-for-aid/fafsa"
  const ARStudentAid = "https://scholarships.adhe.edu/scholarships-and-programs/a-z/"

  return (
    <div>
      The financial aid programs for Arkansas students can be found <a href={ARStudentAid} target={_blank} rel={_noreferrer}>here</a>
    </div>
  );
}

export default ArkansasPrograms;
