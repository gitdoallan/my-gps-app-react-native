import { createSlice } from '@reduxjs/toolkit';

const initialState = { online: [], offline: [] };

export const locationSlice = createSlice({
  name: 'locationsValue',
  initialState,
  reducers: {
    setLocationSlice: (state, { payload }) => {
      state.online.push(payload);
      return state;
    },
    setPendingLocationSlice: (state, { payload }) => {
      state.offline.push(payload);
      return state;
    },
  },
});

export const { setLocationSlice, setPendingLocationSlice } = locationSlice.actions;
