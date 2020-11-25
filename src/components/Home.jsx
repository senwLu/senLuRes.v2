import React from 'react';


const Home = () => {
  return (

   <div className='container'>
      <div className='homeIMG-box'>
         <div className='homeIMG-innerBox'>
            <div className='homeImg'></div> 
         </div>   
      </div>

      <div className='homeNav-container'>
         <div className='homeNav-box'>
            <div className='homeNav-innerBox'>
               <div className='homeNav-nav'>
                  <div>
                     <p>
                        Full-Stack
                        <br/>
                        Developer
                     </p>
                  </div>
                  <div data-text='text' className='homeNav-nav-link change-to-outline'>ABOUT</div>
                  <div className='homeNav-nav-link change-to-outline'>PROJECT/S</div>
                  <div className='homeNav-nav-link change-to-outline'>CONTACT</div>
               </div>
            </div>
      </div>

      
         
      </div>
   </div>
  )
}

export default Home;