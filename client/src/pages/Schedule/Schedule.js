import React, { useState } from 'react';
import { arrayOf, shape, any } from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@material-ui/core';
import { format } from 'date-fns';
import Page from '../../shared/Page';
import Coach from './com/Coach';
import { getDateFromTimeSlot } from './utils';
import './Schedule.scss';

const ScheduleHead = () => {
  return (
    <div className="schedule-head">
      <h1>Schedule a time with one of our coaches</h1>
      <h2>All times are in your timezone</h2>
    </div>
  );
};

const Schedule = ({ coaches }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [booking, setBooking] = useState({});

  function bookTimeSlot(timeSlot, coach) {
    setBooking({ timeSlot, coach });
    setShowConfirm(true);
  }

  // TODO: Submit to API and update redirect to thank you.
  function submitBooking() {
    // eslint-disable-next-line
    console.log(booking);
  }

  return (
    <Page>
      <ScheduleHead />
      <section className="schedule">
        {booking && booking.coach ? (
          <Dialog
            className="confirm"
            onClose={() => setShowConfirm(false)}
            open={showConfirm}
          >
            <DialogTitle className="confirm-title">Confirm your appointment</DialogTitle>
            <DialogContent>
              <div className="confirm-coach-name">{booking.coach.name}</div>
              <div className="confirm-date">
                {format(getDateFromTimeSlot(booking.timeSlot), 'MM/dd/yyyy hh:mma')}
              </div>
            </DialogContent>
            <DialogActions className="confirm-actions">
              <Button onClick={() => setShowConfirm(false)}>Cancel</Button>
              <Button onClick={submitBooking}>Submit</Button>
            </DialogActions>
          </Dialog>
        ) : null}
        <>
          {coaches.map(coach => {
            return <Coach key={coach.id} coach={coach} bookTimeSlot={bookTimeSlot} />;
          })}
        </>
      </section>
    </Page>
  );
};

Schedule.props = {
  coaches: arrayOf(shape(any))
};

export default Schedule;
