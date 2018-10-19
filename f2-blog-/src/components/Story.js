import React, {Component} from 'react';
import BreadcrumbNav from '../content_area/BreadcrumbNav';
import StoryMeta from '../content_area/StoryMeta';
import Layout from './Layout';
import CommentSection from '../content_area/CommentSection';

class Story extends Component {
    state = {
        links: [
            {
                name: "Home",
                to: "/"
            },
            {
                name: "[Category]",
                to: "/category"
            },
            {
                name: '[Story Title]',
                to: "/story"
            }
        ],
        story_img:
            {
                url: 'https://static1.squarespace.com/static/59df991be45a7cc810e3fbe5/59dfa87c4c0dbf0c5f416aed/59dfa904f43b55ff86898453/1507830063429/20170917+-+Colin+Whiteman+0272+-+0001.jpg',
                alt: 'Story alt'
            },
        story_title: "Art selection 2018",
        story_subtitle: "What hides behind the name of Tate",
        story_text: "Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        comments: [
            {
                text: 'Some comment',
                author: {
                    name: 'Ivan Ivanov',
                    date: new Date().toDateString(),
                    img: {
                        url: 'https://www.tamedia.ch/assets/images/3/Martin_Coninx-9d0a2d23.jpg',
                        alt: 'Img tab'
                    }

                },
                rating: 5
            },
            {
                text: 'Some comment',
                author: {
                    name: 'Ivan Ivanov',
                    date: new Date().toDateString(),
                    img: {
                        url: 'https://www.tamedia.ch/assets/images/3/Martin_Coninx-9d0a2d23.jpg',
                        alt: 'Img tab'
                    }

                },
                rating: 5
            },
        ],
        pendingCommentText: "",
    }

    voteHandler = (voteUp, indexToChange) => {
        this.setState({
            comments: this.state.comments.map((comment, index) => {
                if (index === indexToChange) {
                    var newRating = voteUp ? comment.rating + 1 : comment.rating - 1;
                    return {
                        ...comment,
                        rating: newRating
                    }
                } else return comment;
            })
        })
    }

    commentTextHandler = e => {
        this.setState({pendingCommentText: e.target.value});
    }

    onSubmitCommentHandler = e => {
        console.log('Comment', this.state.pendingCommentText);
        e.preventDefault();
        var newComments = this.state.comments;
        newComments.push(
            {
                text: this.state.pendingCommentText,
                author: {
                    name: 'Ivan Ivanov',
                    date: new Date().toDateString(),
                    img: {
                        url: 'https://www.tamedia.ch/assets/images/3/Martin_Coninx-9d0a2d23.jpg',
                        alt: 'Img tab'
                    }

                },
                rating: 5
            }
        );
        this.setState({
            pendingCommentText: '',
            comments: newComments
        });
    }

    render() {
        return (
            <div>
                <Layout>
                    <BreadcrumbNav links={this.state.links}/>

                    <StoryMeta
                        title={this.state.story_title}
                        subtitle={this.state.story_subtitle}
                        text={this.state.story_text}
                        img={this.state.story_img}
                    />

                    <CommentSection
                        comments={this.state.comments}
                        voteHandler={this.voteHandler}
                        pendingComment={this.state.pendingCommentText}
                        commentHandler={this.commentTextHandler}
                        handleSubmit={this.onSubmitCommentHandler}/>
                </Layout>
            </div>
        );
    }
}

export default Story;