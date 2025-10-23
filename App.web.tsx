import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ClockProvider } from './src/context/ClockContext';
import OrientationBlock from '~/components/OrientationBlock';
import 'nativewind/tailwind.css';   // ✅ correct for NativeWind web
import './global.css';              // ✅ optional, same content

export default function App() {
  return (
    <ClockProvider>
      <OrientationBlock />
      <StatusBar hidden />
    </ClockProvider>
  );
}
