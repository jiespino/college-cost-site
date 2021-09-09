import React, {useState} from 'react'
import './infoForm.css'

function InfoForm(props) {

  const [tuition, setTuition] = useState(null);
  const [cost, setCost] = useState(null);
  const [SATScore, setSATScore] = useState(null);
  const [ACTScore, setACTScore] = useState(null);

  /* Tuition change*/
  function handleTuitionChg(e) {
    setTuition(e.target.value);
  }

  /* Average cost change*/
  function handleCostChg(e) {
    setCost(e.target.value);
  }

  /* SAT score change*/
  function handleSATChg(e) {
    setSATScore(e.target.value);
  }

  /* ACT score change*/
  function handleACTChg(e) {
    setACTScore(e.target.value);
  }


  return (
    <div className="InfoForm">
      <div className="info-form-container">
        <form className="info-form" onSubmit={(e) => props.addAddtFilters(tuition, cost, SATScore, ACTScore, e)}>

          <div className="filter-init-crit">
          <p className="filter-title">Initial criteria</p>
            <label>
              State of residency? 
              <select onChange={props.handleUSStateChg} defaultValue={"IL"}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>	
              </label>

              <label>Parental income:
                <input className="type-input" type="number" name="parentIncome" min="0" max="10000000000" onChange={props.handlePIChg} defaultValue={"60000"}/>
            </label>

            <label>Search By Name:
                  <input className="type-input" type="text" name="collegeName" onChange={props.handleCollegeNameChg}/>
            </label>

            <p className="filter-title">Result options</p>

            <label>Sort by
            <select className="sort-select"onChange={props.handleSortChg} defaultValue={"testScore"}>
                <option value="testScore">Test scores</option>
                <option value="cost">Cost</option>
                <option value="tuition">Tuition</option>

              </select>
              </label>

            <label>
              Show
              <select className="page-entries-select" onChange={props.handleCardsPerPageChg} defaultValue={"24"}>
                <option value="6" >6</option>
                <option value="12">12</option>
                <option value="24">24</option>
                <option value="96">96</option>
                <option value="all">All</option>
              </select>
              Entries
              </label>

            </div>    

             <div className="filter-college-type">
              <p className="filter-title">College Type</p>
              <label>
                All
                <input id="allType" className="college-filter" name="allType" type="checkbox" value="allType" checked={props.allType} onChange={props.handleAllTypeChg}/>
                </label>	
              <label>
                Community College
                <input id="CC" className="college-filter" name="CC" type="checkbox" value="CC" checked={props.CC} onChange={props.handleCCChg}/>
                </label>
                <label>
                Public University
                <input id="pubUniv" className="college-filter" name="pubUniv" type="checkbox" value="pubUniv" checked={props.pubUniv} onChange={props.handlePubUnivChg}/>
                </label>
                <label>
                Private University
                <input id="privUniv" className="college-filter" name="privUniv" type="checkbox" value="privUniv" checked={props.privUniv} onChange={props.handlePrivUnivChg}/>
                </label>          
                <label>
                Trade School
                <input id="TS" className="college-filter" name="TS" type="checkbox" value="TS" checked={props.TS} onChange={props.handleTSChg}/>
                </label>	
                <label>
                Seminary
                <input id="sem" className="college-filter" name="sem" type="checkbox" value="sem" checked={props.sem} onChange={props.handleSemChg}/>
                </label>	
              </div>

              <div className="filter-addit-options">
                <p className="filter-title">Additional Filters</p>
                <label> Tuition:
                  <input className="type-input" type="number" name="tuiton" min="0" max="10000000000" onChange={handleTuitionChg}/>
                </label>
                <label> Average Cost:
                  <input className="type-input" type="number" name="cost" min="0" max="10000000000" onChange={handleCostChg}/>
                </label>
                <label>SAT Score:
                  <input className="type-input" type="number" name="satScore" min="0" max="1600" onChange={handleSATChg}/>
                </label>
                <label>ACT Score:
                  <input className="type-input" type="number" name="satScore" min="0" max="36" onChange={handleACTChg}/>
                </label>
                <button>Filter</button>  
              </div>
        </form>
      </div>
    </div>
  );
}

export default InfoForm;
