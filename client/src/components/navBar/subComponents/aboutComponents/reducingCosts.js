
import EliteUniversityAid from './reducingCostComponents/eliteUniversityAid'
import StateAid from './reducingCostComponents/stateAid'
import TradeSchools from './reducingCostComponents/tradeSchools'
import CommunityColleges from './reducingCostComponents/communityColleges'
import FederalAid from './reducingCostComponents/federalAid'

function ReducingCosts() {

    return (

        <div>
            <ul>
                <EliteUniversityAid />
                <StateAid />
                <TradeSchools />
                <CommunityColleges />
                <FederalAid />
            </ul>
            {/* <h2>Tuition</h2>
        <p>Tuition costs for a 4 year public university have increased nearly 4 fold since the 1980s. The average cost of tuition for a public university is $9,580 in 2021.
            For private universities the tuition cost increase for this time period is 3-fold and the average price of tuition is $33,150 in 2021. </p>
        <img className="college-cost-graph" src={costGraph} alt="College tuition costs over time graph"></img>

        <h2>Cost of Attendence</h2>
        <p>In addition to tuition, students need to pay for books, food, housing, school fees, etc. Adding up all of these items, 
            the average annual cost of attending an in-state public university is $25,864. For private universities this is $53,949.</p>
        <img className="college-cost-table" src={costTable} alt="College attendence costs over time table"></img>
        <h2>Student Debt</h2>
        <p>Because of these increased costs, students need to rely more on student loans to finance their education. The average student debt for a student leaving college
            is $37,584 in 2020. Because of drastically increased prices, students should be more cognizant of ways to lower their educational expenses.
        </p> */}
        </div>
    );
}

export default ReducingCosts;
