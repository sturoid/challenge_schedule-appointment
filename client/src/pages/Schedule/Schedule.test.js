import React from 'react';
import renderer from 'react-test-renderer';
import Schedule from './Schedule';

const coaches = [
  {
    id: 1,
    name: 'Bert Nelson',
    appointments: [
      {
        start: '2019-12-11 17:00:00Z',
        end: '2019-12-11 17:30:00Z'
      }
    ]
  },
  {
    id: 2,
    name: 'Bobby Booshay',
    appointments: [
      {
        start: '2019-12-11 17:00:00Z',
        end: '2019-12-11 17:30:00Z'
      },
      {
        start: '2019-12-11 18:30:00Z',
        end: '2019-12-11 19:00:00Z'
      }
    ]
  }
];

describe('Schedule', () => {
  it('renders correctly', () => {
    const com = renderer.create(<Schedule coaches={coaches} />).toJSON();
    expect(com).toMatchSnapshot();
  });
});
