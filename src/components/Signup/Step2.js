import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Step2 = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
    profileImage: null
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Load data from local storage
    const savedData = JSON.parse(localStorage.getItem('signupData')) || {};
    setFormData(prevData => ({
      ...prevData,
      mobile: savedData.mobileNumber || ''
    }));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prevData => ({ ...prevData, profileImage: e.target.files[0] }));
  };

  const handleSubmit = () => {
    const { firstName, lastName, email, password, mobile, profileImage } = formData;
    if (!firstName || !lastName || !email || !password || !mobile || !profileImage) {
      setErrors({
        firstName: !firstName ? 'First name is required' : '',
        lastName: !lastName ? 'Last name is required' : '',
        email: !email ? 'Email is required' : '',
        password: !password ? 'Password is required' : '',
        mobile: !mobile ? 'Mobile is required' : '',
        profileImage: !profileImage ? 'Profile image is required' : ''
      });
      return;
    }
    localStorage.setItem('signupData', JSON.stringify({ ...JSON.parse(localStorage.getItem('signupData')), ...formData }));
    navigate('/signup/step3');
  };

  return (
    <div>
      <h2>Step 2: Personal Information</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile"
        value={formData.mobile}
        onChange={handleInputChange}
      />
      <input
        type="file"
        onChange={handleFileChange}
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}
      {errors.lastName && <p className="error">{errors.lastName}</p>}
      {errors.email && <p className="error">{errors.email}</p>}
      {errors.password && <p className="error">{errors.password}</p>}
      {errors.mobile && <p className="error">{errors.mobile}</p>}
      {errors.profileImage && <p className="error">{errors.profileImage}</p>}
      <button onClick={handleSubmit}>Save and Continue</button>
    </div>
  );
};

export default Step2;
