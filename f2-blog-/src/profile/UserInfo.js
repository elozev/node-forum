import React from 'react';
import PropTypes from 'prop-types';
import UserEditSection from './UserEditSection';

const UserInfo = (props) =>
	<div className="row p-3">
		<div className="col-md-3 order-md-last p-2">
		  <img className="img-fluid rounded-circle" src={props.img} alt=""/>
		</div>
		<div className="col-md-9 p-2">
			<UserEditSection
				isEditing={props.isEditing}
				names={props.names}
				bio={props.bio}
				getPendingNameText={props.getPendingNameText}
				getPendingBioText={props.getPendingBioText}
				handleNameInput={props.handleNameInput}
         		handleBioInput={props.handleBioInput}/>

			<button className={props.isEditing ? "btn btn-dark btn-sm my-2" : "btn btn-outline-dark btn-sm my-2"} onClick={props.editProfileHandler}>
		  		{props.isEditing ? "Save" : "Edit Profile"}
	  		</button>
		</div>
	</div>

UserInfo.propTypes = {
	names: PropTypes.string.isRequired,
	bio: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	editProfileHandler: PropTypes.func.isRequired,
	isEditing: PropTypes.bool.isRequired,
	getPendingNameText: PropTypes.string.isRequired,
	getPendingBioText: PropTypes.string.isRequired,
	handleNameInput: PropTypes.func.isRequired,
	handleBioInput: PropTypes.func.isRequired
}

export default UserInfo;