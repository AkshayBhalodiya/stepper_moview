import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Step4 = () => {
  const [aadharNumber, setAadharNumber] = useState('');
  const [aadharDoc, setAadharDoc] = useState(null);
  const [panNumber, setPanNumber] = useState('');
  const [panDoc, setPanDoc] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Load data from local storage
    const savedData = JSON.parse(localStorage.getItem('signupData')) || {};
    setAadharNumber(savedData.aadharNumber || '');
    setAadharDoc(savedData.aadharDoc || null);
    setPanNumber(savedData.panNumber || '');
    setPanDoc(savedData.panDoc || null);
  }, []);

  const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!aadharNumber || !aadharDoc || !panNumber || !panDoc) {
      setErrors({
        aadharNumber: !aadharNumber ? 'Aadhar number is required' : '',
        aadharDoc: !aadharDoc ? 'Aadhar document is required' : '',
        panNumber: !panNumber ? 'PAN number is required' : '',
        panDoc: !panDoc ? 'PAN document is required' : ''
      });
      return;
    }
    localStorage.setItem('signupData', JSON.stringify({ ...JSON.parse(localStorage.getItem('signupData')), aadharNumber, aadharDoc, panNumber, panDoc }));
    navigate('/signup/step5');
  };

  return (
    <div>
      <h2>Step 4: Documents</h2>
      <input
        type="text"
        placeholder="Aadhar Number"
        value={aadharNumber}
        onChange={(e) => setAadharNumber(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => handleFileChange(e, setAadharDoc)}
      />
      {aadharDoc && <a href={URL.createObjectURL(aadharDoc)} download="aadhar-doc">Download Aadhar Document</a>}
      <input
        type="text"
        placeholder="PAN Number"
        value={panNumber}
        onChange={(e) => setPanNumber(e.target.value)}
      />
      <input
        type="file"
        onChange={(e) => handleFileChange(e, setPanDoc)}
      />
      {panDoc && <a href={URL.createObjectURL(panDoc)} download="pan-doc">Download PAN Document</a>}
      {errors.aadharNumber && <p className="error">{errors.aadharNumber}</p>}
      {errors.aadharDoc && <p className="error">{errors.aadharDoc}</p>}
      {errors.panNumber && <p className="error">{errors.panNumber}</p>}
      {errors.panDoc && <p className="error">{errors.panDoc}</p>}
      <button onClick={handleSubmit}>Save and Continue</button>
    </div>
  );
};

export default Step4;
