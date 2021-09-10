import React, { useState } from 'react'
import './collegeSearch.css'
import InfoForm from './collegeSearchComponents/infoForm'
import CollegeData from './collegeSearchComponents/collegeData'

function CollegeSearch() {
  const [usState, setUsState] = useState("IL");
  const [PI, setPI] = useState("60000");
  const [collegeName, setCollegeName] = useState("");
  const [sortType, setSortType] = useState("testScore")
  const [cardsPerPage, setCardsPerPage] = useState("24")
  const [CC, setCC] = useState(true);
  const [pubUniv, setPubUniv] = useState(true);
  const [privUniv, setPrivUniv] = useState(true);
  const [TS, setTS] = useState(true);
  const [sem, setSem] = useState(true);
  const [allType, setAllType] = useState(true);
  const [resultFilters, setResultFilters] = useState([])



  /* US state change*/
  function handleUSStateChg(e) {
    setUsState(e.target.value);
  }
  /* Parental income change*/
  function handlePIChg(e) {
    setPI(e.target.value);
  }

  /* College name change*/
  function handleCollegeNameChg(e) {

    setCollegeName(e.target.value);
  
  }

  function handleSortChg(e) {
    setSortType(e.target.value)
  }

  function handleCardsPerPageChg(e) {
    if (e.target.value !== "all") {
      setCardsPerPage(Number(e.target.value))
    }
    //  else {
    //     setCardsPerPage(cards.length)
    //  }
  }

  /* Update state to show community colleges*/
  function handleCCChg(e) {
    if (!e.target.checked) {
      setAllType(false)
    }

    setCC(e.target.checked);
  }

  /* Update state to show public universities*/
  function handlePubUnivChg(e) {
    if (!e.target.checked) {
      setAllType(false)
    }

    setPubUniv(e.target.checked);
  }

  /* Update state to show private universities*/
  function handlePrivUnivChg(e) {
    if (!e.target.checked) {
      setAllType(false)
    }

    setPrivUniv(e.target.checked);
  }

  /* Update state to show trade schools*/
  function handleTSChg(e) {
    if (!e.target.checked) {
      setAllType(false)
    }

    setTS(e.target.checked);
  }

  /* Update state to show seminaries*/
  function handleSemChg(e) {

    if (!e.target.checked) {
      setAllType(false)
    }

    setSem(e.target.checked);
  }

  /* Update state to show all college types*/
  function handleAllTypeChg(e) {

    if (e.target.checked) {
      setCC(true)
      setPubUniv(true)
      setPrivUniv(true)
      setTS(true)
      setSem(true)
    } else {
      setCC(false)
      setPubUniv(false)
      setPrivUniv(false)
      setTS(false)
      setSem(false)
    }

    setAllType(e.target.checked);
  }

  function addAddtFilters(tuition, cost, SATScore, ACTScore, gradRate, acceptRate, e) {
    e.preventDefault()
    setResultFilters([tuition, cost, SATScore, ACTScore, gradRate, acceptRate])
  }



  return (
    <div className="site-college-info-container">
      <InfoForm handleUSStateChg={handleUSStateChg} handlePIChg={handlePIChg} handleCollegeNameChg={handleCollegeNameChg} 
        handleSortChg={handleSortChg} handleCardsPerPageChg={handleCardsPerPageChg}

        handleCCChg={handleCCChg} handlePubUnivChg={handlePubUnivChg} handlePrivUnivChg={handlePrivUnivChg}
        handleTSChg={handleTSChg} handleSemChg={handleSemChg} handleAllTypeChg={handleAllTypeChg}

        CC={CC} pubUniv={pubUniv} privUniv={privUniv} TS={TS} sem={sem} allType={allType}

        addAddtFilters={addAddtFilters} />

      <CollegeData usState={usState} PI={PI} collegeName={collegeName} sortType={sortType} 
        cardsPerPage={cardsPerPage} CC={CC} pubUniv={pubUniv} privUniv={privUniv} 
        TS={TS} sem={sem} allType={allType} resultFilters={resultFilters} />
      {/* Empty paragraph element because of grid styling
          Need data credit to be centered under CollegeData and not InfoForm */}
      <p></p>
      <p className="dataCredit">Data from the <a href="https://collegescorecard.ed.gov/data/" target="_blank" rel="noreferrer">College Scorecard</a></p>

    </div>
  );
}

export default CollegeSearch;
