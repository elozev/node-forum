import React, { Component } from 'react';
import Footer from '../footer/Footer';

class Row extends Component {
	render() {
		return(
			<div>
				<div className="row">
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
}

export default Row;