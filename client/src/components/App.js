import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';

import '../css/App.css';
import Header from './Header'
import Results from './Results'

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Header />
        <Results />
      </ApolloProvider>
    );
  }
}

export default App;
