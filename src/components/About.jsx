import React from 'react';
import coffee from '../images/codecoffee1.jpg';

const About = () => {
  return (
    <div className='innerL-container' >
      <h1 className='slide-right'>.Abouts(<span className='about-style'>'me'</span>)</h1>
      <div className='aboutme-wrapper slide-left'>
        <p>
          Hi, I'm Sen - a <span className='about-style'>Full-Stack Software Engineer </span> 
          that graduated from <span className='about-style'>Hack Reactor @ Galvanize</span>.
          I am a <span className='about-style'>Sci-Fi</span> nerd at heart that loves drinking 
          <span className='about-style'> coffee</span> and talking about tech/bio 
          <span className='about-style'> startups</span>. Currently, I am based out of
          <span className='about-style'> Seattle</span> and is looking for new and exciting opportunities.
        </p>
      </div>
      <div className='row row-container'>
        <div className='column c1'>
          <div className='aboutskill-wrapper slide-top'>
            <p><span className='about-style'>Education</span>&nbsp;&nbsp;Seattle University + Hack Reactor @ Galvanize</p>
            <p><span className='about-style'>Languages</span>&nbsp;&nbsp;JavaScript, HTML, CSS</p>
            <p><span className='about-style'>Database</span>&nbsp;&nbsp;MongoDB, MySQL, PostgreSQL</p>
            <p><span className='about-style'>Frameworks</span>&nbsp;&nbsp;Express, ReactJS, NodeJS</p>
            <p><span className='about-style'>Testing</span>&nbsp;&nbsp;Jest, Enzyme, Mocha-Chai</p>
          </div>
        </div>
        <div  className='column'>
          <img className='about-col-img choseImg' src={ coffee }/>
        </div>
      </div>
    </div>
  )
}

export default About;