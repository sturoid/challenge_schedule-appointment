import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App', () => {
  it('renders correctly', () => {
    const com = renderer.create(<App />).toJSON();
    expect(com).toMatchSnapshot();
  });
});
