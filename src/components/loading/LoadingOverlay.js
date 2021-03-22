import React from 'react';
import spinner from '../../assets/loading-spinner.gif';

import './LoadingOverlay.scss';

const LoadingOverlay = ({ loading }) => {
  return (
    <div className={`spinner ${loading ? 'spinner-enabled' : 'spinner-disabled'}`}>
      <img src={ spinner } alt='loading' />
    </div>
  );
};

export default LoadingOverlay;
