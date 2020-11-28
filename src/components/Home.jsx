import React, { Component } from 'react';


class Home extends Component {
   constructor(props) {
      super(props);

      this.onChange = this.onChange.bind(this);
   }

   onChange(e) {
      this.props.newPage(e.target.getAttribute('name'));
   }

   render() {
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
                              Hi
                              <br/>
                              I'M SEN
                           </p>
                        </div>
                        <div name='about'className='homeNav-nav-link change-to-outline' onClick={this.onChange}>ABOUT</div>
                        <div name='projects'className='homeNav-nav-link change-to-outline' onClick={this.onChange}>PROJECT/S</div>
                        <div className='homeNav-nav-link change-to-outline'>CONTACT</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Home;