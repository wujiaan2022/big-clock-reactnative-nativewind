import { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';

import './global.css';

export default function App() {
  const [time, setTime] = useState<string>('');
  const [isLandscape, setIsLandscape] = useState<boolean>(false);

  // Update time every second
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}:${seconds}`);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Detect screen orientation change
  useEffect(() => {
    const onChange = () => {
      const { width, height } = Dimensions.get('window');
      const landscape = width > height;
      setIsLandscape(landscape);
      console.log('Orientation changed:', landscape ? 'Landscape' : 'Portrait');
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    onChange(); // run once

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View
      className={`flex-1 items-center justify-center bg-amber-100 ${
        isLandscape ? 'flex-row' : 'flex-col'
      }`}>
      <Text className="px-4 py-2 text-7xl font-bold text-gray-800">{time}</Text>
    </View>
  );
}
