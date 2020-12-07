import React from 'react';
// import coffee from '../images/codecoffee1.jpg';

const About = () => {
  	return (
    	<div className='about-container' >
			<h1 className='setStyle-h1'>ABOUT</h1>
			<div className='aboutme-wrapper'>
				<p>
					Hi, I'm Sen - a <span className='style-color'>Full-Stack Software Engineer </span> 
					that graduated from <span className='style-color'>Hack Reactor @ Galvanize</span>.
					I am a <span className='style-color'>Sci-Fi</span> nerd at heart that loves drinking 
					<span className='style-color'> coffee</span> and talking about tech/bio 
					<span className='style-color'> startups</span>. Currently, I am based out of
					<span className='style-color'> Seattle</span> and is looking for new and exciting opportunities.
				</p>
			</div>
			<div>
				<p><span className='style-color'>Education</span>&nbsp;&nbsp;Seattle University + Hack Reactor @ Galvanize</p>
				<p><span className='style-color'>Languages</span>&nbsp;&nbsp;JavaScript, HTML, CSS</p>
				<p><span className='style-color'>Database</span>&nbsp;&nbsp;MongoDB, MySQL, PostgreSQL</p>
				<p><span className='style-color'>Frameworks</span>&nbsp;&nbsp;Express, ReactJS, NodeJS</p>
				<p><span className='style-color'>Testing</span>&nbsp;&nbsp;Jest, Enzyme, Mocha-Chai</p>
			</div>
		
    	</div>
  	)
}

export default About;