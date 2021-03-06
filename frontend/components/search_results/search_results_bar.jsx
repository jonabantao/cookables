import React, { Component } from 'react';

class SearchResultsBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: this.props.searchTerm,
    };
  }

  handleUpdate(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <section className="search-page-top">
        <h4 className="search-page-top__header">Let&#39;s Cook</h4>
        <div>
          <input
            type="text"
            className="search-page-top__form"
            value={this.state.term}
            onChange={e => this.handleUpdate(e.target.value)}
            autoFocus
          />
        </div>
      </section>
    );
  }
}

export default SearchResultsBar;
