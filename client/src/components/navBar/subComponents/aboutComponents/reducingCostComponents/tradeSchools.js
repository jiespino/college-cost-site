

function TradeSchools() {
    const traditionalVsTradeSchoolCost = "https://www.midwesttech.edu/resources/careers/trade-school-vs-college-a-guide-to-weighing-your-options/"
    const bachelorDegreePay = "https://www.northeastern.edu/bachelors-completion/news/average-salary-by-education-level/"
    const tradeSchoolCareers = "https://www.trade-schools.net/programs"
    const tradeSchoolPay = "https://www.greatvaluecolleges.net/highest-paying-trade-school-degrees/"

    const tradeSchoolHighPaying = "https://finance.yahoo.com/news/blue-collar-jobs-pay-six-090000328.html"
    const traditionalVsTradeschoolComparison = "https://www.bestcolleges.com/blog/the-value-of-trade-schools/"
    const blueCollarLaborShortage = "https://www.pbs.org/newshour/show/with-millions-looking-for-work-stigmas-create-a-dearth-of-skilled-tradespeople"
    return (
      
      <div>
          <h3>Trade Schools</h3>
        <li>
            <p>Trade schools are <a target="_blank" href={traditionalVsTradeSchoolCost} rel="noreferrer">generally much less expensive than a 4 year university</a> and provide a good avenue for students not seeking a traditional college experience. 
                There are several well paying career options by going this route. Some career options from going this route include: 
                real estate broker, electrician, mechanic, carpenter, heavy equipment operator, plumber, truck driver, and many 
                others <a target="_blank" href={tradeSchoolCareers} rel="noreferrer">(find more options here)</a>.
                Several of these higher paying options have pay competitive with bachelor degree holders from a traditional 
                university <a target="_blank" href={tradeSchoolPay} rel="noreferrer">(see here for examples)</a>. 
                The median salary for a <a target="_blank" href={bachelorDegreePay} rel="noreferrer">someone with a bachelor degree in 2019 was $64,896</a>.
            </p>
            <p>  These careers aren't exactly glorified in America, but the people who work these trades do important work and also make a good living. 
              And like other professions that require a degree, high performing individuals in these trade school fields can <a target="_blank" href={tradeSchoolHighPaying} rel="noreferrer">earn upwards
                of 6 figures with enough experience and hard work</a>. There are lots of resources for researching this choice further on your own, 
                but <a target="_blank" href={traditionalVsTradeschoolComparison} rel="noreferrer">here is one article</a> comparing trade schools to traditional colleges
                and <a target="_blank" href={blueCollarLaborShortage} rel="noreferrer">here is a video PBS</a> did on the blue-collar labor shortage in America.</p>
        </li>
      </div>
    );
  }
  
  export default TradeSchools;

