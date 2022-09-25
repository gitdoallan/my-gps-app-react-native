import { createSlice } from '@reduxjs/toolkit';

const initialState = 10000;

export const serviceIntervalSlice = createSlice({
  name: 'serviceInterval',
  initialState,
  reducers: {
    setServiceInterval: (state, { payload }) => {
      state = payload;
      return state;
    },
  },
});

export const { setServiceInterval } = serviceIntervalSlice.actions;
