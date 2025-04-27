import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useClock } from '../context/ClockContext';


const DisplayClock = () => {
  const [time, setTime] = useState<string>('');
  const { showSeconds, isLandscape, fontSize } = useClock();

  useEffect(() => {
    const fetchTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const secondsFormat = () => (showSeconds ? ` : ${seconds}` : '');

      setTime(`${hours} : ${minutes}${secondsFormat()}`);
    };

    fetchTime();
    const interval = setInterval(fetchTime, 1000);
    return () => clearInterval(interval);
  }, [showSeconds]);

  // const sizeClass = sizeClasses[fontSize as keyof typeof sizeClasses] || 'text-[110px]';

  return (
    <View className="w-full flex-1 items-center justify-center">
      <Text
        style={{ fontSize: fontSize * 10 }}
        className="text-center font-bold text-red-950"
        numberOfLines={1}
        adjustsFontSizeToFit={false}>
        {time}
      </Text>
    </View>
  );
};

export default DisplayClock;
