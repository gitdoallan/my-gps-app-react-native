import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Routes } from 'routes';
import { theme } from 'themes';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { GetLocation } from 'components/Common';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SafeAreaView backgroundColor={theme.default.statusBarBg} />
        <StatusBar style={theme.default.statusBar} />
        <GetLocation />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
