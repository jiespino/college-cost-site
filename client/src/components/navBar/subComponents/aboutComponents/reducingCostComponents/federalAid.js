
function FederalAid() {
    const federalAidInfo = "https://studentaid.gov/understand-aid/types"
    const pellGrantInfo = "https://studentaid.gov/understand-aid/types/grants/pell"
    const workStudyInfo = "https://studentaid.gov/understand-aid/types/work-study"
    const loansInfo = "https://studentaid.gov/understand-aid/types/loans"
    return (
      
      <div>
          <h3>Federal Aid</h3>
          <li>
            <p>Lastly, the federal government does offer financial aid based on need. 
              For the lowest income students this 
              includes <a href={pellGrantInfo} target="_blank" rel="noreferrer">Pell Grants</a> and <a href={workStudyInfo} target="_blank" rel="noreferrer">Work Study</a>.
              Loans are available to students as well, more information on federal loans is <a href={loansInfo} target="_blank" rel="noreferrer">here</a>.
              The official student federal aid information page is <a href={federalAidInfo} target="_blank" rel="noreferrer">here</a>.
            </p>
            </li>
      </div>
    );
  }
  
  export default FederalAid;