import React from 'react';

const Complete = () => {
  const signupData = JSON.parse(localStorage.getItem('signupData')) || {};

  const createObjectURL = (file) => {
    if (file && file instanceof Blob) {
      return URL.createObjectURL(file);
    }
    return null;
  };

  return (
    <div>
      <h2>Signup Complete</h2>
      <p>Thank you for signing up! Here is a summary of your information:</p>

      <div>
        <h3>Step 1: Mobile Verification</h3>
        <p><strong>Mobile Number:</strong> {signupData.mobileNumber}</p>
        <p><strong>OTP:</strong> {signupData.otp}</p>
      </div>

      <div>
        <h3>Step 2: Personal Information</h3>
        <p><strong>First Name:</strong> {signupData.firstName}</p>
        <p><strong>Last Name:</strong> {signupData.lastName}</p>
        <p><strong>Email:</strong> {signupData.email}</p>
        <p><strong>Password:</strong> {signupData.password ? '******' : 'Not provided'}</p>
        <p><strong>Mobile:</strong> {signupData.mobile}</p>
        {signupData.profileImage && (
          <div>
            <strong>Profile Image:</strong>
            <img 
              src={createObjectURL(signupData.profileImage)} 
              alt="Profile" 
              style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }} 
            />
          </div>
        )}
      </div>

      <div>
        <h3>Step 3: About You</h3>
        <p><strong>About Me:</strong> {signupData.aboutMe}</p>
        {signupData.bannerImage && (
          <div>
            <strong>Banner Image:</strong>
            <img 
              src={createObjectURL(signupData.bannerImage)} 
              alt="Banner" 
              style={{ maxWidth: '200px', maxHeight: '200px', marginTop: '10px' }} 
            />
          </div>
        )}
      </div>

      <div>
        <h3>Step 4: Documents</h3>
        <p><strong>Aadhar Number:</strong> {signupData.aadharNumber}</p>
        {signupData.aadharDoc && (
          <div>
            <strong>Aadhar Document:</strong>
            <a href={createObjectURL(signupData.aadharDoc)} download="aadhar-doc">Download Aadhar Document</a>
          </div>
        )}
        <p><strong>PAN Number:</strong> {signupData.panNumber}</p>
        {signupData.panDoc && (
          <div>
            <strong>PAN Document:</strong>
            <a href={createObjectURL(signupData.panDoc)} download="pan-doc">Download PAN Document</a>
          </div>
        )}
      </div>

      <div>
        <h3>Step 5: Preferred Languages</h3>
        {signupData.preferredLanguages && signupData.preferredLanguages.length > 0 ? (
          <ul>
            {signupData.preferredLanguages.map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
        ) : (
          <p>No languages selected</p>
        )}
      </div>
    </div>
  );
};

export default Complete;
