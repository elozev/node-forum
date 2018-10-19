import React from 'react';
import PropTypes from 'prop-types';

const CommentInput = props =>
	<div>
		<h3 className="mt-4">Leave a comment:</h3>
		<hr/>

		<div className="input-group">
			<textarea className="form-control" aria-label="With textarea" placeholder="Your creative opinion about this article ..." value={props.pendingComment} onChange={props.commentHandler}></textarea>
		</div>
		<button className="btn btn-dark my-2" type="submit" onClick={props.handleSubmit}>Comment</button>
	</div>

CommentInput.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	commentHandler: PropTypes.func.isRequired,
	pendingComment: PropTypes.string.isRequired
}

export default CommentInput;