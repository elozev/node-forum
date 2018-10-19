import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EmailPassForm = props =>
	<div>
		<form onSubmit={props.handleSubmitEvent}>
			<div className="d-flex justify-content-center">
				<div className="input-group mb-3 col-5">
					<div className="input-group-prepend">
						<span className="input-group-text bg-light" id="basic-addon1"><FontAwesomeIcon icon="envelope"/></span>
					</div>
					<input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" onChange={props.handleEmailInput}/>
				</div>
			</div>

			<div className="d-flex justify-content-center">
				<div className="input-group mb-3 col-5">
					<div className="input-group-prepend">
						<span className="input-group-text bg-light" id="basic-addon1"><FontAwesomeIcon icon="lock"/></span>
					</div>
					<input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="basic-addon1" onChange={props.handlePasswordInput}/>
				</div>
			</div>
			<button className="btn btn-dark" type="submit">{props.isLogIn ? "Sing In" : "Sign Up"}</button>
		</form>
	</div>

EmailPassForm.propTypes = {
	handleSubmitEvent: PropTypes.func.isRequired,
	handleEmailInput: PropTypes.func.isRequired,
	handlePasswordInput: PropTypes.func.isRequired,
	isLogIn: PropTypes.bool.isRequired
}

export default EmailPassForm;