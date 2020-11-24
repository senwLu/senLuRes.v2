import React, { Component } from 'react';
import LeftBox from './LeftBox.jsx';
import Navigation from './Navigation.jsx';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          page: "projects"
      };
      this.changePage = this.changePage.bind(this);
  };
  
  changePage = (page) => {
    this.setState({ page })
  }

  render() {
      return (
        <div className="total-wrapper">
          <LeftBox page={ this.state.page }/>
          <Navigation newPage={ this.changePage }/>
        </div>
      )
  };
};

export default App;