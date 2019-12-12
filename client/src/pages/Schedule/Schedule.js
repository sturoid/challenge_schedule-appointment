import React from 'react';
import PropTypes from 'prop-types';
import Page from '../../shared/Page';
import './Schedule.scss';

const Schedule = ({ coaches }) => {
  return (
    <Page>
      <h1>Schedule</h1>
      <section className="schedule">
        {coaches.map(({ id, name, appointments }) => {
          return (
            <div key={id} className="coach">
              <h2>{name}</h2>
              {appointments && appointments.length ? (
                <div className="appointments">
                  {appointments.map(a => {
                    return (
                      <div key={a.id}>
                        {a.start}:{a.end}
                      </div>
                    );
                  })}
                </div>
              ) : (
                'No appointments'
              )}
            </div>
          );
        })}
      </section>
    </Page>
  );
};

Schedule.props = {
  coaches: PropTypes.arrayOf(PropTypes.any)
};

export default Schedule;
