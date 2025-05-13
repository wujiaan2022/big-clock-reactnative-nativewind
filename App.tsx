import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import './global.css';

import { DisplayClock, FontResize, SecondsToggle } from './src/components';
import { ClockProvider, useClock } from './src/context/ClockContext';
import OrientationBlock from '~/components/OrientationBlock';

import { useKeepAwake } from 'expo-keep-awake';

const App = () => {
  useKeepAwake(); // ✅ keeps screen awake
  return (
    <ClockProvider>
      <OrientationBlock />
      <StatusBar hidden={true} />
    </ClockProvider>
  );
};

export default App;
