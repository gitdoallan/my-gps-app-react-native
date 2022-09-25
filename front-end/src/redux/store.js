import { configureStore } from '@reduxjs/toolkit';
import { serviceStatusSlice } from './slicers';

export const store = configureStore({
  reducer: {
    serviceStatus: serviceStatusSlice.reducer,
  },
});
