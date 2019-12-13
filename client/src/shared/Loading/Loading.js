import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Loading.scss';

const Loading = () => {
  return (
    <div className="loading-container">
      <CircularProgress />
    </div>
  );
};

export default Loading;
