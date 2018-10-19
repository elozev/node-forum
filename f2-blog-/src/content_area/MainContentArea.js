import React, {Component} from 'react';
import WeatherPanel from './WeatherPanel';
import LatestStories from './LatestStories';
import FeaturedStory from './FeaturedStory';
import CategoryThumbnails from './CategoriesThumbnails';

class MainContentArea extends Component {

  state = {
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
    categories: [
      {
        title: 'Art',
        link: '...',
        thumbnail: 'http://www.acuemarmonite.com/wp-content/uploads/2017/05/Marble_MahadevBlackGold-1-200x200.jpg',
      },
      {
        title: 'Art',
        link: '...',
        thumbnail: 'http://www.acuemarmonite.com/wp-content/uploads/2017/05/Marble_MahadevBlackGold-1-200x200.jpg',
      },
      {
        title: 'Art',
        link: '...',
        thumbnail: 'http://www.acuemarmonite.com/wp-content/uploads/2017/05/Marble_MahadevBlackGold-1-200x200.jpg',
      },
      {
        title: 'Art',
        link: '...',
        thumbnail: 'http://www.acuemarmonite.com/wp-content/uploads/2017/05/Marble_MahadevBlackGold-1-200x200.jpg',
      },
      {
        title: 'Art',
        link: '...',
        thumbnail: 'http://www.acuemarmonite.com/wp-content/uploads/2017/05/Marble_MahadevBlackGold-1-200x200.jpg',
      },
      {
        title: 'Art',
        link: '...',
        thumbnail: 'http://www.acuemarmonite.com/wp-content/uploads/2017/05/Marble_MahadevBlackGold-1-200x200.jpg',
      },
      {
        title: 'Art',
        link: '...',
        thumbnail: 'http://www.acuemarmonite.com/wp-content/uploads/2017/05/Marble_MahadevBlackGold-1-200x200.jpg',
      },
    ]
  }

  render () {
    return (
      <div>
        <h2>Welcome [username]!</h2>
        <hr/>

        <WeatherPanel />

        <LatestStories
          title="Take a look at our latest stories:"
          stories={this.state.stories} />

        <FeaturedStory url="url"
           alt="Featured Story Picture"
           title="Title"
           caption="Some caption needed"
           updated_at="21.08.2018"/>

        <CategoryThumbnails categories={this.state.categories}/>
      </div>
      );
    }
}

MainContentArea.propTypes = {

}

export default MainContentArea;