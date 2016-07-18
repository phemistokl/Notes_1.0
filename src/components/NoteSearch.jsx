import React from 'react';

import './NoteSearch.css';

const NoteSearch = React.createClass({
    render() {
      return (
      <div className="searchBox">
        <input type="text" className="search-field" onChange={this.props.onSearch} />
      </div>
      );
    }
});

export default NoteSearch;
