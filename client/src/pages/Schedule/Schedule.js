import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { arrayOf, shape, any, func } from 'prop-types';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@material-ui/core';
import { format } from 'date-fns';
import Loading from '../../shared/Loading';
import Page from '../../shared/Page';
import Coach from './com/Coach';
import { getDateFromTimeSlot } from './Schedule.utils';
import './Schedule.scss';

const ScheduleHead = () => {
  return (
    <div className="schedule-head">
      <h1>Schedule a time with one of our coaches</h1>
      <h2>All times are in your timezone</h2>
    </div>
  );
};

const Schedule = ({ coaches, addAppointment }) => {
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [booking, setBooking] = useState({});
  const [redirectToSuccess, setRedirectToSuccess] = useState(false);

  function bookTimeSlot(timeSlot, coach) {
    setBooking({ timeSlot, coach });
    setShowConfirm(true);
  }

  // TODO: Submit to API and update redirect to thank you.
  async function submitBooking() {
    try {
      setLoading(true);
      const start = getDateFromTimeSlot(booking.timeSlot);
      await addAppointment({
        variables: {
          input: { start: new Date(start).toISOString(), coachId: booking.coach.id }
        }
      });
      setShowConfirm(false);
      setLoading(false);
      setRedirectToSuccess(true);
    } catch (e) {
      setLoading(false);
      alert(e);
    }
  }

  return (
    <Page>
      {loading ? <Loading /> : null}
      {redirectToSuccess ? <Redirect to="/thank-you" /> : null}
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
                {format(getDateFromTimeSlot(booking.timeSlot), 'PPPPp')}
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
  coaches: arrayOf(shape(any)),
  addApointment: func
};

export default Schedule;
