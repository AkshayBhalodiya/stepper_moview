import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    step: 1,
    data: {}
  },
  reducers: {
    saveData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
    setStep: (state, action) => {
      state.step = action.payload;
    }
  }
});

export const { saveData, setStep } = signupSlice.actions;

export default signupSlice.reducer;
