import React from 'react';
import PropTypes from 'prop-types';

const CategoriesThumbnails = props =>
	<div>
      	<h2 className="mt-5">Categories</h2>
		<hr/>

		<div className="row mb-2">
			{props.categories.map((category) => 
				<a href={category.link}>
					<div className="col-sm-3 container mb-2">
						<div className="text-center thumbnail">
							<img src={category.thumbnail} className="rounded img-responsive" alt="..."/>
							<div className="caption text-white">{category.title}</div>
						</div>
					</div>
				</a>
			)}
		</div>
	</div>


CategoriesThumbnails.propTypes = {
	categories: PropTypes.array.isRequired
}

export default CategoriesThumbnails;