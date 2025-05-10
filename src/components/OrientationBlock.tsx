import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import { DisplayClock, FontResize, SecondsToggle } from './';
import { ClockProvider, useClock } from '../context/ClockContext';
import ThemeSwitch from './ThemeSwitch';

const OrientationBlock = () => {
  const { isLandscape, themeStyle } = useClock();

  const controls = [<SecondsToggle />, <FontResize />, <ThemeSwitch />];

  return (
    <View
      className={`flex-1 ${isLandscape ? 'flex-row' : 'flex-col'}`}
      style={{
        backgroundColor: themeStyle.backgroundColor,
      }}>
      <View className="flex-1 items-center justify-center">
        <DisplayClock />
      </View>

      <View className={`items-center justify-evenly ${isLandscape ? 'flex-col' : 'flex-row'}`}>
        {controls.map((control, index) => (
          <View key={index} className="flex-1 items-center justify-evenly">
            {control}
          </View>
        ))}
      </View>
    </View>
  );
};

export default OrientationBlock;
