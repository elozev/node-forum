import React, {Component} from 'react';
import Footer from '../footer/Footer';
import EmailPassForm from '../content_area/EmailPassForm';
import InitialHeader from '../content_area/InitialHeader';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

library.add(fas);

class SignIn extends Component{

	state = {
		pendingEmailInput: "",
		pendingPasswordInput: "",
		isLogIn: true
	}

	handleSubmitEvent = e =>{
		console.log(this.state.pendingEmailInput, this.state.pendingPasswordInput);
		e.preventDefault();
	}

	handleEmailInput = e =>
		this.setState({pendingEmailInput: e.target.value})

	handlePasswordInput = e =>
		this.setState({pendingPasswordInput: e.target.value})

	render(){
		return(
			<div>
			    <div className="container text-center mt-5">

			    	<InitialHeader text="in"/>

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

export default SignIn;