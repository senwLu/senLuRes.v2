import React from 'react';
import About from './About.jsx';
import Project from './Project.jsx'

const PgContainer = ( {pgInfo} ) => {

  if(pgInfo === 'about') {
    return (
      <div>
        <About />
      </div>
    )
  } else if (pgInfo === 'project') {
    return (
      <div>
        <Project />
      </div>
    )
  }
}

export default PgContainer;