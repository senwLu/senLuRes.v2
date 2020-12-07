import React, { Component } from 'react';
import Home from './Home.jsx';
import PgContainer from './PgContainer.jsx';
import NavBar from './NavBar.jsx';


class App extends Component {
	constructor(props) {
		super(props);
			this.state = {
				page: "project"
			};
		this.changePage = this.changePage.bind(this);
	};
	
	changePage = (page) => {
		this.setState({ page })
	}

	render() {
		if (this.state.page === 'home') {
			return (
				<div className='totalContainer '>
					<Home chgPg={this.changePage}/>
				</div>
			)
		} else if (this.state.page !== 'home') {
			return (
				<div className='totalContainer'>
					<NavBar chgPg={this.changePage} page={this.state.page}/>
					<PgContainer pgInfo={this.state.page} />
				</div>
			)
		}
	};
};

export default App;