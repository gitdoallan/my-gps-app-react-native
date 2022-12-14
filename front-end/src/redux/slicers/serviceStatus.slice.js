import { createSlice } from '@reduxjs/toolkit';

const initialState = { status: true, activated: true };

export const serviceStatusSlice = createSlice({
  name: 'serviceStatus',
  initialState,
  reducers: {
    setServiceActivated: (state, { payload }) => {
      state.activated = payload;
      return state;
    },
    setServiceStatus: (state, { payload }) => {
      state.status = payload;
      return state;
    },
  },
});

export const { setServiceStatus, setServiceActivated } = serviceStatusSlice.actions;
