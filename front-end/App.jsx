import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Routes } from 'routes';
import { theme } from 'themes';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { LocationService } from 'components/Common';
import { store, persistor } from 'redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <SafeAreaView backgroundColor={theme.default.statusBarBg} />
          <StatusBar style={theme.default.statusBar} />
          <LocationService />
          <Routes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
