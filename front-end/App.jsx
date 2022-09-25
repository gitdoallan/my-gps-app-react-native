import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Routes } from 'routes';
import { theme } from 'themes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView backgroundColor={theme.default.statusBarBg} />
      <StatusBar style={theme.default.statusBar} />
      <Routes />
    </ThemeProvider>
  );
}
