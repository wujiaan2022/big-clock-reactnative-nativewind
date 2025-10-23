import 'react-native-gesture-handler'; // must be first
import React, { useCallback, useEffect } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { useKeepAwake } from 'expo-keep-awake';

import ErrorBoundary from './src/errors/ErrorBoundary';
import { installGlobalErrorHandler } from './src/errors/globalErrorHandler';

import { ClockProvider } from './src/context/ClockContext';
import OrientationBlock from '~/components/OrientationBlock';

// Prevent auto-hide as early as possible
SplashScreen.preventAutoHideAsync().catch(() => {});

export default function App() {
  useKeepAwake();

  useEffect(() => {
    installGlobalErrorHandler();
  }, []);

  // Hide splash right after the first frame is laid out
  const onLayoutRootView = useCallback(() => {
    SplashScreen.hideAsync().catch(() => {});
  }, []);

  return (
    <ErrorBoundary>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <ClockProvider>
          <OrientationBlock />
          <StatusBar hidden />
        </ClockProvider>
      </View>
    </ErrorBoundary>
  );
}
