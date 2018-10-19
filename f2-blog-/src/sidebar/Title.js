import React from 'react';
import PropTypes from 'prop-types';

const Title = props =>
	<div className="text-center">
		<h1 className="text-center">
			<a className="mb-2 text-white" href="">{props.title}</a>
		</h1>
	</div>

Title.propTypes = {
	title: PropTypes.string.isRequired,
}

export default Title;