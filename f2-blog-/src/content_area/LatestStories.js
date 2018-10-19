import React from 'react';
import PropTypes from 'prop-types';
import StoryPreview from './StoryPreview';

const LatestStories = props =>
	<div>
		<h2>{props.title}</h2>
		<hr/>
		<div className="card-deck my-4">
			{props.stories.map((story, index) =>
				<StoryPreview url={story.image.url}
							  alt={story.image.alt}
							  title={story.title}
					   		  caption={story.caption}
					   		  updated_at={story.updated_at}
					   		  key={index}/>

			)}

		</div>
	</div>

LatestStories.propTypes = {
	title: PropTypes.string.isRequired,
	stories: PropTypes.array,
}

export default LatestStories;