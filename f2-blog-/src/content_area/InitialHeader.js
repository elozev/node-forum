import React from 'react';
import PropTypes from 'prop-types';


const InitialHeader = props =>
	<div>
		<h1 className="display-2">Blogster</h1>
		<h4 className="mb-5">The blog you would love to be part of!</h4>
		<hr className="sign-in-breakline"/>
		<h4 className="font-weight-bold mb-3">Sign {props.text}</h4>
	</div>

InitialHeader.propTypes = {
	text: PropTypes.string.isRequired
}

export default InitialHeader;