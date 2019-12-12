import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import Schedule from './Schedule';
import Loading from '../../shared/Loading';
import ApiError from '../../shared/errors/ApiError';

const GET_APPOINTMENTS = gql`
  {
    coaches {
      id
      name
      appointments {
        id
        start(inTimezone: true)
        end(inTimezone: true)
      }
    }
  }
`;

const ScheduleData = () => {
  const { loading, error, data } = useQuery(GET_APPOINTMENTS);
  if (loading) return <Loading />;
  if (error) return <ApiError error={error} />;
  return <Schedule coaches={data.coaches} />;
};

export default ScheduleData;
