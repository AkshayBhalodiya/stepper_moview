import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone';
import { useNavigate } from 'react-router-dom';

const Step3 = () => {
  const [aboutMe, setAboutMe] = useState('');
  const [bannerImage, setBannerImage] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    // Load data from local storage
    const savedData = JSON.parse(localStorage.getItem('signupData')) || {};
    setAboutMe(savedData.aboutMe || '');
    setBannerImage(savedData.bannerImage || null);
  }, []);

  const handleDrop = (acceptedFiles) => {
    setBannerImage(acceptedFiles[0]);
  };

  const handleSubmit = () => {
    if (!aboutMe || !bannerImage) {
      setErrors({
        aboutMe: !aboutMe ? 'About Me is required' : '',
        bannerImage: !bannerImage ? 'Banner image is required' : ''
      });
      return;
    }
    localStorage.setItem('signupData', JSON.stringify({ ...JSON.parse(localStorage.getItem('signupData')), aboutMe, bannerImage }));
    navigate('/signup/step4');
  };

  return (
    <div>
      <h2>Step 3: About You</h2>
      <textarea
        placeholder="About Me"
        value={aboutMe}
        onChange={(e) => setAboutMe(e.target.value)}
      />
      <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} style={{ border: '2px dashed #ddd', padding: '20px', textAlign: 'center' }}>
            <input {...getInputProps()} />
            <p>Drop your banner image here or click to select file</p>
            {bannerImage && <img src={URL.createObjectURL(bannerImage)} alt="Banner" style={{ maxWidth: '200px', maxHeight: '200px' }} />}
          </div>
        )}
      </Dropzone>
      {errors.aboutMe && <p className="error">{errors.aboutMe}</p>}
      {errors.bannerImage && <p className="error">{errors.bannerImage}</p>}
      <button onClick={handleSubmit}>Save and Continue</button>
    </div>
  );
};

export default Step3;
