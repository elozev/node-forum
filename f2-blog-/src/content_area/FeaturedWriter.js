import React from 'react';
import PropTypes from 'prop-types';
import StoryPreview from './StoryPreview'

const FeaturedWriter = props =>
	<div class="bg-dark p-4 my-4">
		<h4 class="text-white">Featured Writer</h4>
		<div class="row">
			<div class="col-lg-4 p-2">
				<img src={props.writer_image.url} class="img-fluid rounded-circle" alt=""/>
			</div>
			<div class="col-lg-4 p-2 text-white">
				<h4>{props.writer_name}</h4>
				<p>{props.writer_description}</p>
				<a href="" class="btn btn-light" role="button">Follow</a>
			</div>
			<div class="col-lg-4 p-2">
				<StoryPreview url={props.story.image.url}
							  alt={props.story.image.alt}
							  title={props.story.title}
					   		  caption={props.story.caption}
					   		  updated_at={props.story.updated_at}/>
			</div>
		</div>
	</div>

FeaturedWriter.propTypes = {
	writer_name: PropTypes.string.isRequired,
	writer_description: PropTypes.string.isRequired,
	writer_image: PropTypes.array.isRequired,
	story: PropTypes.array.isRequired
}

export default FeaturedWriter;