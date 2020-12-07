import React from 'react';
// import coffee from '../images/codecoffee1.jpg';

const Project = () => {
  	return (
    	<div className='project-container' >
			<h1 className='setStyle-h1'>Project/S</h1>

			<div className='project-wrapper'>

				<div className='project-box'>
					<p className='project-box-front'>CalculatorJS</p>
					<div className='project-box-back'>
						<p>A simple calculator created with just vanilla JS</p>
						<p className='project-box-detail'>Tools used: JavaScript, ReactJS, Webpacks</p>
					</div>
				</div>

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