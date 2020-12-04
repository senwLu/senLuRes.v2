import React, { Component } from 'react';

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
            <div className='navBar-container'>
               <div name='home' onClick={this.onChange}>HOME</div>
               <div className='change-to-outline'>ABOUT</div>
               <div name='project' onClick={this.onChange}>PROJECT/S</div>
               <div name='contact' onClick={this.onChange}>CONTACT</div>
            </div>
         )         
      } else if (this.props.page === 'project') {
         return (
            <div className='navBar-container'>
               <div name='home' onClick={this.onChange}>HOME</div>
               <div name='about' onClick={this.onChange}>ABOUT</div>
               <div className='change-to-outline'>PROJECT/S</div>
               <div name='contact' onClick={this.onChange}>CONTACT</div>
            </div>
         )     
      }

   }
}

export default NavBar;