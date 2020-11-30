import React from 'react';
import About from './About.jsx';

const PgContainer = ( {pgInfo} ) => {

  if(pgInfo === 'about') {
    return (
      <div>
        <About />
      </div>
    )
  }
}

export default PgContainer;