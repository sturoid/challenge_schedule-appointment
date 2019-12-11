import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Schedule from './Schedule';

const GET_COACHES_AND_APPOINTMENTS_FOR_DAY = gql`
  {
    coaches {
      _id
      name
      appointments {
        _id
        start
        end
      }
    }
  }
`;

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

const ScheduleData = () => {
  return <Schedule coaches={coaches} />;
};

export default ScheduleData;
