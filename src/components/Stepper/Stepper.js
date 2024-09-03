import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStep } from '../../redux/reducers/signupSlice';

const Stepper = () => {
  const dispatch = useDispatch();
  const step = useSelector((state) => state.signup.step);
  const handleStepChange = (newStep) => {
    console.log('Current Step:', step);
    console.log('New Step:', newStep);
    if (newStep > 0 && newStep <= 5) {
      dispatch(setStep(newStep));
    }
  };
  

  return (
    <div className="stepper">
      <button onClick={() => handleStepChange(step - 1)} disabled={step === 1}>Previous</button>
      <span>5 Steps</span>
      <button onClick={() => handleStepChange(step + 1)} disabled={step === 5}>Next</button>
    </div>
  );
};

export default Stepper;
