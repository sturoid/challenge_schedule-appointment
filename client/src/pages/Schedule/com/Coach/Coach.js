import React from 'react';
import { format } from 'date-fns';
import { getScheduleTime } from '../../../../lib/lists/lists';
import setAvailability from './Coach.utils';
import { getDateFromTimeSlot } from '../../utils';
import './Coach.scss';

const CoachSchedule = ({ appointments = [], bookTimeSlot, coach }) => {
  const timeSlots = setAvailability(appointments, getScheduleTime());

  return (
    <div className="coach-time-slots">
      {timeSlots.map(ts => {
        return (
          <div
            key={String(ts.hours + ts.minutes)}
            className={`coach-time-slot${ts.booked ? ' booked' : ''}`}
            onClick={() => bookTimeSlot(ts, coach)}
            onKeyDown={() => bookTimeSlot(ts, coach)}
            role="button"
            tabIndex="0"
          >
            {format(getDateFromTimeSlot(ts), 'hh:mma')}
          </div>
        );
      })}
    </div>
  );
};

const Coach = ({ coach, bookTimeSlot }) => {
  return (
    <div className="coach">
      <div className="coach-name">{coach.name}</div>
      <CoachSchedule
        appointments={coach.appointments}
        coach={coach}
        bookTimeSlot={bookTimeSlot}
      />
    </div>
  );
};

export default Coach;
