import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import store from './redux/store'; // Import store

import Stepper from './components/Stepper/Stepper';
import Step1 from './components/Signup/Step1';
import Step2 from './components/Signup/Step2';
import Step3 from './components/Signup/Step3';
import Step4 from './components/Signup/Step4';
import Step5 from './components/Signup/Step5';
import MovieList from './components/Movie/MovieList';
import MovieDetail from './components/Movie/MovieDetail';
import './App.css';
import Complete from './components/Signup/Complete';

const App = () => {
  return (
    <Provider store={store}> {/* Wrap your application in Provider */}
      <Router>
        <Stepper />
        <Routes>
          <Route path="/signup/step1" element={<Step1 />} />
          <Route path="/signup/step2" element={<Step2 />} />
          <Route path="/signup/step3" element={<Step3 />} />
          <Route path="/signup/step4" element={<Step4 />} />
          <Route path="/signup/step5" element={<Step5 />} />
          <Route path="/signup/complete" element={<Complete />} />
          <Route path="/movies" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/signup/step1" element={<h1>Welcome to the Signup and Movie App</h1>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
