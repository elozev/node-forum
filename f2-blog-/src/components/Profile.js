import React, { Component } from 'react';
import Layout from './Layout';
import UserInfo from '../profile/UserInfo';
import LatestStories from '../content_area/LatestStories';

class Profile extends Component{
	state = {
		isEditing: false,
		names: "Petar Petrov",
		bio: "Alloha! I'm a writer here at Blogster willing to provide the best!",
		pendingNameInput: "",
		pendingBioInput: "",
		img: "https://cdn.cnn.com/cnnnext/dam/assets/170726110140-cnn-vasco-cotovio-profile-full-169.jpg",
		stories: [
			{
				title: 'The greatest showman is one heck of a movie',
				caption: 'The movie directed by Morgan Sterling is telling a story about a little boy with not so little dreams.',
				updated_at: '21:30 18.08.18',
				image: {
				  url: '',
				  alt: '',
				}
			},
			{
				title: 'The greatest showman is one heck of a movie',
				caption: 'The movie directed by Morgan Sterling is telling a story about a little boy with not so little dreams.',
				updated_at: '21:30 18.08.18',
				image: {
				  url: '',
				  alt: '',
				}
			},
			{
				title: 'The greatest showman is one heck of a movie',
				caption: 'The movie directed by Morgan Sterling is telling a story about a little boy with not so little dreams.',
				updated_at: '21:30 18.08.18',
				image: {
				  url: '',
				  alt: '',
				}
			},
		]
	}

	editProfileHandler = () => {
		if (!this.state.isEditing) this.setState({pendingNameInput: this.state.names, pendingBioInput: this.state.bio});
		else this.setState({names: this.state.pendingNameInput, bio: this.state.pendingBioInput});
		this.setState({isEditing: !this.state.isEditing});
	}

	handleNameInput = event => {
		this.setState({pendingNameInput: event.target.value});
	}

	handleBioInput = event => {
		this.setState({pendingBioInput: event.target.value});
	}

	render(){
		return (
			<div>
				<Layout>
					<h2>Profile</h2>
		         	<hr/>

		         	<UserInfo
		         		names={this.state.names}
		         		bio={this.state.bio}
		         		img={this.state.img}
		         		editProfileHandler={this.editProfileHandler}
		         		handleNameInput={this.handleNameInput}
		         		handleBioInput={this.handleBioInput}
		         		getPendingNameText={this.state.pendingNameInput}
		         		getPendingBioText={this.state.pendingBioInput}
		         		isEditing={this.state.isEditing} />

			        <LatestStories
			        	title="Your stories:"
			        	stories={this.state.stories}
			        	editProfileHandler={this.editProfileHandler} />
				</Layout>
			</div>
		);
	}
}

export default Profile;