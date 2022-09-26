import { createSlice } from '@reduxjs/toolkit';

const initialState = { all: [], offline: [] };

export const locationSlice = createSlice({
  name: 'locationsValue',
  initialState,
  reducers: {
    setLocationSlice: (state, { payload }) => {
      state.all.push(payload);
      return state;
    },
    setPendingLocation: (state, { payload }) => {
      state.all.push(payload);
      state.offline.push(payload);
      return state;
    },
    setRemoveFromOffline: (state, { payload }) => {
      state.offline = state.offline.filter((item) => item.id !== payload);
      return state;
    },
  },
});

export const { setLocationSlice, setPendingLocation, setRemoveFromOffline } = locationSlice.actions;
