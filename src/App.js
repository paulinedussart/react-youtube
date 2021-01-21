//librairies
import React from 'react';
//api
import youtube from './apis/youtube';
//components
import VideoList from './component/VideoList';
import SearchBar from './component/SearchBar';
const KEY = 'AIzaSyCd5gPUrQBxlFpvZ_2MLjyHw1qudLuMaGc';

class App extends React.Component {
  state = { video: [], word: '' };
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
      .then((response) => this.setState({ video: response.data.items }))
      .catch((error) => console.log(error));
  };

  render() {
    return (
      <div>
        <SearchBar onUserSubmit={this.onSubmitForm} />
        <h5>
          {console.log(this.state.video)}I found {this.state.video.length} videos
          {this.state.word.length !== 0 && ` about ${this.state.word}`}.
        </h5>
        <VideoList videos={this.state.video} />
      </div>
    );
  }
}

export default App;
