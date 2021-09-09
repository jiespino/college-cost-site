import React, {useState} from 'react'
import "./statePrograms.css"

import {stateProgramsObject} from './stateProgramComponents/stateProgramsObject'
import StateInput from './stateProgramComponents/stateInput'

function StatePrograms() {
    const [state, setState] = useState("IL")
    
  function handleStateChange(e) {
      console.log(e.target.value)
      setState(e.target.value)
  }
  return (

    <div className="container">
        <StateInput handleStateChange={handleStateChange}/>
        {stateProgramsObject[state]}
    </div>
  );
}

export default StatePrograms;
