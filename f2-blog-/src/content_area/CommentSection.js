import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

const CommentSection = props =>
	<div>
		<h2 className="mt-3">Comments</h2>
		<hr/>

    <ul className="list-group">
			{props.comments.map((comment, index) =>
				<Comment
					text={comment.text}
					author={comment.author}
					rating={comment.rating}
					voteHandler={props.voteHandler}
					index={index}
					key={index}
				/>
			)}
		</ul>

		<CommentInput
			handleSubmit={props.handleSubmit}
			pendingComment={props.pendingComment}
			commentHandler={props.commentHandler}
		/>

	</div>

CommentSection.propTypes = {
	comments: PropTypes.array.isRequired,
	voteHandler: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	pendingComment: PropTypes.string.isRequired,
	commentHandler: PropTypes.func.isRequired
}

export default CommentSection;