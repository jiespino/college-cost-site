import React from 'react'
import './about.css'
import SitePurpose from './aboutComponents/sitePurpose'
import ReducingCosts from './aboutComponents/reducingCosts'


function About() {

  return (

    <div className="about-container">
      <div className="about-divider">
        <SitePurpose />
        <ReducingCosts />
      </div>
    </div>
  );
}

export default About;
