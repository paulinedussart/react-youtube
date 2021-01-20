import React from 'react';
import SearchBar from './component/SearchBar';
import youtube from './apis/youtube';

const KEY = 'AIzaSyCd5gPUrQBxlFpvZ_2MLjyHw1qudLuMaGc';

class App extends React.Component {
  onSubmitForm = (word) => {
    console.log(word);
    youtube.get('/search', {
      params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        q: word,
        key: KEY,
      },
    });
  };

  render() {
    return (
      <div>
        <SearchBar onUserSubmit={this.onSubmitForm} />
      </div>
    );
  }
}

export default App;
