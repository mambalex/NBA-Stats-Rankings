import React from 'react';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import Rank from 'components/Rank/Rank';
import './App.scss';
import logo from './nba_logo.png';

const client = new ApolloClient({
  uri: '/graphql'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className='App container'>
          <header>
            <img src={logo} alt='NBA Logo' />
            <h1>NBA Stats Rankings</h1>
          </header>
          <Route exact path='/' component={Rank} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
