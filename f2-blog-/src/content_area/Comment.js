import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Comment = props =>
	<div>
        <li className="list-group-item my-2 bg-light clearfix">
	      <div className="row">
	        <div className="col-2">
	          <img src={props.author.img.url} className="img-fluid rounded-circle" alt={props.author.img.alt}/>
	        </div>
	        <div className="col-10">
	          <div className="comment-details float-left">
	            <p className="text-secondary font-weight-bold mx-2 details">{props.author.name}</p>
	            <p className="text-secondary font-italic mx-2 details">{props.author.date}</p>
	            <p className="mx-2 mt-3">{props.text}</p>

	          </div>
	          <div className="float-right">
	            <button type="button" className="btn btn-light" onClick={() => props.voteHandler(true, props.index)}>
	            	<FontAwesomeIcon icon="thumbs-up"/>
	            </button>
	            {props.rating}
	            <button type="button" className="btn btn-light" onClick={() => props.voteHandler(false, props.index)}>
	            	<FontAwesomeIcon icon="thumbs-down"/>
	            </button>
	          </div>
	        </div>
	      </div>
	    </li>
	</div>

Comment.propTypes = {
	text: PropTypes.string.isRequired,
	author: PropTypes.object.isRequired,
	rating: PropTypes.number.isRequired,
	voteHandler: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired
}

export default Comment;