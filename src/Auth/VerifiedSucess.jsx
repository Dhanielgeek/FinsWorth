// VerificationSuccessPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const VerifiedSucess = () => {
  return (
    <div className='popup'>
      <h1>Verified Successfully!</h1>
      <p>Proceed to login to access your account.</p>
      <button><Link to="/login">Go to Login</Link></button>
    </div>
  );
};

export default VerifiedSucess;
