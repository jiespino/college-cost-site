
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
        </div>
    );
}

export default ReducingCosts;
