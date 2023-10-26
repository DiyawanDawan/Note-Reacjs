import React, { Component } from 'react';

import AppHeader from './AppHeader';
import AppBody from './AppBody';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(keyword) {
    this.setState({ keyword });
  }

  render() {
    return (
      <>
        <AppHeader onSearch={this.onSearchHandler} />
        <AppBody keyword={this.state.keyword} />
      </>
    );
  }
}

export default App;
