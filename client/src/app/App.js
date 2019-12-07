import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ErrorBoundary from '~/shared/errors/ErrorBoundary';
import Schedule from '../pages/Schedule';
import NavMain from './com/NavMain';
import Footer from './com/Footer';

// Global styles.
import 'normalize.css';
import '~/lib/colors.scss';
import './App.scss';

const client = new ApolloClient({
  uri: process.env.API_URL,
  request: async operation => {
    const token = await localStorage.getItem('AUTH_TOKEN');
    operation.setContext({
      headers: {
        authorization: token
      }
    });
  }
});

const App = () => (
  <ErrorBoundary>
    <Router>
      <ApolloProvider client={client}>
        <NavMain />
        <Switch>
          <Route path="/">
            <Schedule />
          </Route>
        </Switch>
        <Footer />
      </ApolloProvider>
    </Router>
  </ErrorBoundary>
);

export default App;
