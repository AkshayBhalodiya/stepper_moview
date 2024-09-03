import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setStep } from '../../redux/reducers/signupSlice';
const languages = [
    { name: 'English', flag: '🇬🇧', symbol: 'EN' },
    { name: 'Spanish', flag: '🇪🇸', symbol: 'ES' },
    { name: 'French', flag: '🇫🇷', symbol: 'FR' },
    // Add more languages as needed
  ];
  

const Step5 = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Load saved data from local storage
    const savedData = JSON.parse(localStorage.getItem('signupData')) || {};
    setSelectedLanguages(savedData.preferredLanguages || []);
  }, []);

  const handleLanguageSelect = (language) => {
    setSelectedLanguages((prev) => 
      prev.includes(language) ? prev.filter((l) => l !== language) : [...prev, language]
    );
  };

  const handleSubmit = () => {
    if (selectedLanguages.length === 0) {
      alert('Please select at least one language.');
      return;
    }

    // Save selected languages in local storage
    localStorage.setItem('signupData', JSON.stringify({ ...JSON.parse(localStorage.getItem('signupData')), preferredLanguages: selectedLanguages }));

    // Move to the completion step
    dispatch(setStep(5));
    navigate('/signup/complete');
  };

  return (
    <div>
      <h2>Step 5: Preferred Languages</h2>
      <div className="language-cards">
        {languages.map((language) => (
          <div
            key={language.symbol}
            className={`language-card ${selectedLanguages.includes(language.symbol) ? 'selected' : ''}`}
            onClick={() => handleLanguageSelect(language.symbol)}
          >
            <span className="language-flag">{language.flag}</span>
            <span className="language-name">{language.name}</span>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Complete Signup</button>
    </div>
  );
};

export default Step5;
