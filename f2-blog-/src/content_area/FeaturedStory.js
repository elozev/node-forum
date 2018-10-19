import React from 'react';
import PropTypes from 'prop-types';
import StoryPreview from './StoryPreview';

const FeaturedStory = props =>
	<div>
		<h2 className="mt-5">See our featured story:</h2>
		<hr />
		<StoryPreview url={props.url}
						alt={props.alt}
							caption={props.caption}
							updated_at={props.updated_at}/>
	</div>

FeaturedStory.propTypes = {
	url: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	caption: PropTypes.string.isRequired,
	updated_at: PropTypes.string.isRequired,
}

export default FeaturedStory;