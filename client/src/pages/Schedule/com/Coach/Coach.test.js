import React from 'react';
import renderer from 'react-test-renderer';
import Coach from './Coach';

const coach = {
  id: '1',
  name: 'Bob Test',
  appointments: [
    {
      id: '1',
      start: new Date('2019-12-11T11:30:00').toString(),
      end: new Date('2019-12-11T12:00:00').toString()
    },
    {
      id: '2',
      start: new Date('2019-12-11T14:00:00').toString(),
      end: new Date('2019-12-11T14:30:00').toString()
    }
  ]
};

describe('Coach', () => {
  it('renders correctly', () => {
    const com = renderer.create(<Coach coach={coach} />).toJSON();
    expect(com).toMatchSnapshot();
  });
});
