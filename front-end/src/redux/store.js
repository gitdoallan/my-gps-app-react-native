import { configureStore } from '@reduxjs/toolkit';
import { serviceStatusSlice, serviceIntervalSlice } from './slicers';

export const store = configureStore({
  reducer: {
    serviceStatus: serviceStatusSlice.reducer,
    serviceInterval: serviceIntervalSlice.reducer,
  },
});
