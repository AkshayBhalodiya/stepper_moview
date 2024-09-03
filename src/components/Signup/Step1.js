import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Step1 = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSendOtp = () => {
    // Simulate sending OTP
    localStorage.setItem('signupData', JSON.stringify({ mobileNumber, otp: '1111' }));
    setOtp('1111'); // Simulate OTP
  };

  const handleVerifyOtp = () => {
    const storedData = JSON.parse(localStorage.getItem('signupData')) || {};
    if (!mobileNumber || !otp) {
      setErrors({
        mobileNumber: !mobileNumber ? 'Mobile number is required' : '',
        otp: !otp ? 'OTP is required' : ''
      });
      return;
    }
    if (otp !== storedData.otp) {
      setErrors({ otp: 'Invalid OTP' });
      return;
    }
    localStorage.setItem('signupData', JSON.stringify({ ...storedData, mobileNumber, otp }));
    navigate('/signup/step2');
  };

  return (
    <div>
      <h2>Step 1: Mobile Verification</h2>
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <button onClick={handleSendOtp}>Send OTP</button>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      {errors.mobileNumber && <p className="error">{errors.mobileNumber}</p>}
      {errors.otp && <p className="error">{errors.otp}</p>}
      <button onClick={handleVerifyOtp}>Verify OTP and Continue</button>
    </div>
  );
};

export default Step1;
