import React, {Component} from 'react';
import Sidebar from '../sidebar/Sidebar';
import Row from './Row';


class Layout extends Component{
	state = {
		pendingSearchText: "",
		notificationCount: 3,
		categories: [
		  {
		    name: "Art",
		    link: 'link1'
		  },
		  {
		    name: "Diving",
		    link: 'link2'
		  },
		  {
		    name: "Technology",
		    link: 'link3'
		  },
		]
	}

	handleSearchText = event =>
		this.setState({pendingSearchText: event.target.value})

	onSearchSubmit = e => {
		e.preventDefault();
		// TODO: API call for search
		console.log('Search for', this.state.pendingSearchText);
		this.setState({pendingSearchText: ""});
	}

	render() {
		return (
		  <div className="App">
		    <Row>
			    <Sidebar
			        siteTitle="Blogster"
			        handleSearchEvent={this.onSearchSubmit}
			        handleSearchInput={this.handleSearchText}
			        getPendingSearchText={this.state.pendingSearchText}
			        notificationCount={this.state.notificationCount}
			        categories={this.state.categories}/>

	        	<div className="col-lg-9 col-xl-10">
					<div className="container mt-4">
		    			{this.props.children}
		    		</div>
	    		</div>
		    </Row>
		  </div>
		);
	}

}

export default Layout;