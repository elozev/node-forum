import React from 'react';
import PropTypes from 'prop-types';

const StoryMeta = props =>
	<div>
		<div className="featured-image text-center thumbnail mb-4">
			<img className="img-fluid overlay" src={props.img.url} alt={props.img.alt}/>
			<div className="caption text-white text-center">
				<div className="smoked-effect bg-dark">
					<h2>{props.title}</h2>
					<hr/>
					<h5>{props.subtitle}</h5>
				</div>
			</div>
		</div>


		<p>{props.text}</p>
	</div>

StoryMeta.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	img: PropTypes.object.isRequired,
	text: PropTypes.string.isRequired,
}

export default StoryMeta;