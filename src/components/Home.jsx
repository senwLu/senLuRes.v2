import React from 'react';
import space from '../images/space4.jpg';

const Home = () => {
  return (
    <div className="innerL-container">
      <div className="home-wrapper">
        <h1 className='slide-right'>.Home(<span className='about-style'>'seattle'</span>)</h1>
        <img src={ space } />
      </div>
    </div>
  )
}

export default Home;