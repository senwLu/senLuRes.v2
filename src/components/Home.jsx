import React from 'react';
import space from '../images/space4.jpg';

const Home = () => {
  return (
   <div className='container'>
      <div className='homeIMG-box'>
         <div className='homeIMG-innerBox'>
            <div className='homeImg'></div> 
         </div>   
      </div>
      <div className='homeNav-box'>
         <div className='homeNav-text'>
            <div className='homeNav-nav'>
               <div className='homeNav-nav-btn'>ABOUT</div>
               <div className='homeNav-nav-btn'>PROJECT/S</div>
               <div className='homeNav-nav-btn'>CONTACT</div>
            </div>
         </div>
      </div>
   </div>
  )
}

export default Home;