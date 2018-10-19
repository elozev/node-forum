import React from 'react';
import PropTypes from 'prop-types';

const StoryPreview = props =>
	<div className="card">
		<img className="card-img-top" src={props.url} alt={props.alt}/>
		<div className="card-body">
			<h5 className="card-title">{props.title}</h5>
			<p className="card-text">{props.caption}</p>
		</div>
		<div className="card-footer">
			<small className="text-muted">Updated at: {props.updated_at}</small>
		</div>
	</div>

StoryPreview.propTypes = {
	url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
	updated_at: PropTypes.string.isRequired,
}

export default StoryPreview;