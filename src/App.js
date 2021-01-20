import React from 'react';
import SearchBar from './component/SearchBar';
class App extends React.Component {
  onSubmitForm = (e) => {
    console.log(e);
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
