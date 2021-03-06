import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { word: '' };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onUserSubmit(this.state.word);
  };

  handleChange = (e) => {
    this.setState({ word: e.target.value });
  };

  render() {
    return (
      <div className='search-bar ui segment '>
        <form onSubmit={this.handleSubmit} className=''>
          <div className=''>
            <label>
              <h1>Search a video</h1>
            </label>
            <input
              name='query'
              type='text'
              value={this.state.word}
              onChange={this.handleChange}
              placeholder='Please enter a keyword ...'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
