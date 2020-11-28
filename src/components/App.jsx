import React, { Component } from 'react';
import Home from './Home.jsx';
import About from './About.jsx';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          page: "home"
      };
      this.changePage = this.changePage.bind(this);
  };
  
  changePage = (page) => {
    this.setState({ page })
  }

  render() {
    if (this.state.page === 'home') {
      return (
         <div className='total-wrapper'>
            <Home newPage={this.changePage}/>
         </div>
      )
    } else if (this.state.page === 'about') {
      return (
         <div className='total-wrapper'>
            <About />
         </div>
      )
    }
  };
};

export default App;