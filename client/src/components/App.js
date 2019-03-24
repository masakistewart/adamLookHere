import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header'
import SearchBar from './SearchBar'
import Results from './Results'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Results />
      </div>
    );
  }
}

export default App;
