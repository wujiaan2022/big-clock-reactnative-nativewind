import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import './global.css';

import { DisplayClock, FontResize, SecondsToggle } from './src/components';
import { ClockProvider, useClock } from './src/context/ClockContext';
import OrientationBlock from '~/components/OrientationBlock';

const App = () => {
  return (
    <ClockProvider>
      <OrientationBlock />
      <StatusBar style="auto" />
    </ClockProvider>
  );
};

export default App;
