import { createSlice } from '@reduxjs/toolkit';

const initialState = true;

export const serviceStatusSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    setServiceStatus: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setServiceStatus } = serviceStatusSlice.actions;
