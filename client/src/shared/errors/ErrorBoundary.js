import React from 'react';
import { childrenType } from '~/lib/prop-types';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // TODO: Log to error logging service instead of console.
    // logErrorToService(error, info);

    // eslint-disable-next-line
    console.log('ERROR: ', error);
    // eslint-disable-next-line
    console.log('ERROR INFO: ', info);
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: childrenType.isRequired
};
