import { useFonts } from 'expo-font';
import { View } from 'react-native';
import './global.css';

import { DisplayClock, FontResize, SecondsToggle } from './src/components';
import { ClockProvider } from './src/context/ClockContext';

const App = () => {
  return (
    <ClockProvider>
      <View className="flex-1 bg-amber-100">
        <View className="flex-1 items-center justify-center">
          <DisplayClock />
        </View>

        <View>
          <SecondsToggle />
        </View>

        <View>
          <FontResize />
        </View>
      </View>
    </ClockProvider>
  );
};

export default App;
