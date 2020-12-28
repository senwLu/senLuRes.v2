import React, { Component } from 'react';
import linkedinPNG from '../images/linkedin-128.png';
import githubPNG from '../images/github-128.png';



class NavBar extends Component {
   constructor(props) {
      super(props);

      this.onChange = this.onChange.bind(this);
   }

   onChange(e) {
      this.props.chgPg(e.target.getAttribute('name'));
   }


   render(){

      if ( this.props.page === 'about') {
         return (
            <div>
               <div className='navBar-container'>
                  <div name='home' onClick={this.onChange}>HOME</div>
                  <div className='change-to-outline'>ABOUT</div>
                  <div name='project' onClick={this.onChange}>PROJECT/S</div>
               </div>
               <div className='icon-container'>
                  <a href="https://github.com/senwLu" target="_blank">
                     <img src={githubPNG} alt=""/>
                  </a>
                  <a href="https://linkedin.com/in/senwlu" target="_blank">
                     <img src={linkedinPNG} alt=""/>
                  </a>
               </div>               
            </div>

         )         
      } else if (this.props.page === 'project') {
         return (
            <div>
               <div className='navBar-container'>
                  <div name='home' onClick={this.onChange}>HOME</div>
                  <div name='about' onClick={this.onChange}>ABOUT</div>
                  <div className='change-to-outline'>PROJECT/S</div>
               </div>    
               <div className='icon-container'>
                  <a href="https://github.com/senwLu" target="_blank">
                     <img src={githubPNG} alt=""/>
                  </a>
                  <a href="https://linkedin.com/in/senwlu" target="_blank">
                     <img src={linkedinPNG} alt=""/>
                  </a>
               </div>            
            </div>

         )     
      }

   }
}

export default NavBar;