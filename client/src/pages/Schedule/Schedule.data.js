import React from 'react';
import gql from 'graphql-tag';
import { useQuery, useMutation } from '@apollo/react-hooks';
import Schedule from './Schedule';
import Loading from '../../shared/Loading';
import ApiError from '../../shared/errors/ApiError';

const GET_COACH_APPOINTMENTS = gql`
  {
    coaches {
      id
      name
      appointments {
        id
        start
        end
      }
    }
  }
`;

const ADD_APPOINTMENT = gql`
  mutation AddAppointment($input: AppointmentInput!) {
    addAppointment(input: $input) {
      id
    }
  }
`;

const ScheduleData = () => {
  const { loading, error, data } = useQuery(GET_COACH_APPOINTMENTS, {
    fetchPolicy: 'network-only'
  });
  const [addAppointment] = useMutation(ADD_APPOINTMENT);

  if (loading) return <Loading />;
  if (error) return <ApiError error={error} />;
  return <Schedule coaches={data.coaches} addAppointment={addAppointment} />;
};

export default ScheduleData;
