import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CollegeCard from './collegeSearchComponents/collegeCard'
// import './favorites.css'


const stateNames = {
"AL": "Alabama",
"AK": "Alaska",
"AZ":" Arizona",
"AR": "Arkansas",
"CA": "California",
"CO": "Colorado",
"CT": "Connecticut",
"DE": "Delaware",
"DC": "District Of Columbia",
"FL":"Florida",
"GA":"Georgia",
"HI":"Hawaii",
"ID":"Idaho",
"IL":"Illinois",
"IN":"Indiana",
"IA":"Iowa",
"KS":"Kansas",
"KY":"Kentucky",
"LA":"Louisiana",
"ME":"Maine",
"MD":"Maryland",
"MA":"Massachusetts",
"MI":"Michigan",
"MN":"Minnesota",
"MS":"Mississippi",
"MO":"Missouri",
"MT":"Montana",
"NE":"Nebraska",
"NV":"Nevada",
"NH":"New Hampshire",
"NJ":"New Jersey",
"NM":"New Mexico",
"NY":"New York",
"NC":"North Carolina",
"ND":"North Dakota",
"OH":"Ohio",
"OK":"Oklahoma",
"OR":"Oregon",
"PA":"Pennsylvania",
"RI":"Rhode Island",
"SC":"South Carolina",
"SD":"South Dakota",
"TN":"Tennessee",
"TX":"Texas",
"UT":"Utah",
"VT":"Vermont",
"VA":"Virginia",
"WA":"Washington",
"WV":"West Virginia",
"WI":"Wisconsin",
"WY":"Wyoming"}


function Favorites() {
  // let cards = []
  const [cards, setCards] = useState([])

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    setupCollegeData().then(colleges => {
      let favorite_cards = []
      console.log(colleges)

      for (let state in colleges) {
        favorite_cards.push(<h2>{stateNames[state]}</h2>)
        let college_card_array = []
        for (let idx in colleges[state]) {
          college_card_array.push(<CollegeCard college={colleges[state][idx]}/>)
        }
        favorite_cards.push(<div className="cards-container">{college_card_array}</div>)

      }
      setCards(favorite_cards)
    })
    
  }, []);

  async function setupCollegeData() {
    let college_state = {}
    for (let i = 0; i < localStorage.length; i++) {     
      let key = localStorage.key(i);

      if (Number(key) > 0) {
        let res = await axios.get(`/apiSingle`, {params: {id: key}})
        // cards_array.push(<CollegeCard college={res.data} PI={5000}/>)
        if (res.data.state in college_state) {
          let state = res.data.state
          college_state[state].push(res.data)
        } else{
          let state = res.data.state
          college_state[state] = [res.data]
        }
      }
    } 
    return college_state
  }

  return (
    <div>
    
      {cards.length > 0 ? cards : <p>No colleges fit the criteria</p>}
       
    </div>
  );
}

export default Favorites;
