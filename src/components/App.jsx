import React, { Component } from 'react';
import Home from './Home.jsx';


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
          <Home />
        </div>
      )
  };
};

export default App;