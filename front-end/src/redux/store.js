import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { serviceStatusSlice, serviceIntervalSlice, locationSlice } from './slicers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['serviceStatusValue', 'serviceIntervalValue', 'locationsValue'],
};

export const rootReducers = combineReducers({
  serviceStatus: serviceStatusSlice.reducer,
  serviceInterval: serviceIntervalSlice.reducer,
  locationsValue: locationSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
