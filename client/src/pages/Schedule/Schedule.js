import React from 'react';
import Page from '../../shared/Page';
import './Schedule.scss';

const Schedule = ({ coaches }) => {
  return (
    <Page>
      <h1>Schedule</h1>
      <section className="schedule">
        {coaches.map(({ name, appointments }) => {
          return (
            <div className="coach">
              <h2>{name}</h2>
              {appointments && appointments.length ? (
                <div className="appointments">
                  {appointments.map(a => {
                    return (
                      <div>
                        {a.start} - {a.end}
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

export default Schedule;
