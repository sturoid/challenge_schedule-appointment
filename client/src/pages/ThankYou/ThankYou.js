import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../../shared/Page';
import './ThankYou.scss';

const ThankYou = () => {
  return (
    <Page>
      <div className="thank-you">
        <div>
          <h1>Your appointment is set!</h1>
          <Link to="/">Back to Schedule</Link>
        </div>
      </div>
    </Page>
  );
};

export default ThankYou;
