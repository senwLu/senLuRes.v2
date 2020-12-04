import React, { Component } from 'react';

class Home extends Component {
   constructor(props) {
      super(props);

      this.onChange = this.onChange.bind(this);
   }

   onChange(e) {
      this.props.chgPg(e.target.getAttribute('name'));
   }

   render() {
      return (

         <div>

            <div className='homeIMG-box'>
               <div className='homeIMG-innerBox'>
                  <div className='homeImg'></div> 
               </div>   
            </div>

            <div className='homeNav-container'>
               <div className='homeNav-box'>
                  <div className='homeNav-innerBox'>
                     <div className='homeNav-nav'>
                        <div className='homeNav-into'>
                           <span>Hi</span><br />
                           <span>I'M SEN</span>
                        </div>
                        <div className='change-to-outline'>
                           <span className='homeNav-nav-link' name='about' onClick={this.onChange}>ABOUT</span><br />
                           <span className='homeNav-nav-link' name='project' onClick={this.onChange}>PROJECT/S</span><br />
                           <span className='homeNav-nav-link'>CONTACT</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </div>
      )
   }
}

export default Home;