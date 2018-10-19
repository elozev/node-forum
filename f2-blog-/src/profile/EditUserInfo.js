import React from 'react';
import PropTypes from 'prop-types';

const EditUserInfo = (props) =>
	<div>
		<div className="input-group mb-3">
		  <div className="input-group-prepend">
		    <span className="input-group-text" id="inputGroup-sizing-default">Names</span>
		  </div>
		  <input type="text" className="form-control" aria-label="Names" aria-describedby="inputGroup-sizing-default" value={props.getPendingNameText} onChange={props.handleNameInput}/>
		</div>
		<div className="input-group mb-3">
		  <div className="input-group-prepend">
		    <span className="input-group-text" id="inputGroup-sizing-default">Bio</span>
		  </div>
		  <input type="text" className="form-control" aria-label="Bio" aria-describedby="inputGroup-sizing-default" value={props.getPendingBioText} onChange={props.handleBioInput}/>
		</div>
	</div>

EditUserInfo.propTypes = {
	names: PropTypes.string,
	bio: PropTypes.string,
	handleNameInput: PropTypes.func.isRequired,
	handleBioInput: PropTypes.func.isRequired,
	getPendingNameText: PropTypes.string.isRequired,
	getPendingBioText: PropTypes.string.isRequired
}

export default EditUserInfo;