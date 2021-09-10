import React, { useState, useEffect } from 'react'
import './collegeData.css'
import axios from 'axios'
import CollegeCard from './collegeCard'

const testScoreMetric = "ACT75"
const costMetric = "totalCost"
const tuitionMetric = "tuition"

const CCType = { "1": "", "2": "", "3": "", "4": "" }
const TSType = { "-2": "", "10": "", "11": "", "12": "", "13": "" }
const univType = { "5": "", "6": "", "7": "", "8": "", "9": "", "10": "", "11": "", "12": "", "13": "", "14": "", "15": "" }


function CollegeData(props) {
  const [cards, setCards] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  let lastPage = (cards.length % props.cardsPerPage > 0) ? Math.floor(cards.length / props.cardsPerPage) + 1 : cards.length / props.cardsPerPage

  const pageButton = [<li className="page-button-single" onClick={(e) => handlePageChg(e)}>1</li>,
                      <li className="page-button-single selected-page">{page}</li>,
                      <li className="page-button-single" onClick={(e) => handlePageChg(e)}>{lastPage}</li>]

  const nextLastButtons = smallPage() ? <div className="prev-next-button-container">
                                          <button className="prev-next-buttons" onClick={lastPageCards}>{smallPage() ? "": "Last"} &raquo;</button>
                                          <button className="prev-next-buttons" onClick={nextPageCards}>{smallPage() ? "": "Next"} &#8250;</button>
                                        </div>: 
                                        
                                        <div className="prev-next-button-container">
                                          <button className="prev-next-buttons" onClick={nextPageCards}>{smallPage() ? "": "Next"} &#8250;</button>
                                          <button className="prev-next-buttons" onClick={lastPageCards}>{smallPage() ? "": "Last"} &raquo;</button>
                                        </div>


  let resultsBar = (cards.length > 0) ? 
    <div className="cards-button-container">
      <div className="prev-next-button-container">
        <button className="prev-next-buttons" onClick={beforePageCards}>&#8249; {smallPage() ? "": "Previous"}</button>
        <button className="prev-next-buttons" onClick={firstPageCards}>&laquo; {smallPage() ? "": "First"}</button>
      </div>
      <div className="results-container">
        <ul className="page-buttons">
          {pageButton}
        </ul>
      </div>
      {nextLastButtons} 
    </div> : null

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let college_array = []
    let college_object;
    let cards_array;

    axios.get(`/api`, {
      params: {
        state: props.usState
      }
    })
    .then(res => {
      let colleges = res.data;
        colleges.forEach(function (college) {
          let cost = getCost(college)
          college_object = college
          college_object["totalCost"] = cost


          if (collegeTypeFilter(college_object, props.resultFilters)) {
            college_array.push(college_object)
        }
      });

      college_array.sort(sortCards())
      cards_array = setupCollegeCards(college_array)
      setCards(cards_array)
      setPage(1)
      window.addEventListener('resize', handleResize);

    })

  }, [props.usState, props.PI, props.collegeName, props.sortType, props.cardsPerPage, props.CC, props.pubUniv, props.privUniv, props.TS, props.sem, props.resultFilters]);

  function setupCollegeCards(college_array) {
    let cards = []
    for (const college in college_array) {
      cards.push(<CollegeCard college={college_array[college]} PI={props.PI} />)
    }
    setLoading(true)
    return cards
  }

  function handleResize(e) {
    setWindowWidth(window.innerWidth)
  }

  function getCost(college) {
    let parentalIncome = Number(props.PI)
    let cost;

    if (parentalIncome > 0 && parentalIncome < 30001) {
      cost = Number(college['pubCostNPT41']) || Number(college['privCostNPT41'])
        || Number(college['progCostNPT41']) || Number(college['othCostNPT41'])
    }
    else if (parentalIncome > 30000 && parentalIncome < 48001) {
      cost = Number(college['pubCostNPT42']) || Number(college['privCostNPT42'])
        || Number(college['progCostNPT42']) || Number(college['othCostNPT42'])
    }
    else if (parentalIncome > 48000 && parentalIncome < 75001) {
      cost = Number(college['pubCostNPT43']) || Number(college['privCostNPT43'])
        || Number(college['progCostNPT43']) || Number(college['othCostNPT43'])
    }
    else if (parentalIncome > 75000 && parentalIncome < 110000) {
      cost = Number(college['pubCostNPT44']) || Number(college['privCostNPT44'])
        || Number(college['progCostNPT44']) || Number(college['othCostNPT44'])
    }
    else if (parentalIncome > 110000) {
      cost = Number(college['pubCostNPT45']) || Number(college['privCostNPT45'])
        || Number(college['progCostNPT45']) || Number(college['othCostNPT45'])
    }

    if (!cost) {
      cost = Number(college['pubCost']) || Number(college['privCost'])
        || Number(college['progCost']) || Number(college['othCost'])
    }

    if (isNaN(cost)) {
      return null
    }

    return cost
  }

  function collegeTypeFilter(college, resultFilters) {


    let tuition = Number(college.tuition)
    let cost = Number(college.totalCost);
    let SAT25 = Number(college.SAT25);
    let SAT75 = Number(college.SAT75);
    let ACT25 = Number(college.ACT25);
    let ACT75 = Number(college.ACT75);
    let gradRate = Number(college.gradRate) * 100
    let acceptRate = Number(college.admRate) * 100
    let collegeName = college.name.toLowerCase()
    let searchedName = props.collegeName.toLowerCase()

    let tuitionFilter = Number(resultFilters[0])
    let costFilter = Number(resultFilters[1])
    let SATFilter = Number(resultFilters[2])
    let ACTFilter = Number(resultFilters[3])
    let gradRateFilter = Number(resultFilters[4])
    let acceptRateFilter = Number(resultFilters[5]) 

    console.log("test")
    console.log(college)
    console.log(acceptRate)
    console.log(acceptRateFilter)
    console.log(resultFilters)
    // Filter results if tuition filter is applied 
    if (tuitionFilter && tuitionFilter < tuition) {
      return false
    }

    // Filter results if net cost filter is applied 
    if (costFilter && costFilter < cost) {
      return false
    }


    // Filter results if SAT score filter is applied 
    if (SATFilter && SATFilter < SAT25) {
      return false
    }

    // Filter results if ACT score filter is applied 
    if (ACTFilter && ACTFilter < ACT25) {
      return false
    }

    // Filter results if graduation rate filter is applied 
    if (gradRateFilter && gradRateFilter > gradRate) {
      return false
    }

    // If graduation rate filter and college doesn't have acceptance rate, filter collge out
    if (gradRateFilter && !gradRate) {
      return false
    }

    // Filter results if acceptance rate filter is applied 
    if (acceptRateFilter && acceptRateFilter > acceptRate) {
      return false
    }

    // If acceptance rate filter and college doesn't have acceptance rate, filter collge out
    if (acceptRateFilter && !acceptRate) {
      return false
    }

    if (props.collegeName !== "" && !collegeName.includes(searchedName)) {
      return false
    }

    // Filter results if sorting by cost and cost is null
    if (props.sortType === "cost" && college.totalCost === null) {
      return false
    }


    if (college.carnegieBasic === "24") {
      if (props.sem) {
        return true
      }
    }

    else if (college.carnegieBasic in TSType) {
      if (props.TS) {
        return true
      }
    }

    else if (college.carnegieUndergrad in CCType) {
      if (props.CC) {
        return true
      }
    }

    else if (college.pubCost !== "NULL" && college.carnegieUndergrad in univType) {
      if (props.pubUniv) {
        return true
      }
    }

    else if (college.privCost !== "NULL" && college.carnegieUndergrad in univType) {
      if (props.privUniv) {
        return true
      }
    }
    else {

    }

  }

  
  function handlePageChg(e) {

    let pageNum = Number(e.target.innerText)
    if (pageNum === page) {
      return
    }
    setPage(pageNum)
  }


  function nextPageCards() {
    let lastPage = (cards.length % props.cardsPerPage > 0) ? Math.floor(cards.length / props.cardsPerPage) + 1 : cards.length / props.cardsPerPage

    if (page === lastPage) {
      return
    }
    setPage(prevPage => prevPage + 1)
  }

  function firstPageCards() {
    if (page === 1) {
      return
    }
    setPage(1)
  }

  function beforePageCards() {
    if (page === 1) {
      return
    }
    setPage(prevPage => prevPage - 1)
  }

  function lastPageCards() {
    let lastPage = (cards.length % props.cardsPerPage > 0) ? Math.floor(cards.length/props.cardsPerPage) + 1 : cards.length/props.cardsPerPage

    if (page === lastPage) {
      return
    }
    setPage(lastPage)
  }

  function sortCards() {

   
    if (props.sortType === "testScore") {
      return sortByHighToLow(testScoreMetric)
    } 

    else if (props.sortType === "tuition") {
      return sortLowToHigh(tuitionMetric)
    } 
    
    else {
      return sortLowToHigh(costMetric)
    }

  }

  function sortByHighToLow(testMetric) {
    return function (a, b) {

      if (a[testMetric] === b[testMetric]) {
        return 0;
      }
      else if (a[testMetric] === "NULL") {
        return 1
      }
      else if (b[testMetric] === "NULL") {
        return -1
      }
      else {
        return Number(a[testMetric]) < Number(b[testMetric]) ? 1 : -1
      }
    }
  }

  function sortLowToHigh(costMetric) {
    return function (a, b) {

      if (a[costMetric] === b[costMetric]) {
        return 0;
      }
      else if (a[costMetric] === "NULL") {
        return 1
      }
      else if (b[costMetric] === "NULL") {
        return -1
      }
      else {
        return Number(a[costMetric]) > Number(b[costMetric]) ? 1 : -1
      }
    }
  }

  function smallPage() {
    return windowWidth < 768
  }
  return (
    <div className="college-data">
      {resultsBar}
      {/* If data hasn't loaded display loader. Else dispay college data, unless no colleges fit criteria and then display text signifying such. */}
      {loading ? <div className="cards-container">
        {cards.length > 0 ? cards.slice((page - 1) * props.cardsPerPage, page * props.cardsPerPage) : <p>No colleges fit the criteria</p>}
      </div> :
        <div className="loader"></div>}

      {resultsBar}
    </div>
  );
}

export default CollegeData;
