import React from 'react';
import PropTypes from 'prop-types';
import EditUserInfo from './EditUserInfo';

const UserEditSection = (props) => {
	if(!props.isEditing){
		return(
			<div>
				<h3>{props.names}</h3>
				<h4>{props.bio}</h4>
			</div>
		);
	} else {
		return(
			<div>
				<EditUserInfo
					names={props.names}
					bio={props.bio}
					getPendingNameText={props.getPendingNameText}
					getPendingBioText={props.getPendingBioText}
					handleNameInput={props.handleNameInput}
		         	handleBioInput={props.handleBioInput} />
			</div>
		);
	}
}

UserEditSection.propTypes = {
	names: PropTypes.string.isRequired,
	bio: PropTypes.string.isRequired,
	isEditing: PropTypes.bool.isRequired,
	handleNameInput: PropTypes.func.isRequired,
	handleBioInput: PropTypes.func.isRequired,
	getPendingNameText: PropTypes.string.isRequired,
	getPendingBioText: PropTypes.string.isRequired
}

export default UserEditSection;