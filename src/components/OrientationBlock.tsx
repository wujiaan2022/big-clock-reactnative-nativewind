import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { DisplayClock, FontResize, SecondsToggle } from './';
import { ClockProvider, useClock } from '../context/ClockContext';

const OrientationBlock = () => {
  const { isLandscape } = useClock();

  return (
    <View className={`flex-1 bg-amber-100 ${isLandscape ? 'flex-row' : 'flex-col'}`}>
      <View className="flex-1 items-center justify-center">
        <DisplayClock />
      </View>

      <View className={`items-center justify-evenly ${isLandscape ? 'flex-col' : 'flex-row'}`}>
        <SecondsToggle />
        <FontResize />
      </View>
    </View>
  );
};

export default OrientationBlock;
