import React from 'react';
// import coffee from '../images/codecoffee1.jpg';

const Project = () => {
  	return (
    	<div className='project-container' >
			<h1 className='setStyle-h1 slide-bottom'>Project/S</h1>

			<div className='project-wrapper'>
				<a href="https://github.com/senwLu/calc_React" target="_blank" className='project-box'>
					<p className='project-box-title'>CalculatorJS</p>
					<p className='project-box-detail'>Tools used: JavaScript, ReactJS, Webpacks</p>
				</a>


				<div className='project-box'>
					<p>Placeholder 2</p>
				</div>

				<div className='project-box'>
					<p>Placeholder 3</p>
				</div>

				<div className='project-box'>
					<p>Placeholder 4</p>
				</div>

				<div className='project-box'>
					<p>Placeholder 5</p>
				</div>

				<div className='project-box'>
					<p>Placeholder 6</p>
				</div>

			</div>

    	</div>
  	)
}

export default Project;