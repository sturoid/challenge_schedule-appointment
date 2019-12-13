import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ErrorBoundary from '../shared/errors/ErrorBoundary';
import Schedule from '../pages/Schedule';
import ThankYou from '../pages/ThankYou';

// Global styles.
import 'normalize.css';
import '~/lib/colors.scss';
import './App.scss';

const client = new ApolloClient({ uri: process.env.API_URL });

const App = () => (
  <ErrorBoundary>
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/">
            <Schedule />
          </Route>
          <Route path="/thank-you">
            <ThankYou />
          </Route>
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </ApolloProvider>
    </Router>
  </ErrorBoundary>
);

export default App;
