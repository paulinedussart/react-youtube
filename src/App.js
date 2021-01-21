//librairies
import React from 'react';
//api
import youtube from './apis/youtube';
//components
import VideoList from './component/VideoList';
import SearchBar from './component/SearchBar';
import VideoDetail from './component/VideoDetail';
import './style/Video.css';
import './style/home.css';

const KEY = 'AIzaSyCd5gPUrQBxlFpvZ_2MLjyHw1qudLuMaGc';

class App extends React.Component {
  state = { videos: [], word: '', currentVideo: null };
  onSubmitForm = async (word) => {
    this.setState({ word });
    await youtube
      .get('/search', {
        params: {
          part: 'snippet',
          type: 'video',
          maxResults: 5,
          q: word,
          key: KEY,
        },
      })
      .then((response) => this.setState({ videos: response.data.items, currentVideo: response.data.items[0] }))
      .catch((error) => console.log(error));
  };

  onClickItem = (video) => {
    this.setState({ currentVideo: video });
  };
  render() {
    return (
      <div>
        <SearchBar onUserSubmit={this.onSubmitForm} />
        <h5>
          I found {this.state.videos.length} videos
          {this.state.word.length !== 0 && ` about ${this.state.word}`}.
        </h5>
        <div className='videos'>
          {this.state.currentVideo && <VideoDetail video={this.state.currentVideo} word={this.state.word} />}
          <VideoList
            onClick={this.onClickItem}
            videos={this.state.videos.filter((video) => video !== this.state.currentVideo)}
          />
        </div>
      </div>
    );
  }
}

export default App;
