import React, {Component} from 'react';
import Layout from './Layout';
import BreadcrumbNav from '../content_area/BreadcrumbNav';
import LatestStories from '../content_area/LatestStories';
import FeaturedWriter from '../content_area/FeaturedWriter';

class Category extends Component {

	state = {
		category_name: 'Art',
		category_description: 'Description lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec lectus vel urna facilisis volutpat id ut augue. Vestibulum euismod enim justo, eu auctor sapien tempor at. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec sit amet erat quis ipsum dignissim pretium efficitur sed tortor. Praesent nunc mauris, pulvinar id nibh lobortis, eleifend hendrerit ex. Nunc fermentum sed dolor vitae maximus. Sed vel turpis ullamcorper, ornare elit ac, facilisis quam. Praesent dictum eu leo sit amet facilisis.',
		links: [
			{
				name: "Home",
				to: "/"
			},
			{
				name: "[Category]",
				to: "/category"
			},
		],
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
		],
		featured_name: "James Gomez",
		featured_description: "Lorem ipsum response",
		featured_img:
		{
			url: 'https://static1.squarespace.com/static/59df991be45a7cc810e3fbe5/59dfa87c4c0dbf0c5f416aed/59dfa904f43b55ff86898453/1507830063429/20170917+-+Colin+Whiteman+0272+-+0001.jpg',
			alt: 'James Gomez profile photo'
		},
		featured_writer_story:
		{
			title: 'The greatest showman is one heck of a movie',
			caption: 'The movie directed by Morgan Sterling is telling a story about a little boy with not so little dreams.',
			updated_at: '21:30 18.08.18',
			image: {
			  url: '',
			  alt: '',
			}
		}

	}

	render(){
		return(
			<Layout>
				<BreadcrumbNav links={this.state.links}/>

				<h2>{this.state.category_name}</h2>
				<hr/>
				<p>{this.state.category_description}</p>

				<h2 class="mt-4">Top-3 rated stories this week:</h2>

				<LatestStories stories={this.state.stories}/>

				<FeaturedWriter
					writer_name={this.state.featured_name}
					writer_description={this.state.featured_description}
					writer_image={this.state.featured_img}
					story={this.state.featured_writer_story}/>

			</Layout>
		);
	}
}

export default Category;