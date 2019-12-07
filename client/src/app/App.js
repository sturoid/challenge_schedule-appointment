import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import ErrorBoundary from '~/shared/errors/ErrorBoundary';
import NavMain from './com/NavMain';
import Footer from './com/Footer';
import Schedule from '../pages/Schedule';

// Global styles.
import 'normalize.css';
import '~/lib/colors.scss';
import './App.scss';

const client = new ApolloClient({ uri: process.env.API_URL });

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
