import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const locationSlice = createSlice({
  name: 'locationSlice',
  initialState,
  reducers: {
    setLocationSlice: (state, { payload }) => {
      state.push(payload);
      return state;
    },
  },
});

export const { setLocationSlice } = locationSlice.actions;
