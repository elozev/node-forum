import React, { Component} from 'react';
import EmailPassForm from '../content_area/EmailPassForm';
import InitialHeader from '../content_area/InitialHeader';
import Footer from '../footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SignUp extends Component{
	state = {
		pendingNameInput: "",
		pendingEmailInput: "",
		pendingPasswordInput: "",
		isLogIn: false
	}

	handleSubmitEvent = e =>{
		console.log(this.state.pendingEmailInput, this.state.pendingPasswordInput, this.state.pendingNameInput);
		e.preventDefault();
	}

	handleEmailInput = e =>
		this.setState({pendingEmailInput: e.target.value})

	handlePasswordInput = e =>
		this.setState({pendingPasswordInput: e.target.value})

	handleNameInput = e =>
		this.setState({pendingNameInput: e.target.value})

	render(){
		return(
			<div>
				<div className="container text-center mt-5">
					<InitialHeader text="up"/>

					<div className="d-flex justify-content-center">
						<div className="input-group mb-3 col-5">
							<div className="input-group-prepend">
								<span className="input-group-text bg-light" id="basic-addon1"><FontAwesomeIcon icon="user"/></span>
							</div>
							<input type="text" className="form-control" placeholder="Names" aria-label="Name" aria-describedby="basic-addon1" onChange={this.handleNameInput}/>
						</div>
					</div>

					<EmailPassForm
							handleSubmitEvent={this.handleSubmitEvent}
							handleEmailInput={this.handleEmailInput}
							handlePasswordInput={this.handlePasswordInput}
							isLogIn={this.state.isLogIn}/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default SignUp;